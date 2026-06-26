# Adalatly Masalahat Admin

A modern, responsive admin dashboard application built with **React 18**, **TypeScript**, and **Vite**. This project serves as the administrative interface for the Adalatly Masalahat platform.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Configuration](#configuration)
- [API Integration](#api-integration)
- [Development Guidelines](#development-guidelines)

---

## 🎯 Overview

The **Adalatly Masalahat Admin** application is a professional-grade admin panel designed to manage and control various aspects of the Adalatly Masalahat platform. Built with cutting-edge technologies and best practices, it provides a user-friendly interface for administrators to efficiently manage platform operations.

**Repository:** [Kerim002/adalatly-masalahat-admin](https://github.com/Kerim002/adalatly-masalahat-admin)  
**Language:** TypeScript  
**Created:** October 6, 2024

---

## ✨ Features

### Core Capabilities
- 🔐 **Authentication & Authorization** - Secure login with token-based authentication (js-cookie)
- 📊 **Data Management** - Efficient data fetching and caching with React Query
- 🎨 **Rich Text Editing** - Dual rich-text editors (CKEditor 5 & Jodit) for content management
- 🧭 **Client-side Routing** - Seamless navigation with React Router v6
- 🔄 **State Management** - Server state management with TanStack React Query
- 📱 **Responsive Design** - Mobile-friendly UI with Ant Design component library
- 🎭 **Smooth Animations** - Enhanced user experience with Framer Motion
- 📧 **Toast Notifications** - User feedback with Sonner toast library
- 🎨 **Modern Styling** - Tailwind CSS + Sass for flexible styling
- 🔍 **Code Quality** - Strict TypeScript configuration with ESLint
- ⚡ **Fast Development** - Vite's instant HMR (Hot Module Replacement)

---

## 🛠 Tech Stack

### Core Framework
| Package | Version | Purpose |
|---------|---------|---------|
| **React** | 18.3.1 | UI library |
| **React DOM** | 18.3.1 | DOM rendering |
| **TypeScript** | 5.5.3 | Type safety |
| **Vite** | 5.4.1 | Build tool & dev server |

### UI & Styling
| Package | Version | Purpose |
|---------|---------|---------|
| **Ant Design** | 5.21.2 | Component library |
| **Tailwind CSS** | 3.4.13 | Utility-first CSS framework |
| **Sass** | 1.79.4 | CSS preprocessor |
| **Framer Motion** | 11.9.0 | Animation library |

### API & Data Management
| Package | Version | Purpose |
|---------|---------|---------|
| **Axios** | 1.7.7 | HTTP client |
| **React Query** | 5.59.0 | Server state management |
| **React Query Devtools** | 5.59.15 | Debugging React Query |

### Rich Text Editing
| Package | Version | Purpose |
|---------|---------|---------|
| **CKEditor 5** | 43.3.0 | Professional WYSIWYG editor |
| **CKEditor 5 React** | 9.3.1 | CKEditor React integration |
| **Jodit React** | 4.1.2 | Alternative WYSIWYG editor |

### Form & Navigation
| Package | Version | Purpose |
|---------|---------|---------|
| **React Hook Form** | 7.53.0 | Lightweight form management |
| **React Router DOM** | 6.26.2 | Client-side routing |

### Utilities
| Package | Version | Purpose |
|---------|---------|---------|
| **js-cookie** | 3.0.5 | Cookie management |
| **React Icons** | 5.3.0 | Icon library |
| **Sonner** | 1.5.0 | Toast notifications |

### Development Tools
| Package | Version | Purpose |
|---------|---------|---------|
| **ESLint** | 9.9.0 | Code linting |
| **TypeScript ESLint** | 8.0.1 | TypeScript linting |
| **ESLint Plugin React Hooks** | 5.1.0-rc.0 | React hooks linting |
| **ESLint Plugin React Refresh** | 0.4.9 | Fast Refresh support |
| **PostCSS** | 8.4.47 | CSS transformation |
| **Autoprefixer** | 10.4.20 | CSS vendor prefixes |

---

## 📁 Project Structure

```
adalatly-masalahat-admin/
├── src/
│   ├── app/              # Application setup & core logic
│   ├── entities/         # Data models & types
│   ├── features/         # Feature modules (authentication, etc.)
│   ├── pages/            # Page components & routes
│   ├── shared/           # Shared utilities, hooks, constants
│   ├── widgets/          # Reusable UI components
│   └── vite-env.d.ts     # Vite type definitions
├── public/               # Static assets
├── node_modules/         # Dependencies
├── index.html            # HTML entry point
├── package.json          # Project dependencies & scripts
├── tsconfig.json         # TypeScript base config
├── tsconfig.app.json     # Application TypeScript config
├── tsconfig.node.json    # Node/Vite TypeScript config
├── vite.config.ts        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
├── eslint.config.js      # ESLint configuration
└── README.md             # This file
```

### Directory Details

- **`src/app/`** - Core application setup, providers, and main entry point
- **`src/entities/`** - TypeScript interfaces and data models for the application
- **`src/features/`** - Feature-based modules (e.g., authentication, admin panels)
- **`src/pages/`** - Page-level components corresponding to routes
- **`src/shared/`** - Shared utilities, custom hooks, constants, and helpers
- **`src/widgets/`** - Reusable UI components and custom component library

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 16.0 or higher
- **npm** 7.0+ or **yarn** 1.22+ or **pnpm** 6.0+

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Kerim002/adalatly-masalahat-admin.git
   cd adalatly-masalahat-admin
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

---

## 📜 Available Scripts

All scripts should be run from the project root directory:

| Script | Command | Purpose |
|--------|---------|---------|
| **Development** | `npm run dev` | Start development server with HMR |
| **Build** | `npm run build` | Build for production (TypeScript check + Vite build) |
| **Lint** | `npm run lint` | Check code quality with ESLint |
| **Preview** | `npm run preview` | Preview production build locally |

### Script Details

```bash
# Start development server
npm run dev
# → Opens Vite dev server on port 5173 with HMR enabled

# Production build (TypeScript compilation + Vite optimization)
npm run build
# → Outputs optimized files to dist/ directory

# Check and fix linting issues
npm run lint
# → Runs ESLint across the entire project

# Preview production build
npm run preview
# → Serve the production build locally for testing
```

---

## ⚙️ Configuration

### Vite Configuration (`vite.config.ts`)

```typescript
// Key configurations:
- React plugin enabled for JSX transformation
- Path alias: @ → ./src (for cleaner imports)
- Dev server on port 5173
- CORS enabled
- API proxy: /api → http://216.250.10.181:4000
```

**Important:** The API proxy is configured to forward `/api` requests to `http://localhost:5000`. Ensure this backend service is running for API calls to work.

### TypeScript Configuration (`tsconfig.app.json`)

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "jsx": "react-jsx",
    "strict": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]  // Path alias support
    }
  }
}
```

**Key Features:**
- ✅ Strict type checking enabled
- ✅ No unused variables or parameters allowed
- ✅ Path aliases for cleaner imports
- ✅ Modern JavaScript target (ES2020)

### Tailwind CSS (`tailwind.config.js`)

Tailwind CSS is configured for utility-first styling. Customize the theme in `tailwind.config.js` for branding colors, fonts, and breakpoints.

---

## 🔌 API Integration

### Backend Configuration

The application is configured to communicate with a backend API:

- **API Base URL:** `http://localhost:5000`
- **Proxy Path:** `/api`

