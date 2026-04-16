# 🚀 Landing Page Portfolio - Sara Arguello

Professional portfolio landing page showcasing Full-Stack development projects with Clean Architecture and TDD.

## 🎯 Project Overview

Modern, accessible, and performant landing page built with:
- **React 18** + **Vite 5** for blazing-fast development
- **Tailwind CSS** for utility-first styling
- **Vitest** + **Testing Library** for comprehensive testing (TDD approach)
- **Clean Architecture** with feature-based organization

## 🛠️ Tech Stack

### Frontend
- React 18.2 (functional components + hooks)
- Tailwind CSS 3.4 (with dark mode)
- Vite 5 (build tool)

### Testing
- Vitest 1.x
- Testing Library (React + Jest-DOM)
- 70%+ code coverage target

### Development
- ESLint (React plugin)
- pnpm (package manager)
- PostCSS + Autoprefixer

## 📦 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm 8+

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Run tests
pnpm test

# Run tests with UI
pnpm test:ui

# Check coverage
pnpm test:coverage

# Build for production
pnpm build

# Preview production build
pnpm preview

# Lint code
pnpm lint
```

## 🏗️ Project Structure

```
landing-page-me/
├── src/
│   ├── features/              # Feature-based organization (Screaming Architecture)
│   │   ├── hero/             # Hero section
│   │   ├── projects/         # Projects showcase
│   │   ├── tech-stack/       # Tech stack visualization
│   │   └── contact/          # Contact section
│   ├── shared/               # Shared/reusable code
│   │   ├── components/       # Button, Card, Section
│   │   └── utils/            # Helper functions
│   ├── tests/                # Test setup
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles (Tailwind)
├── public/                    # Static assets
├── AGENTS.md                  # Development context and decisions
└── package.json
```

## 🎨 Design Principles

- **Mobile-first** responsive design
- **Accessibility** (WCAG AA compliant)
- **Dark mode** support (automatic)
- **Clean & minimal** aesthetic
- **Performance-focused** (Lighthouse >90)

## 🧪 Testing Strategy

Following **Test-Driven Development (TDD)**:
1. Write test first
2. Implement feature
3. Refactor

### What we test:
✅ Critical components (Button, Card, Section)  
✅ User interactions  
✅ Navigation flow  
✅ Form validation  

### What we don't test:
❌ Pure styling (Tailwind handles it)  
❌ Trivial components (<5 lines)  

## 📝 Code Conventions

### Naming
- **Components:** PascalCase (`Button.jsx`, `Hero.jsx`)
- **Tests:** PascalCase + `.test.jsx` (`Button.test.jsx`)
- **Utils:** camelCase (`formatDate.js`)
- **Variables:** camelCase (`userName`, `handleClick`)
- **Constants:** UPPER_SNAKE_CASE (`MAX_ITEMS`)

### Language
- **Code:** English (variables, functions, comments)
- **Documentation:** Spanish (README sections, AGENTS.md)
- **Commits:** English (following conventional commits)

## 🚀 Deployment

Deployed on **Vercel** with:
- Automatic deployments from `main` branch
- Preview deployments for PRs
- Custom domain (optional): `carlsgutierrez.dev`

## 📊 Quality Metrics

- **Test Coverage:** >70%
- **Lighthouse Score:** >90
- **ESLint Warnings:** 0
- **Accessibility:** WCAG AA

## 🔗 Featured Project

**PrimeBuy E-commerce** - https://primebuyinc.com/
- Full-stack e-commerce platform
- 301 automated tests
- Clean Architecture + TDD
- Docker, MySQL, Node.js, React
- CI/CD with GitHub Actions

[View Repository](https://github.com/Sa4rg/ecommerce-primebuy)

## 📚 Documentation

- [AGENTS.md](./AGENTS.md) - Complete development context and architectural decisions
- Feature READMEs in each `src/features/*/README.md`

## 🤝 Contributing

This is a personal portfolio project, but suggestions are welcome!

## 📄 License

MIT License - Feel free to use this as inspiration for your own portfolio.

---

**Built with ❤️ using Clean Architecture + TDD**