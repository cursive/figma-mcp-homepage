# 🎨 Manual Design System Setup for Lovable

## 📋 **Project Context**

This is a **React-based design system** built from Figma using MCP (Model Context Protocol). The components are **NOT using Tailwind CSS** - they use **vanilla CSS with CSS custom properties (variables)** for theming.

## 🏗️ **Architecture Overview**

### **Technology Stack:**
- ✅ **React** with TypeScript
- ✅ **Vanilla CSS** (no Tailwind, no CSS frameworks)
- ✅ **CSS Custom Properties** for design tokens
- ✅ **Atomic Design System** structure
- ✅ **Figma-synced** components via MCP

### **Design System Structure:**
```
src/
├── components/
│   ├── atoms/          # Basic building blocks
│   ├── molecules/      # Simple component combinations  
│   ├── organisms/      # Complex UI sections
│   ├── templates/      # Page-level layouts
│   ├── pages/          # Full pages
│   └── icons/          # Icon system
├── styles/
│   └── variables.css   # Design tokens (colors, spacing, typography)
└── App.tsx            # Main application
```

## 🎯 **Key Components to Import**

### **1. CSS Variables (CRITICAL - Import First)**
**File:** `src/styles/variables.css`
- Contains all design tokens (colors, spacing, typography)
- Must be imported before any components
- Includes CSS reset for consistent styling

### **2. Core Interactive Components**
**Tile Component:**
- **Files:** `src/components/molecules/Tile.tsx` + `Tile.css`
- **Features:** Interactive with variants (default/selected), boolean toggles
- **Props:** `status`, `showIcon`, `showRightLabel`, `title`, `description`, `onClick`

**PanelHeader Component:**
- **Files:** `src/components/molecules/PanelHeader.tsx` + `PanelHeader.css`
- **Features:** Primary/Secondary variants, chevron toggle
- **Props:** `variant`, `showChevron`, `label`, `title`, `subtitle`

### **3. Icon System**
**Base Icon Component:**
- **Files:** `src/components/icons/Icon.tsx` + `Icon.css`
- **Usage:** Wraps SVG content with consistent sizing

**Available Icons:**
- `HeartIcon` - Heart shape icon
- `StarIcon` - Star shape icon  
- `RadioEmptyIcon` - Empty radio button
- `RadioCheckedIcon` - Checked radio button

### **4. Complex Components (Optional)**
**SectionHero:**
- **Files:** `src/components/organisms/SectionHero.tsx` + `SectionHero.css`
- **Features:** Logo, title, description, rating, tile integration

## 🚀 **Import Instructions for Lovable**

### **Step 1: Import CSS Variables**
1. Create `src/styles/variables.css`
2. Copy the entire content from the variables file
3. Import it in your main CSS file: `@import './styles/variables.css';`

### **Step 2: Import Base Icon Component**
1. Create `src/components/icons/Icon.tsx`
2. Create `src/components/icons/Icon.css`
3. Copy the Icon component code

### **Step 3: Import Individual Icons**
1. Create `src/components/icons/lucida/` folder
2. Copy `Heart.tsx`, `Star.tsx` files
3. Create `src/components/icons/custom/` folder  
4. Copy `RadioEmpty.tsx`, `RadioChecked.tsx` files
5. Create index files for easy imports

### **Step 4: Import Core Components**
1. Create `src/components/molecules/` folder
2. Copy `Tile.tsx` + `Tile.css`
3. Copy `PanelHeader.tsx` + `PanelHeader.css`
4. Test rendering with basic props

### **Step 5: Test Integration**
```typescript
// Example usage in your Lovable project
import { Tile } from './components/molecules/Tile';
import { HeartIcon } from './components/icons';

function App() {
  return (
    <div>
      <Tile
        status="selected"
        showIcon={true}
        title="Test Tile"
        description="$99"
        onClick={() => console.log('clicked')}
      />
      <HeartIcon size={24} />
    </div>
  );
}
```

## ⚠️ **Important Notes for Lovable**

### **CSS Approach:**
- **NO Tailwind CSS** - Use vanilla CSS only
- **CSS Variables** - All styling uses CSS custom properties
- **Component-scoped CSS** - Each component has its own CSS file
- **CSS Reset** - Included in variables.css

### **Component Props:**
- **TypeScript interfaces** - All components are fully typed
- **Variant system** - Components support multiple variants
- **Boolean toggles** - Show/hide elements via props
- **Interactive callbacks** - onClick, onChange handlers

### **File Structure:**
- **Atomic Design** - Organize by complexity (atoms → molecules → organisms)
- **Index files** - Use for clean imports
- **CSS co-location** - CSS files next to component files

## 🎨 **Design System Features**

### **Interactive Components:**
- ✅ **Variant switching** (Default/Selected, Primary/Secondary)
- ✅ **Boolean toggles** (Show/hide elements)
- ✅ **Text customization** (Titles, descriptions, labels)
- ✅ **Live preview** of all changes

### **Design Tokens:**
- ✅ **Color system** (foreground, background colors)
- ✅ **Typography** (fonts, sizes, line heights)
- ✅ **Spacing system** (margins, padding, gaps)
- ✅ **Component-specific** variables

## 🔧 **Troubleshooting**

### **Common Issues:**
1. **CSS Variables not working** - Make sure variables.css is imported first
2. **Icons not rendering** - Check Icon component is imported correctly
3. **Styling conflicts** - Ensure CSS reset is applied
4. **TypeScript errors** - Check all imports are correct

### **Testing Checklist:**
- [ ] CSS variables imported and working
- [ ] Icons render correctly
- [ ] Tile component shows both variants
- [ ] PanelHeader shows both variants
- [ ] Interactive features work (onClick, toggles)
- [ ] Styling matches Figma design

## 📁 **Source Repository**

**GitHub URL:** `https://github.com/cursive/figma-mcp-homepage`
**Export Folder:** `LOVABLE_EXPORT/` (contains all files ready for import)

---

**Ready to build with your Figma-synced design system!** 🚀