### Using Axios

```typescript
import axios from 'axios';

// Requests to /api will be proxied to the backend
const response = await axios.get('/api/endpoint');
```

### Authentication

The application uses **js-cookie** for token management:

```typescript
import Cookies from 'js-cookie';

// Store token
Cookies.set('authToken', token);

// Retrieve token
const token = Cookies.get('authToken');

// Remove token
Cookies.remove('authToken');
```

### React Query Setup

The application uses TanStack React Query for server state management with built-in caching, synchronization, and devtools support. Enable React Query Devtools in development to inspect queries and mutations.

---

## 💻 Development Guidelines

### Code Organization

1. **Import aliases** - Use `@/` prefix for imports:
   ```typescript
   // ✅ Recommended
   import { Button } from '@/widgets/Button';
   import { useAuth } from '@/shared/hooks/useAuth';

   // ❌ Avoid
   import { Button } from '../../../widgets/Button';
   ```

2. **Component structure** - Follow feature-based architecture:
   ```
   feature/
   ├── components/    # Feature-specific components
   ├── hooks/         # Feature-specific hooks
   ├── services/      # API calls & business logic
   ├── types.ts       # TypeScript interfaces
   └── index.ts       # Public exports
   ```

3. **Type safety** - Always define types for:
   - API responses
   - Component props
   - State variables
   - Function parameters

### Linting & Code Quality

```bash
# Check for linting issues
npm run lint

# ESLint is configured for:
- React best practices
- React Hooks rules
- TypeScript type safety
- Code consistency
```

### Adding Rich Text Content

The project includes two editors:

**CKEditor 5** (Recommended for production):
```typescript
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
```

**Jodit** (Alternative):
```typescript
import JoditEditor from 'jodit-react';
```

---

## 🔒 Security Notes

- ✅ Use environment variables for sensitive data (API keys, URLs)
- ✅ Keep dependencies updated: `npm update`
- ✅ Validate API responses on the client side
- ✅ Implement proper authentication token handling
- ✅ Use HTTPS in production

---

## 📚 Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Ant Design](https://ant.design/)
- [React Router](https://reactrouter.com/)
- [React Query](https://tanstack.com/query/latest)
- [React Hook Form](https://react-hook-form.com/)

---

## 📝 License

This project is private and owned by the author.

---

## 👤 Author

- **GitHub:** [@Kerim002](https://github.com/Kerim002)

---

## 📞 Support & Contributions

For issues, feature requests, or contributions, please open an issue or contact the repository maintainer.

---

**Last Updated:** January 5, 2025  
**Status:** Active Development
