import { defineConfig } from 'vite'

// Derive base for GitHub Pages when building in GitHub Actions
// Example: joqbay7/portfolio-version1 -> base: /portfolio-version1/
const repoBase = process.env.GITHUB_REPOSITORY
  ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/`
  : '/'

export default defineConfig({
  base: repoBase,
  server: {
    port: 5173,
    open: true
  }
})
