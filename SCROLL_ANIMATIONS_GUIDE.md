# Scroll Animation Implementation Guide

## Overview
Your application now features smooth scroll-based animations where each section animates into view as the user scrolls down the page. This creates a modern, engaging user experience.

## Components Created

### 1. `lib/useScrollAnimation.ts` - Custom Hook
A React hook that uses the Intersection Observer API to detect when an element enters the viewport.

**Features:**
- Detects when elements come into view
- Triggers animation once when visible
- Customizable threshold (default: 0.1)

**Usage:**
```tsx
const { ref, isInView } = useScrollAnimation();
```

### 2. `components/ScrollAnimationWrapper.tsx` - Flexible Wrapper
A motion wrapper component that applies scroll-triggered animations to any content.

**Props:**
- `children`: ReactNode - Your content to animate
- `direction`: 'up' | 'down' | 'left' | 'right' - Animation direction (default: 'up')
- `delay`: number - Animation delay in seconds (default: 0)
- `duration`: number - Animation duration in seconds (default: 0.8)
- `staggerChildren`: boolean - Stagger child animations (default: false)

**Usage:**
```tsx
<ScrollAnimationWrapper direction="up" duration={0.8} delay={0.1}>
  <YourComponent />
</ScrollAnimationWrapper>
```

### 3. `components/ScrollSection.tsx` - Advanced Section Component
An enhanced component with multiple animation presets.

**Animation Types:**
- `fadeInUp` - Fade and slide up (default)
- `slideInLeft` - Slide from left
- `slideInRight` - Slide from right
- `zoomIn` - Scale up
- `fadeInDown` - Fade and slide down

**Usage:**
```tsx
<ScrollSection animationType="slideInLeft" duration={1}>
  <YourComponent />
</ScrollSection>
```

## Current Implementation

All sections in your app now use scroll animations:
- **Landing** - Fades up smoothly
- **Exterior** - Fades up with 0.1s delay
- **Driving** - Fades up with 0.2s delay
- **Interior** - Fades up with 0.15s delay
- **Showcase** - Fades up with 0.2s delay

## How It Works

1. **User scrolls** down the page
2. **Intersection Observer** detects when section enters viewport
3. **Framer Motion** triggers the animation
4. **Section animates in** with smooth motion
5. Animation completes and section stays visible

## Customization

### Change Animation Direction
```tsx
<ScrollAnimationWrapper direction="left" duration={0.8}>
  <Exterior />
</ScrollAnimationWrapper>
```

### Adjust Animation Timing
```tsx
<ScrollAnimationWrapper duration={1.2} delay={0.3}>
  <Driving />
</ScrollAnimationWrapper>
```

### Use Advanced Section Component
```tsx
<ScrollSection animationType="zoomIn" duration={1}>
  <Showcase />
</ScrollSection>
```

## Performance Notes
- Uses native Intersection Observer API (efficient)
- Animations use GPU acceleration via transform
- No janky scrolling - animations trigger on viewport entry
- Mobile-friendly and responsive

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Intersection Observer supported in all modern browsers
- Graceful fallback to instant display on older browsers

## Tips for Best Results
1. Use consistent delay values to create rhythm
2. Keep duration between 0.6-1.2 seconds for smooth feel
3. Use staggerChildren for multiple child elements
4. Test on mobile to ensure smooth animations
5. Combine with page scroll smoothness for polished experience

## Further Enhancements
You can add:
- Parallax effects using scroll velocity
- Spring physics animations
- Cascade animations for lists
- Color transitions on scroll
- Opacity changes based on scroll position
