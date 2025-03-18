![logo-grupo-coobrastur-light](https://github.com/user-attachments/assets/8dba9677-d2d5-43c4-a886-abf0a150fee7)

## Project Overview

Coobrastur is built as a monorepo using Turborepo, which organizes multiple
related applications and packages together. This architecture enables code
sharing and maintains consistency across the project.

## Project Structure

```
coobrastur/
├── apps/                  # Applications
│   ├── web/               # Main website application
│   └── fast-travel/       # Storybook app for component documentation
├── packages/              # Shared packages
│   ├── ui/                # UI component library
│   ├── eslint-config/     # Shared ESLint configurations
│   └── typescript-config/ # Shared TypeScript configurations
```

## Tecnologies

- [React 19](https://www.react.dev)
- [NextJS 15](https://www.nextjs.org)
- [TypeScript](https://www.typescript.com)
- [TailwindCSS v3](https://v3.tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Storybook](https://storybook.js.org/)
- [Vitest](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Playwright](https://playwright.dev/)
- [Turborepo](https://turbo.build/repo/docs)
- [Sentry](https://sentry.io/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [Tanstack Query](https://tanstack.com/query/latest/docs/framework/react/overview)
- [React Hook Form](https://www.react-hook-form.com/)
- [Zod](https://zod.dev/)
- [Lucide Icons](https://lucide.dev/icons/)

## Getting Started

### Prerequisites

- Node.js 20 or higher (as specified in `.nvmrc`)
- pnpm 9.12.3 or higher (specified in `package.json`)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```

### Development Commands

- Start development server: `pnpm dev`
- Build all applications: `pnpm build`
- Launch Storybook: `pnpm storybook`
- Lint code: `pnpm lint`
- Format code: `pnpm format`
- Clean node_modules: `pnpm clean-modules`

## Component Development

### UI Library

Components are organized in the `packages/ui/src/components` directory following
a categorical structure:

- **DataDisplay**: Components for displaying data
- **DataEntry**: Form and input components
- **Feedback**: Notification and alert components
- **Layout**: Structural components
- **Navigation**: Menus and navigation elements

### Component Creation Guidelines

1. **Composition Pattern**: Break down complex components into smaller, reusable
   parts
2. **Accessibility**: Ensure components include proper ARIA attributes and
   keyboard navigation
3. **Class Variance Authority (CVA)**: Use for consistent component variants
4. **Mobile-First Design**: Components should be responsive, starting with
   mobile layouts

### Styling Approach

- Tailwind CSS for utility classes
- Mobile-first responsive design

## Development Workflow

### Coding Standards

- **TypeScript**: Use strict typing for better code quality
- **ESLint & Prettier**: Automatic code formatting and linting
- **Naming Conventions**:
  - PascalCase for components and types
  - camelCase for functions and variables
  - kebab-case for file and directory names

### Git Workflow

1. Create a feature branch from the dev branch
2. Make changes and commit with descriptive messages
3. Open a pull request for review
4. Address any feedback
5. Merge to dev branch after approval

## Web Application Structure

The main web application (`apps/web`) follows Next.js 15 app router conventions:

- `app/`: Contains routes and page components
- `shared/`: Shared utilities and components specific to the web app
- `services/`: API service integrations and data fetching logic

```
web/
├── app/                     # Next.js main application directory
│   ├── page/                # Specific page route
│   │   ├── components/      # Components exclusive to this page
│   │   ├── containers/      # Component containers for this page
│   │   ├── page.tsx         # Page component
│   │   └── layout.tsx       # Page-specific layout
│   ├── api/                 # API routes
│   ├── layout.tsx           # Global application layout
│   └── page.tsx             # Home page
│
├── public/                  # Public static files
│   └── images/              # Images
│       ├── icons/           # Icons
│       ├── mocks/           # Images for test data
│       ├── pages/           # Page-specific images
│       └── shared/          # Shared images
│
├── services/                # API integration services
│
└── shared/                  # Resources shared across the application
    ├── components/          # Reusable components
    ├── helpers/             # Helper functions
    ├── hooks/               # Custom hooks
    ├── lib/                 # Libraries and utilities
    ├── mocks/               # Test data
    ├── providers/           # Context providers
    └── types/               # TypeScript type definitions

```

## Storybook

The Storybook application (`apps/fast-travel`) is used for:

- Component documentation
- Visual testing
- Interactive development environment
- Component state exploration (default, loading, error, etc.)

Access Storybook by running `pnpm storybook` and opening the provided URL.
