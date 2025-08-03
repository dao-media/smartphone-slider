# Responsive Smartphone Slider

A responsive, interactive phone mockup carousel component with smooth touch gestures and professional navigation controls. Perfect for showcasing mobile app screens in portfolios and case studies.

![Phone Carousel Demo](https://i.ibb.co/LLwsSD9/Screenshot-2025-08-03-at-1-20-05-PM.png)

## Features

- 📱 **Responsive Design** - Scales perfectly from mobile to desktop
- 👆 **Touch Gestures** - Intuitive swipe navigation with visual feedback
- 🖱️ **Mouse Drag Support** - Desktop drag functionality
- 🎯 **Precise Arrow Positioning** - Smart alignment relative to phone frame
- 📐 **Aspect Ratio Locked** - Maintains perfect proportions
- ⚡ **Smooth Animations** - Hardware-accelerated transitions
- 🎨 **Customizable** - Easy to modify colors, sizes, and spacing

## Demo

[Live Demo](your-demo-link-here) | [View on CodePen](https://codepen.io/Dane-OLeary/pen/KwdWJbr)

## Quick Start

1. **Include the HTML structure:**

```html
<div class="phone-carousel-container">
  <!-- Screen carousel (behind phone frame) -->
  <div class="phone-screen-carousel">
    <div class="carousel-track">
      <div class="carousel-slide">
        <img src="screen1.jpg" alt="Screen 1" class="screen-image">
      </div>
      <div class="carousel-slide">
        <img src="screen2.jpg" alt="Screen 2" class="screen-image">
      </div>
      <!-- Add more slides as needed -->
    </div>
  </div>
  
  <!-- Phone frame overlay -->
  <div class="phone-frame">
    <img src="phone-frame.png" alt="Phone Frame" class="frame-image">
  </div>
  
  <!-- Navigation arrows -->
  <button class="carousel-arrow carousel-prev" aria-label="Previous">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>
  <button class="carousel-arrow carousel-next" aria-label="Next">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>
  
  <!-- Dots indicator (optional) -->
  <div class="carousel-dots"></div>
</div>
```

## **Arrow Styling**
```html
.carousel-arrow {
  background: rgba(255, 255, 255, 0.9);  /* White background */
  color: #333;                           /* Dark icons */
  border: 2px solid #ddd;                /* Add border */
}

.carousel-arrow:hover {
  background: rgba(255, 255, 255, 1);
  transform: translateY(-50%) scale(1.05); /* Smaller hover scale */
}
```
## **Adjusting Arrow Size**
```html
:root {
  --arrow-size: 56px; /* Larger arrows */
}

.carousel-arrow svg {
  width: 28px;  /* Adjust icon size proportionally */
  height: 28px;
}
```
## **Adjusting Arrow Position**
```html
/* Closer to phone on desktop */
:root {
  --arrow-gap-desktop: 22%;
}

/* Further from phone on mobile */
:root {
  --arrow-gap-mobile: 40px;
}
```
## **Setting Max Container Size**
```html
.phone-carousel-container {
  max-width: 600px;     /* Custom max width */
  min-width: 320px;     /* Custom min width */
}

/* Specific breakpoint overrides */
@media (min-width: 1400px) {
  .phone-carousel-container {
    max-width: 900px;   /* Larger on big screens */
  }
}
```
## **Setting Max Container Size**
```html
.phone-carousel-container {
  max-width: 600px;     /* Custom max width */
  min-width: 320px;     /* Custom min width */
}

/* Specific breakpoint overrides */
@media (min-width: 1400px) {
  .phone-carousel-container {
    max-width: 900px;   /* Larger on big screens */
  }
}
```
## **Touch Sensitivity**
```html
// Customize touch behavior when initializing
const carousel = new PhoneCarousel(container);

// Override default config
carousel.config = {
  swipeThreshold: 0.15,    // 15% swipe to trigger (more sensitive)
  minSwipeThreshold: 30,   /* 30px minimum swipe */
  dragResistance: 0.5,     /* More resistance at boundaries */
  transitionDuration: 200  /* Faster transitions */
};
```

### **Contributing**

1. **Fork the repository**
2. **Create a feature branch** (git checkout -b feature/amazing-feature)
3. **Commit changes** (git commit -m 'Add amazing feature')
4. **Push to branch** (git push origin feature/amazing-feature)
5. **Open a Pull Request**

