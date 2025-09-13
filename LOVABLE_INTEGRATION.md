# 🎨 Design System Integration with Lovable

## 📋 **What You Have**

Your design system is now available at: **https://github.com/cursive/figma-mcp-homepage**

### **🏗️ Atomic Design Structure**
```
src/components/
├── atoms/           # Basic building blocks
│   ├── Checkbox.tsx
│   ├── RadioEmpty.tsx
│   ├── RadioChecked.tsx
│   └── icons/       # Icon system
├── molecules/       # Simple component combinations
│   ├── Tile.tsx
│   └── PanelHeader.tsx
├── organisms/       # Complex UI sections
│   ├── SectionHero.tsx
│   ├── SectionCarousel.tsx
│   └── Divider.tsx
├── templates/       # Page-level layouts
│   └── Homepage.tsx
└── pages/          # Full pages
    └── DesignSystem.tsx
```

## 🚀 **Integration Options**

### **Option 1: GitHub Integration (Recommended)**
1. **In Lovable**: Go to "Import from GitHub"
2. **Repository**: `cursive/figma-mcp-homepage`
3. **Select components**: Choose specific components or entire system
4. **Import**: Lovable will pull in your components with dependencies

### **Option 2: Direct File Upload**
1. **Export components** as individual files
2. **Upload to Lovable** via file upload
3. **Maintain folder structure** for proper imports

### **Option 3: Component Library Export**
1. **Create standalone package** (see below)
2. **Export as npm package**
3. **Install in Lovable projects**

## 📦 **Component Export Package**

### **Core Components Ready for Lovable:**

#### **🎯 Molecules (Most Useful)**
- **Tile** - Interactive component with variants and toggles
- **PanelHeader** - Header component with primary/secondary variants

#### **🔧 Atoms (Building Blocks)**
- **Icons** - Complete icon system (Heart, Star, Radio, etc.)
- **Checkbox** - Form input component
- **Radio buttons** - Selection components

#### **🏢 Organisms (Complex Sections)**
- **SectionHero** - Hero section with logo, title, description
- **SectionCarousel** - Carousel component
- **Divider** - Section separator

## 🎛️ **Design System Features**

### **✨ Interactive Controls**
- **Variant switching** (Default/Selected, Primary/Secondary)
- **Boolean toggles** (Show/hide elements)
- **Text customization** (Titles, descriptions, labels)
- **Live preview** of all changes

### **🎨 Design Tokens**
- **CSS Variables** for consistent theming
- **Typography system** (fonts, sizes, line heights)
- **Color palette** (foreground, background colors)
- **Spacing system** (margins, padding, gaps)

## 🔧 **How to Use in Lovable**

### **1. Import Individual Components**
```typescript
// Import specific components
import { Tile } from './components/molecules/Tile';
import { PanelHeader } from './components/molecules/PanelHeader';
import { HeartIcon } from './components/icons';
```

### **2. Use with Props**
```typescript
// Tile with all variants and toggles
<Tile
  status="selected"
  showIcon={true}
  showRightLabel={false}
  title="Custom Title"
  description="$99"
  onClick={() => console.log('clicked')}
/>

// PanelHeader with variants
<PanelHeader
  variant="primary"
  showChevron={true}
  label="Section Label"
  title="Main Title"
  subtitle="Description text"
/>
```

### **3. Include CSS Variables**
```css
/* Import your design system variables */
@import './styles/variables.css';
```

## 📋 **Next Steps**

1. **Choose integration method** (GitHub recommended)
2. **Import components** into your Lovable project
3. **Test components** with different props
4. **Customize styling** as needed
5. **Build your app** using the design system!

## 🎯 **Benefits in Lovable**

- ✅ **Consistent design** across all components
- ✅ **Interactive testing** of variants and states
- ✅ **Easy customization** via props
- ✅ **Scalable system** that grows with your project
- ✅ **Figma-synced** components (when you update Figma)

---

**Ready to integrate?** Your design system is live and ready to use! 🚀
