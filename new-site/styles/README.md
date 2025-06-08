# CSS Architecture

This directory contains the modular CSS architecture for the Kentucky Party website. The styles have been organized into logical components for better maintainability and development experience.

## File Structure

### Core Files
- **`main.css`** - Main entry point that imports all other stylesheets
- **`base.css`** - CSS reset, typography, and foundational styles

### Layout & Navigation
- **`navigation.css`** - Navigation bar, menu, hamburger, and mobile menu styles
- **`layout.css`** - Page wrapper, logo, content sections, and footer

### Components
- **`components.css`** - Reusable UI components (buttons, forms, dividers)

### Page-Specific Styles
- **`pages.css`** - Styles for events, resources, and minutes pages
- **`store.css`** - Store page, product cards, and image modal functionality
- **`committees.css`** - Committee member cards for executive and vision committees

### Responsive Design
- **`responsive.css`** - All mobile and tablet responsive styles

## Usage

All HTML files import the main stylesheet:
```html
<link rel="stylesheet" href="styles/main.css">
```

The `main.css` file uses CSS `@import` to load all component stylesheets in the correct order.

## Development Guidelines

1. **Add new styles to the appropriate file** based on their purpose
2. **Keep responsive styles in `responsive.css`** for centralized mobile design
3. **Use the existing color scheme** (`#000066` for primary blue)
4. **Follow the established naming conventions** for CSS classes
5. **Test changes across all pages** to ensure consistency

## Benefits of This Structure

- **Maintainability**: Easy to find and modify specific styles
- **Scalability**: New features can be added to appropriate files
- **Collaboration**: Multiple developers can work on different components
- **Performance**: Styles are organized logically for better caching
- **Debugging**: Easier to identify which file contains specific styles

## File Sizes (Approximate)
- `base.css`: 12 lines
- `navigation.css`: 71 lines  
- `layout.css`: 42 lines
- `components.css`: 66 lines
- `pages.css`: 108 lines
- `store.css`: 178 lines
- `committees.css`: 37 lines
- `responsive.css`: 85 lines

**Total**: ~600 lines (previously 744 lines in single file)