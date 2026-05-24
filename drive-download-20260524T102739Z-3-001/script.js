// Slideshow functionality
        let slideIndex = 0;
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.nav-dot');
        
        // Auto slideshow
        function showSlides() {
            // Hide all slides
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            // Show current slide
            slides[slideIndex].classList.add('active');
            dots[slideIndex].classList.add('active');
            
            // Move to next slide
            slideIndex = (slideIndex + 1) % slides.length;
        }
        
        // Manual slide selection
        function currentSlide(n) {
            slideIndex = n - 1;
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            slides[slideIndex].classList.add('active');
            dots[slideIndex].classList.add('active');
        }
        
        // Start slideshow
        showSlides();
        setInterval(showSlides, 4000); // Change slide every 4 seconds

        // Sidebar toggle functionality
        function toggleSidebar() {
          document.getElementById("sidebar").classList.toggle("active");
        }

        // Navbar active link scroll logic
        const links = document.querySelectorAll('.nav-links a');
        const sections = document.querySelectorAll('section');

        window.addEventListener('scroll', () => {
          let currentSectionId = '';
          const navbarHeight = document.querySelector('.navbar').offsetHeight;

          sections.forEach(section => {
            const sectionTop = section.offsetTop - navbarHeight - 50;
            const sectionHeight = section.offsetHeight;

            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
              currentSectionId = section.getAttribute('id');
            }
          });

          links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
              link.classList.add('active');
            }
          });
        });

        // Teachers slider functionality
        const teachersSlider = document.querySelector('.teachers-slider');
        const teacherCards = document.querySelectorAll('.teachers-slider .teacher-card');

        let scrollAmount = 0;
        if (teacherCards.length > 0) {
          const cardWidth = teacherCards[0].offsetWidth;
          const cardMarginRight = parseInt(window.getComputedStyle(teacherCards[0]).marginRight);
          scrollAmount = cardWidth + cardMarginRight;
        }

        function scrollTeachers(direction) {
          if (!teachersSlider || scrollAmount === 0) return;

          teachersSlider.scrollBy({
            left: direction * scrollAmount * 1,
            behavior: 'smooth'
          });
        }

        // Keyboard navigation for teachers slider
        document.addEventListener('keydown', (e) => {
          if (e.key === 'ArrowLeft') {
            scrollTeachers(-1);
          } else if (e.key === 'ArrowRight') {
            scrollTeachers(1);
          }
        });

const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  modal_container.classList.add('show');
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});
