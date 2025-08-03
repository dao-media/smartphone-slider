# Responsive Phone Mockup Carousel

A responsive, interactive phone mockup carousel component with smooth touch gestures and professional navigation controls. Perfect for showcasing mobile app screens in portfolios and case studies.

![Phone Carousel Demo](demo.gif)

## Features

- 📱 **Responsive Design** - Scales perfectly from mobile to desktop
- 👆 **Touch Gestures** - Intuitive swipe navigation with visual feedback
- 🖱️ **Mouse Drag Support** - Desktop drag functionality
- 🎯 **Precise Arrow Positioning** - Smart alignment relative to phone frame
- 📐 **Aspect Ratio Locked** - Maintains perfect proportions
- ⚡ **Smooth Animations** - Hardware-accelerated transitions
- 🎨 **Customizable** - Easy to modify colors, sizes, and spacing

## Demo

[Live Demo](your-demo-link-here) | [View on CodePen](your-codepen-link)

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
