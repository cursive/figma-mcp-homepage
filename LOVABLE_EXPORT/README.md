# 🎨 Design System for Lovable

## Quick Start

1. **Copy the entire `LOVABLE_EXPORT` folder** into your Lovable project
2. **Import components** as needed:
   ```typescript
   import { Tile, PanelHeader, HeartIcon } from './components';
   ```
3. **Include CSS variables**:
   ```css
   @import './styles/variables.css';
   ```

## 🚀 Ready-to-Use Components

### **Tile Component**
Interactive tile with variants and toggles:
```typescript
<Tile
  status="selected"
  showIcon={true}
  title="Delivery"
  description="$73"
  onClick={() => console.log('clicked')}
/>
```

### **PanelHeader Component**
Header with primary/secondary variants:
```typescript
<PanelHeader
  variant="primary"
  showChevron={true}
  label="Section Label"
  title="Main Title"
/>
```

### **Icons**
Complete icon system:
```typescript
import { HeartIcon, StarIcon, RadioEmptyIcon } from './components';
<HeartIcon size={24} />
```

## 🎯 Features

- ✅ **Figma-synced** components
- ✅ **Interactive variants** and toggles
- ✅ **Consistent design tokens**
- ✅ **TypeScript support**
- ✅ **Responsive design**

## 📁 Structure

```
LOVABLE_EXPORT/
├── components/     # All React components
├── styles/        # CSS variables and resets
└── README.md      # This file
```

**Ready to build amazing apps!** 🚀
