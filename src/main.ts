import './style.css'

// Toggle menu mobile + acessibilidade
const toggle = document.querySelector<HTMLButtonElement>('.nav__toggle')
const list = document.querySelector<HTMLUListElement>('.nav__list')
const updateExpanded = (open: boolean) => toggle?.setAttribute('aria-expanded', String(open))
const openMenu = () => { list?.classList.add('is-open'); updateExpanded(true) }
const closeMenu = () => { list?.classList.remove('is-open'); updateExpanded(false) }
toggle?.addEventListener('click', () => {
  const open = !list?.classList.contains('is-open')
  open ? openMenu() : closeMenu()
})
document.addEventListener('click', (e) => {
  const target = e.target as Node
  if (!list || !toggle) return
  if (list.contains(target) || toggle.contains(target)) return
  closeMenu()
})
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu()
})

// Smooth scroll + fechar menu ao clicar
document.querySelectorAll<HTMLAnchorElement>('a.nav__link[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const href = a.getAttribute('href') || ''
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (!el) return
    e.preventDefault()
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  closeMenu()
  })
})

// Marcar link ativo conforme rolagem
const sections = Array.from(document.querySelectorAll<HTMLElement>('main section[id]'))
const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('.nav__link'))

const onScroll = () => {
  const pos = window.scrollY + 100 // offset do header
  let activeId = 'inicio'
  for (const s of sections) {
    const top = s.offsetTop
    const bottom = top + s.offsetHeight
    if (pos >= top && pos < bottom) {
      activeId = s.id
      break
    }
  }
  links.forEach((l) => {
    const href = l.getAttribute('href') || ''
    const id = href.replace('#', '')
    l.classList.toggle('is-active', id === activeId)
  })
}
window.addEventListener('scroll', onScroll, { passive: true })
onScroll()

// Footer year
const yearEl = document.getElementById('year')
if (yearEl) yearEl.textContent = String(new Date().getFullYear())

// Avatar posicionamento opcional via data-atributo
const avatarImg = document.querySelector<HTMLImageElement>('.hero__img')
const avatarPos = avatarImg?.dataset.position
if (avatarImg && avatarPos) avatarImg.style.objectPosition = avatarPos

// Projetos dinâmicos do GitHub
type Repo = {
  name: string
  description: string | null
  html_url: string
  homepage?: string | null
  stargazers_count: number
  language: string | null
  topics?: string[]
}

const projectsSection = document.querySelector<HTMLElement>('#projetos')
const grid = document.getElementById('projects-grid')
const ghUser = projectsSection?.dataset.githubUser?.trim()
const includeRepos = projectsSection?.dataset.includeRepos
  ?.split(',')
  .map((s) => s.trim().toLowerCase())
  .filter(Boolean)

const renderSkeletons = (n = 6) => {
  if (!grid) return
  grid.innerHTML = Array.from({ length: n })
    .map(
      () => `
      <article class="project" aria-busy="true" aria-label="Carregando projeto">
        <div class="skeleton title" aria-hidden="true"></div>
        <div class="skeleton text" aria-hidden="true"></div>
        <div class="skeleton text" aria-hidden="true"></div>
        <div class="skeleton actions" aria-hidden="true"></div>
      </article>`
    )
    .join('')
}

const renderError = (msg: string) => {
  if (!grid) return
  grid.innerHTML = `<p style="color: var(--muted)">${msg}</p>`
}

const formatDesc = (d?: string | null) => d?.slice(0, 160) || 'Sem descrição'

const renderRepos = (repos: Repo[]) => {
  if (!grid) return
  if (!repos.length) {
    renderError('Nenhum repositório encontrado.')
    return
  }
  const items = repos
    .slice(0, 8)
    .map((r) => {
      const tags = (r.topics || []).slice(0, 3).map((t) => `<span class=\"badge\">${t}</span>`).join(' ')
      // tenta inferir demo quando homepage não está definida (GitHub Pages comum)
      let demoHref = r.homepage && r.homepage.startsWith('http') ? r.homepage : ''
      if (!demoHref && ghUser) {
        demoHref = `https://${ghUser}.github.io/${r.name}/`
      }
      const demoBtn = demoHref
        ? `<a class="btn btn--primary" href="${demoHref}" target="_blank" rel="noopener">Ver demo</a>`
        : `<a class="btn btn--primary" aria-disabled="true">Sem demo</a>`
      return `
        <article class="project">
          <div class="project__meta">${tags || (r.language ? `<span class=\"badge\">${r.language}</span>` : '')}</div>
          <h3 class="project__title">${r.name}</h3>
          <p class="project__desc">${formatDesc(r.description)}</p>
          <div class="project__actions">
            ${demoBtn}
            <a class="btn btn--outline" href="${r.html_url}" target="_blank" rel="noopener">Código</a>
          </div>
        </article>`
    })
    .join('')
  grid.innerHTML = items
}

const fetchRepos = async (user: string) => {
  try {
    renderSkeletons()
    const res = await fetch(`https://api.github.com/users/${encodeURIComponent(user)}/repos?per_page=100`, {
      headers: { Accept: 'application/vnd.github+json' }
    })
    if (!res.ok) throw new Error(`GitHub: ${res.status}`)
    const data: Repo[] = await res.json()
    // Filtra por whitelist se existir
    let filtered = data
    if (includeRepos && includeRepos.length) {
      const set = new Set(includeRepos)
      filtered = data.filter((r) => set.has(r.name.toLowerCase()))
    }
    // Ordena por stars desc e dá leve prioridade a repositórios com homepage
    const sorted = filtered
      .filter((r) => !r.name.startsWith('.'))
      .sort((a, b) => (b.stargazers_count || 0) - (a.stargazers_count || 0))
      .sort((a, b) => (b.homepage ? 1 : 0) - (a.homepage ? 1 : 0))

    // Busca topics por API de repositório (opcional: pesado). Para leveza, seguimos sem segunda chamada.
    renderRepos(sorted)
  } catch (e) {
    console.error(e)
    renderError('Erro ao carregar projetos do GitHub.')
  }
}

if (ghUser) fetchRepos(ghUser)

// i18n removido: mantemos conteúdo apenas em PT-BR
