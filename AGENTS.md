# 🏗️ AGENTS.md - Guía de Contexto para Desarrollo

> **Última actualización:** 16 de abril de 2026  
> **Proyecto:** Landing Page Portfolio - Sara Arguello  
> **Repo:** landing-page-me

---

## 🎯 PROPÓSITO DEL PROYECTO

Landing page profesional tipo portfolio para mostrar proyectos a recruiters. Primera impresión crítica.

**Proyecto destacado:** E-commerce PrimeBuy (https://primebuyinc.com/)
- 301 tests automatizados
- CI/CD con GitHub Actions  
- Clean Architecture + TDD
- Docker + MySQL + Node.js + React
- Sentry, Cloudinary, AWS Lambda

---

## 🛠️ STACK TECNOLÓGICO

### Core
- **Package Manager:** `pnpm` (OBLIGATORIO)
- **Framework:** React 18+ (functional components + hooks)
- **Build Tool:** Vite 5+
- **Styling:** Tailwind CSS 3+
- **Testing:** Vitest + Testing Library
- **Type Safety:** JavaScript (TypeScript opcional)
- **Deployment:** Vercel

### Por qué pnpm?
- Más rápido y eficiente en espacio
- Mejor manejo de dependencias
- Consistencia con proyectos modernos

---

## 📐 ARQUITECTURA

### Clean Architecture + Screaming Architecture

```
src/
├── features/              # Organización por dominio
│   ├── hero/             # Sección principal
│   ├── projects/         # Showcase proyectos
│   ├── tech-stack/       # Skills visuales
│   └── contact/          # Enlaces contacto
├── shared/               # Código reutilizable
│   ├── components/       # Button, Card, Section
│   └── utils/            # Helpers generales
└── tests/                # Setup de testing
```

### Regla de Ámbito (Scope Rule)
- **Global** (`src/shared/`) → Componentes usables en CUALQUIER feature
- **Local** (`src/features/`) → Código específico de UNA sección

**Ejemplo:**
- ✅ `Button` en shared (se usa en hero, projects, contact)
- ❌ `HeroCTA` en shared (solo se usa en hero)

---

## ✅ PRINCIPIOS DE CÓDIGO

### 1. TDD Obligatorio
```javascript
// ❌ MAL: Implementar primero
function Button() { ... }

// ✅ BIEN: Test primero
describe('Button', () => {
  it('should render children', () => { ... })
})
// Luego implementar
```

### 2. Componentes Pequeños
- Máximo 100 líneas por componente
- Una responsabilidad por componente
- Extraer subcomponentes si crece

### 3. Props Bien Tipados
```javascript
// Usar PropTypes o TypeScript
Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}
```

### 4. Accesibilidad
- Semantic HTML (`<button>` no `<div onClick>`)
- ARIA labels cuando sea necesario
- Contraste WCAG AA mínimo
- Navegación por teclado

### 5. Responsive Mobile-First
```css
/* ✅ Mobile primero */
.card { padding: 1rem; }
@media (min-width: 768px) { 
  .card { padding: 2rem; } 
}

/* ❌ Desktop primero (evitar) */
```

---

## 🎨 DISEÑO Y UX

### Paleta de Colores
- **Primario:** Azul (#3b82f6)
- **Texto:** Gris oscuro (#1f2937) / Blanco (#f9fafb)
- **Fondo:** Blanco / Gris oscuro (#111827)
- **Acentos:** Verde/Azul brillante para CTAs

### Dark Mode
- Usa `dark:` variant de Tailwind
- Respeta `prefers-color-scheme`
- Variables CSS para colores

### Inspiración
- Brittany Chiang (https://brittanychiang.com/)
- Josh Comeau (https://joshwcomeau.com/)
- **Estilo:** Minimal pero impactante

### Animaciones
- Scroll suave entre secciones
- Fade-in al aparecer elementos
- Hover effects sutiles
- ⚠️ NO abusar - mantener profesional

---

## 📦 COMANDOS IMPORTANTES

```bash
# Desarrollo
pnpm dev              # Servidor desarrollo (puerto 5173)

# Testing
pnpm test             # Ejecutar tests
pnpm test:ui          # UI interactiva de tests
pnpm test:coverage    # Coverage report (mínimo 70%)

# Build
pnpm build            # Build de producción
pnpm preview          # Preview del build

# Linting
pnpm lint             # Verificar código (0 warnings)
```

---

## 🧪 TESTING

### Coverage Mínimo: 70%

### Qué testear
✅ Componentes críticos (Button, Card, Section)
✅ Formularios y validaciones
✅ Navegación entre secciones
✅ Interacciones del usuario
❌ Estilos puros (Tailwind se encarga)
❌ Componentes triviales (<5 líneas)

### Ejemplo de Test
```javascript
import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  it('should call onClick when clicked', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    
    screen.getByRole('button').click()
    expect(handleClick).toHaveBeenCalledOnce()
  })
})
```

---

## 📝 CONTENIDO DE LA LANDING

### Hero Section
- Nombre: "Sara Arguello"
- Título: "Full-Stack Developer"
- Tagline: "Building scalable e-commerce solutions with clean architecture"
- CTA: "View Projects" / "Download CV"
- Links: GitHub, LinkedIn, Email

### Featured Project
**PrimeBuy E-commerce:**
- Screenshot (placeholder por ahora)
- Tech: Node.js, React, MySQL, Docker, AWS
- Métricas: 301 tests, CI/CD, Clean Architecture
- Links: GitHub repo + Documentación

### Tech Stack (Visual)
- Frontend: React, Vite, Tailwind, Testing Library
- Backend: Node.js, Express, MySQL, Knex.js
- DevOps: Docker, GitHub Actions, Render, Vercel

### Contact
- Email con mailto:
- LinkedIn, GitHub
- Download CV (opcional)

---

## 🚨 QUÉ EVITAR

❌ Componentes gigantes (>100 líneas)
❌ CSS inline (solo Tailwind classes)
❌ Ignorar accesibilidad
❌ Implementar sin tests
❌ Librerías pesadas innecesarias
❌ Warnings de ESLint
❌ `npm` o `yarn` (usar `pnpm`)
❌ Hardcodear valores (usar constants)

---

## ✨ BUENAS PRÁCTICAS

✅ Test → Implementación → Refactor (TDD)
✅ Componentes pequeños y enfocados
✅ Usar Tailwind de forma idiomática
✅ Semantic HTML siempre
✅ Mobile-first responsive
✅ Commits descriptivos en inglés
✅ Variables en inglés, comentarios en español
✅ README actualizado

---

## 🗂️ CONVENCIONES DE NAMING

### Archivos
- Componentes: `PascalCase.jsx` (Button.jsx, Card.jsx)
- Tests: `PascalCase.test.jsx` (Button.test.jsx)
- Utils: `camelCase.js` (formatDate.js)
- Estilos: `kebab-case.css` (index.css)

### Código
```javascript
// ✅ BIEN
const handleClick = () => {}        // camelCase para funciones
const MAX_ITEMS = 10                // UPPER_SNAKE para constantes
function UserProfile() {}           // PascalCase para componentes

// ❌ MAL
const HandleClick = () => {}        // No PascalCase para funciones
const maxItems = 10                 // No camelCase para constantes
function userProfile() {}           // No camelCase para componentes
```

---

## 🎯 MÉTRICAS DE ÉXITO

### Performance
- Lighthouse score: >90
- First Contentful Paint: <1.5s
- Time to Interactive: <3s

### Accesibilidad
- WCAG AA compliant
- Navegación por teclado completa
- Lectores de pantalla compatibles

### Testing
- Coverage: >70%
- Todos los tests pasando
- 0 warnings de ESLint

### SEO
- Meta tags completos
- Sitemap generado
- robots.txt configurado

---

## 📚 RECURSOS ÚTILES

- [React Docs](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vitest](https://vitest.dev/)
- [Testing Library](https://testing-library.com/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

## 🔄 DECISIONES TOMADAS

### 2026-04-16

#### Setup Inicial
- ✅ Usar `pnpm` como package manager
- ✅ Crear estructura de carpetas Screaming Architecture
- ✅ Configurar Tailwind con dark mode automático
- ✅ Setup de Vitest con coverage
- ✅ Fuentes: Inter (sans) + Fira Code (mono)
- ✅ ESLint configurado con React plugin

#### Componentes Shared Completados (Fase 1)
- ✅ **Button Component** (16 tests) - Variants: primary, secondary, outline | Sizes: sm, md, lg
- ✅ **Card Component** (17 tests) - Variants: default, bordered, elevated, outlined | Hoverable effect
- ✅ **Section Component** (15 tests) - Layout wrapper con spacing y backgrounds configurables
- ✅ **ImagePlaceholder Component** - Placeholder gris para screenshots futuras

**Total Shared Fase 1: 48 tests pasando** ✅

#### Features Completados (Fase 2)
- ✅ **Hero Section** (12 tests) - Presentación principal con nombre, título, tagline, CTAs y enlaces sociales
- ✅ **Projects Section** (16 tests) - Showcase del e-commerce PrimeBuy con métricas y tech stack
- ✅ **Tech Stack Section** (19 tests) - Visualización de tecnologías por categorías (Frontend, Backend, DevOps, Tools)
- ✅ **Contact Section** (12 tests) - Enlaces de contacto (Email, GitHub, LinkedIn) + Footer

**Total Features Fase 2: 59 tests pasando** ✅

#### Componentes Shared Avanzados (Fase 3 - Screenshots)
- ✅ **Carousel Component** (19 tests) - Carrusel de imágenes con navegación, dots, auto-play, keyboard support
- ✅ **FeatureHighlight Component** (16 tests) - Cards de features con imagen + título + descripción

**Total Shared Fase 3: 35 tests pasando** ✅

#### Screenshots Integradas (Fase 3)
- ✅ **10 Screenshots Reales** copiadas a `public/images/primebuy/`
- ✅ **Carrusel Principal** con 7 screenshots del user flow completo:
  - Home Landing → AI Chatbot → OAuth Login → Catalog → Cart → Checkout → Order Detail
- ✅ **3 Feature Highlights** con screenshots específicas:
  - AI Shopping Assistant (Chatbot integration)
  - Multi-Payment Gateway (Checkout process)
  - Admin Control Panel (Payment tracking dashboard)
- ✅ **Projects Section Actualizada** con Carousel y FeatureHighlights
- ✅ **Auto-play configurado** a 4 segundos por slide

**Total Screenshots: 10 imágenes | 7 en carrusel + 3 en features** 📸

#### **TOTAL PROYECTO: 142 TESTS PASANDO** 🎉

### Arquitectura de Componentes
- Barrel exports en `/shared/components/index.js` para importaciones limpias
- PropTypes validados en todos los componentes
- Tests exhaustivos (rendering, variants, interactions, accessibility)
- Tailwind classes dinámicas con todas las variantes
- Semantic HTML y ARIA labels para accesibilidad

### Información del Proyecto PrimeBuy
- URL: https://primebuyinc.com/
- Repo: https://github.com/Sa4rg/ecommerce-primebuy
- Stack: React, Node.js, MySQL, Docker, AWS
- 301 tests automatizados
- CI/CD con GitHub Actions
- Clean Architecture + TDD

### Enlaces Sociales
- GitHub: https://github.com/Sa4rg
- LinkedIn: https://linkedin.com/in/sara-arguello (placeholder)
- Email: sara.arguello@example.com (placeholder)

---

## 🚀 PRÓXIMOS PASOS

1. ✅ Setup básico completo
2. ✅ Crear componentes shared (Button, Card, Section)
3. ✅ Implementar Hero section
4. ✅ Implementar Projects section
5. ✅ Implementar Tech Stack visual
6. ✅ Implementar Contact/Footer section
7. ✅ Crear componentes Carousel y FeatureHighlight
8. ✅ Agregar screenshots reales de PrimeBuy
9. ⏳ Optimizaciones UX (smooth scroll, animaciones)
10. ⏳ Deploy a Vercel

---

**Recuerda:** Este proyecto es un portfolio profesional con estándares de producción. Código limpio > Features abundantes.
