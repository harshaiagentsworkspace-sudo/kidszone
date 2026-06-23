---
name: Lumina Kids
colors:
  surface: '#fcf8ff'
  surface-dim: '#ddd8e6'
  surface-bright: '#fcf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f1ff'
  surface-container: '#f1ecfa'
  surface-container-high: '#ebe6f4'
  surface-container-highest: '#e5e0ef'
  on-surface: '#1c1a24'
  on-surface-variant: '#474556'
  inverse-surface: '#312f3a'
  inverse-on-surface: '#f4eefd'
  outline: '#787587'
  outline-variant: '#c9c4d9'
  surface-tint: '#5a39ee'
  primary: '#522de6'
  on-primary: '#ffffff'
  primary-container: '#6b4eff'
  on-primary-container: '#f6f1ff'
  inverse-primary: '#c8bfff'
  secondary: '#964900'
  on-secondary: '#ffffff'
  secondary-container: '#fe8a29'
  on-secondary-container: '#642f00'
  tertiary: '#735c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#cda719'
  on-tertiary-container: '#4e3d00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5deff'
  primary-fixed-dim: '#c8bfff'
  on-primary-fixed: '#190064'
  on-primary-fixed-variant: '#4109d7'
  secondary-fixed: '#ffdcc6'
  secondary-fixed-dim: '#ffb786'
  on-secondary-fixed: '#311300'
  on-secondary-fixed-variant: '#723600'
  tertiary-fixed: '#ffe085'
  tertiary-fixed-dim: '#ebc238'
  on-tertiary-fixed: '#231b00'
  on-tertiary-fixed-variant: '#574500'
  background: '#fcf8ff'
  on-background: '#1c1a24'
  surface-variant: '#e5e0ef'
typography:
  display-lg:
    fontFamily: Quicksand
    fontSize: 56px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Quicksand
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Quicksand
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Quicksand
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-bold:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.2'
  label-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  section-padding-desktop: 120px
  section-padding-mobile: 64px
---

## Brand & Style

The design system is crafted to bridge the gap between childhood wonder and educational excellence. It targets parents seeking a safe, stimulating, and premium environment for their children. The visual language is defined by a **Soft-Modernist** approach: it utilizes the approachability of rounded geometries and organic "blob" shapes while maintaining the rigor of a professional institution through structured layouts and high-quality typography.

The emotional response should be one of **trustworthy joy**. We avoid the cluttered, primary-color chaos of traditional daycare branding in favor of a sophisticated palette and generous whitespace. Key stylistic elements include:
- **Playful Professionalism:** A balance of hand-drawn doodle accents (stars, crowns, swirls) against high-fidelity photography.
- **Organic Depth:** Soft, colorful shadows and floating elements that create a sense of lightness and approachability.
- **Fluid Transitions:** Wavy and curved section dividers that break the monotony of standard rectangular web blocks, mimicking the natural flow of childhood movement.

## Colors

The palette is anchored by a vibrant **Electric Purple** which signifies creativity and premium quality. This is balanced by a **Warm Orange** and **Sunny Yellow** to evoke energy and happiness. 

To maintain a "premium" feel, we use a **Soft Cream** background instead of pure white; this reduces eye strain and feels more inviting. We utilize pastel green and pink specifically for categorized content (e.g., age groups or program types) to provide visual variety without overwhelming the user. Text should primarily use the `neutral_dark` to ensure high legibility against the cream and pastel backgrounds.

## Typography

This design system uses a dual-font strategy. **Quicksand** is the primary voice for headlines—its rounded terminals feel friendly and kid-centric while remaining clean. For long-form text and UI labels, **Be Vietnam Pro** provides a professional, highly readable contrast. 

- **Hierarchy:** Use `display-lg` for hero sections to make a bold statement. 
- **Readability:** Maintain a line height of at least 1.5 for body text to ensure parents can quickly scan information.
- **Accents:** Use `label-bold` for category tags or "badge" style information.

## Layout & Spacing

The layout follows a **Fluid-Responsive Grid** model with high internal margins to emphasize the "Modern Minimalism" aspect. 

- **Grid:** Use a 12-column grid for desktop with 24px gutters. Elements should often overlap or "break" the grid slightly with floating icons or doodles to maintain a playful feel.
- **Section Dividers:** Instead of straight lines, use SVG paths to create "wavy" or "blob" transitions between sections. Ensure these waves have a minimum amplitude of 40px to be visually distinct.
- **Density:** High. Whitespace is used as a functional tool to separate different educational programs and prevent cognitive load.

## Elevation & Depth

We utilize **Tonal Layering and Soft Shadows** rather than harsh borders. 

- **Surface Levels:** The base level is the Cream background. Cards and containers "float" above this using an "Ambient Glow" shadow—this is a very diffused shadow (30px-40px blur) with a low opacity (5-10%) using a tint of the Primary Purple color rather than pure black.
- **Interactive Depth:** On hover, cards should lift slightly (translate -4px) and the shadow should become slightly more opaque to provide tactile feedback.
- **Floating Accents:** Small doodle icons (like stars or pencils) should have no shadows or very minimal ones to feel like they are "drawn" onto the interface.

## Shapes

The shape language is dominated by **Extra-Large Radii**. 

- **Containers:** All primary cards and image containers must use a minimum of 24px corner radius.
- **Organic Blobs:** Use non-geometric "blob" shapes behind images to create an organic, friendly frame. 
- **Buttons:** Buttons are exclusively pill-shaped (fully rounded) to reinforce the safe and approachable brand personality.

## Components

### Buttons
- **Primary:** Pill-shaped, Purple background, white text. Large padding (16px top/bottom, 32px left/right).
- **Secondary:** Warm Orange background. Used for high-conversion actions like "Enroll Now."
- **Ghost:** Purple outline with Quicksand Bold text, used for secondary navigation.

### Cards
- **Program Cards:** Large 24px rounded corners. Each card uses one of the pastel accent colors (Green, Pink, Yellow) as a subtle background tint or a top border stroke (4px).
- **Image Cards:** Images should feature "Masked" edges (blobs) or very large rounded corners.

### Inputs & Forms
- Input fields should be tall (min 56px) with a subtle cream-to-white gradient and a 16px radius.
- Focus states should use a 2px purple "glow" outline.

### Floating Elements
- Use a library of "Doodle" icons. These should be placed strategically at the corners of sections, often overlapping the section transitions to lead the eye downward.

### Chips/Tags
- Small, fully rounded capsules used for age groups (e.g., "3-5 Years"). Use secondary colors for these to provide high contrast against the body text.