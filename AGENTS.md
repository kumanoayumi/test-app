<general_rules>
- Always use the 'use client' directive at the top of components that require client-side functionality (useState, useEffect, event handlers, etc.)
- Before creating new components, search the `components/` directory to see if a similar component already exists that can be reused or extended
- Use TypeScript interfaces for all data structures following established patterns (Token interface for design tokens, Component interface for component library items)
- Implement data-testid attributes on interactive elements and key UI components for testing purposes
- Use CSS custom properties defined in `app/globals.css` for design tokens (--design-primary, --design-secondary, --design-accent)
- All development commands (dev, build, start, lint) should be run from the root directory - they are automatically delegated to the design-system-manager subdirectory
- Follow the established component organization pattern with clear separation of concerns (TokenManager for design tokens, ComponentLibrary for components, VersionHistory for versioning)
- Use Tailwind CSS classes with the custom design token variables for consistent styling
- Implement proper TypeScript typing with strict mode enabled - avoid using 'any' types
</general_rules>

<repository_structure>
This is a monorepo structure with the main Next.js application located in the `design-system-manager/` directory. The root `package.json` serves as a delegation layer, forwarding all commands to the subdirectory. Key structural elements:

- **Main Application**: `design-system-manager/` contains the complete Next.js 15.0.3 application
- **Components**: Located in `design-system-manager/components/` with three main components:
  - `TokenManager.tsx` - Manages design tokens (colors, spacing, radius, shadows)
  - `ComponentLibrary.tsx` - Displays and manages reusable UI components
  - `VersionHistory.tsx` - Tracks design system version changes
- **App Directory**: `design-system-manager/app/` follows Next.js 13+ app router structure
- **Testing**: E2E tests are configured at the root level in `tests/e2e/`
- **Technology Stack**: Next.js, TypeScript, Tailwind CSS, Framer Motion, Radix UI components
- **Package Manager**: Uses pnpm (evidenced by pnpm-lock.yaml files)
</repository_structure>

<dependencies_and_installation>
- **Package Manager**: This project uses pnpm for dependency management
- **Installation Location**: Run all installation commands from the `design-system-manager/` directory
- **Main Dependencies**: 
  - Next.js 15.0.3, React 18.3.1
  - Radix UI components (@radix-ui/react-tabs, @radix-ui/react-dialog, @radix-ui/react-select)
  - Framer Motion for animations
  - Lucide React for icons
  - Tailwind CSS utilities (clsx, tailwind-merge)
- **Development Dependencies**: TypeScript, ESLint, Tailwind CSS, PostCSS, Autoprefixer
- **Root Level Dependencies**: Playwright for E2E testing
- **Installation Command**: `cd design-system-manager && pnpm install`
</dependencies_and_installation>

<testing_instructions>
- **Framework**: Playwright is used for End-to-End testing
- **Test Location**: All tests are located in `tests/e2e/` directory at the root level
- **Test Server**: Tests run against a development server on port 3001
- **Element Selection**: Tests use data-testid attributes for reliable element selection
- **Test Scenarios**: Comprehensive coverage including:
  - Design token management (add, edit, delete operations)
  - Component library interactions (search, filter, view toggle)
  - Responsive design behavior across different screen sizes
  - Version history display and navigation
  - Performance testing (page load times, interaction response)
  - Error handling for invalid inputs
  - Theme switching functionality
- **Running Tests**: Execute `npx playwright test` from the root directory
- **Test Development**: When adding new features, include corresponding data-testid attributes and update test scenarios accordingly
</testing_instructions>

<pull_request_formatting>
</pull_request_formatting>
