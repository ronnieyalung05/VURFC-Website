## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## How to Add New Pages & Features

Prepare your branch:

| Command                  | Action                    |
| :----------------------- | :------------------------ |
| `git checkout main`      | Update main branch        |
| `git pull`               |                           |
| `git checkout -b BRANCH` | Create new feature branch |

Make your changes:

| Command                                            | Action                            |
| :------------------------------------------------- | :-------------------------------- |
| `npm run dev`                                      | Start development server          |
| `git add .`                                        | Add your changes                  |
| `git commit -m "feat: describe your changes"`      | Commit with a descriptive message |
| `git push --set-upstream origin your-feature-name` | First time pushing the branch     |
| `git push`                                         | Subsequent pushes                 |

# Commit Message Guidelines

Follow these conventions for commit messages:

feat: - New features or pages
fix: - Bug fixes
docs: - Documentation changes
style: - Code style changes
refactor: - Code refactoring
test: - Adding tests
chore: - Maintenance tasks

## 👀 Want to learn more about Astro?

Feel free to check [our documentation](https://docs.astro.build).
