/**
 * Phone Carousel Component
 * Responsive touch-enabled carousel for phone mockups
 */

class PhoneCarousel {
  constructor(container) {
    // Configuration
    this.config = {
      swipeThreshold: 0.2, // 20% of container width
      minSwipeThreshold: 50, // minimum 50px
      dragResistance: 0.3,
      transitionDuration: 300
    };
    
    // Elements
    this.container = container;
    this.track = container.querySelector('.carousel-track');
    this.slides = container.querySelectorAll('.carousel-slide');
    this.prevBtn = container.querySelector('.carousel-prev');
    this.nextBtn = container.querySelector('.carousel-next');
    this.dotsContainer = container.querySelector('.carousel-dots');
    
    // State
    this.currentSlide = 0;
    this.totalSlides = this.slides.length;
    this.isDragging = false;
    this.isMouseDown = false;
    this.startX = 0;
    this.startY = 0;
    this.currentTranslate = 0;
    this.initialTranslate = 0;
    
    // Validation and initialization
    if (!this.track || this.totalSlides === 0) {
      console.warn('PhoneCarousel: Required elements not found');
      return;
    }
    
    this.init();
  }
  
  /**
   * Initialize the carousel
   */
  init() {
    this.createDots();
    this.bindEvents();
    this.updateCarousel();
  }
  
  /**
   * Create dot indicators dynamically
   */
  createDots() {
    if (!this.dotsContainer || this.totalSlides <= 1) return;
    
    this.dotsContainer.innerHTML = '';
    
    for (let i = 0; i < this.totalSlides; i++) {
      const dot = document.createElement('button');
      dot.className = `dot ${i === 0 ? 'active' : ''}`;
      dot.setAttribute('data-slide', i);
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      dot.addEventListener('click', () => this.goToSlide(i));
      this.dotsContainer.appendChild(dot);
    }
    
    this.dots = this.container.querySelectorAll('.dot');
  }
  
  /**
   * Bind all event listeners
   */
  bindEvents() {
    // Arrow navigation
    this.prevBtn?.addEventListener('click', () => this.prevSlide());
    this.nextBtn?.addEventListener('click', () => this.nextSlide());
    
    // Touch events
    this.track.addEventListener('touchstart', this.handleTouchStart.bind(this), { passive: true });
    this.track.addEventListener('touchmove', this.handleTouchMove.bind(this), { passive: false });
    this.track.addEventListener('touchend', this.handleTouchEnd.bind(this), { passive: true });
    this.track.addEventListener('touchcancel', this.handleTouchCancel.bind(this), { passive: true });
    
    // Mouse events for desktop drag
    this.track.addEventListener('mousedown', this.handleMouseDown.bind(this));
    document.addEventListener('mousemove', this.handleMouseMove.bind(this));
    document.addEventListener('mouseup', this.handleMouseUp.bind(this));
  }
  
  /**
   * Navigation methods
   */
  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
    this.updateCarousel();
  }
  
  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
    this.updateCarousel();
  }
  
  goToSlide(index) {
    this.currentSlide = index;
    this.updateCarousel();
  }
  
  /**
   * Update carousel position and dots
   */
  updateCarousel() {
    const translateX = -this.currentSlide * 100;
    this.track.classList.remove('dragging');
    this.track.style.transform = `translateX(${translateX}%)`;
    
    // Update dots
    this.dots?.forEach((dot, index) => {
      dot.classList.toggle('active', index === this.currentSlide);
    });
  }
  
  /**
   * Touch event handlers
   */
  handleTouchStart(e) {
    this.startX = e.touches[0].clientX;
    this.startY = e.touches[0].clientY;
    this.isDragging = true;
    this.initialTranslate = -this.currentSlide * 100;
    this.currentTranslate = this.initialTranslate;
    this.track.classList.add('dragging');
  }
  
  handleTouchMove(e) {
    if (!this.isDragging) return;
    
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const diffX = currentX - this.startX;
    const diffY = currentY - this.startY;
    
    // Only handle horizontal swipes
    if (Math.abs(diffX) > Math.abs(diffY)) {
      e.preventDefault();
      this.updateDragPosition(diffX);
    }
  }
  
  handleTouchEnd(e) {
    if (!this.isDragging) return;
    
    const endX = e.changedTouches[0].clientX;
    const diff = this.startX - endX;
    this.finalizeDrag(diff);
    this.isDragging = false;
  }
  
  handleTouchCancel() {
    if (this.isDragging) {
      this.updateCarousel();
      this.isDragging = false;
    }
  }
  
  /**
   * Mouse event handlers
   */
  handleMouseDown(e) {
    e.preventDefault();
    this.startX = e.clientX;
    this.isMouseDown = true;
    this.initialTranslate = -this.currentSlide * 100;
    this.track.classList.add('dragging');
  }
  
  handleMouseMove(e) {
    if (!this.isMouseDown) return;
    
    const diffX = e.clientX - this.startX;
    this.updateDragPosition(diffX);
  }
  
  handleMouseUp(e) {
    if (!this.isMouseDown) return;
    
    const diff = this.startX - e.clientX;
    this.finalizeDrag(diff);
    this.isMouseDown = false;
  }
  
  /**
   * Drag helper methods
   */
  updateDragPosition(diffX) {
    const containerWidth = this.track.offsetWidth;
    const dragPercent = (diffX / containerWidth) * 100;
    let newTranslate = this.initialTranslate + dragPercent;
    
    // Apply boundary resistance
    const minTranslate = -(this.totalSlides - 1) * 100;
    const maxTranslate = 0;
    
    if (newTranslate > maxTranslate) {
      newTranslate = maxTranslate + (newTranslate - maxTranslate) * this.config.dragResistance;
    }
    if (newTranslate < minTranslate) {
      newTranslate = minTranslate + (newTranslate - minTranslate) * this.config.dragResistance;
    }
    
    this.currentTranslate = newTranslate;
    this.track.style.transform = `translateX(${newTranslate}%)`;
  }
  
  finalizeDrag(diff) {
    const containerWidth = this.track.offsetWidth;
    const threshold = Math.max(
      containerWidth * this.config.swipeThreshold,
      this.config.minSwipeThreshold
    );
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0 && this.currentSlide < this.totalSlides - 1) {
        this.nextSlide();
      } else if (diff < 0 && this.currentSlide > 0) {
        this.prevSlide();
      } else {
        this.updateCarousel();
      }
    } else {
      this.updateCarousel();
    }
  }
  
  /**
   * Public API methods
   */
  destroy() {
    // Remove event listeners and cleanup
    this.prevBtn?.removeEventListener('click', this.prevSlide);
    this.nextBtn?.removeEventListener('click', this.nextSlide);
    // ... other cleanup
  }
  
  getCurrentSlide() {
    return this.currentSlide;
  }
  
  getTotalSlides() {
    return this.totalSlides;
  }
}

/**
 * Auto-initialize all carousels on page load
 */
document.addEventListener('DOMContentLoaded', function() {
  const containers = document.querySelectorAll('.phone-carousel-container');
  
  // Store instances for potential later access
  window.phoneCarousels = [];
  
  containers.forEach(container => {
    const carousel = new PhoneCarousel(container);
    window.phoneCarousels.push(carousel);
  });
});

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PhoneCarousel;
}
