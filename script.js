// ==============================
// ⏳ Countdown Timer
// ==============================
const eventDate = new Date("2025-12-23T09:00:00"); // Set your event date here

function updateCountdown() {
  const now = new Date();
  const diff = eventDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").textContent = days.toString().padStart(2, "0");
  document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
  document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
}

setInterval(updateCountdown, 1000);
updateCountdown();

// 📖 Verse Rotator
const verses = [
  "Romans 8:28 – All things work together for good to those who love God.",
  "Jeremiah 29:11 – For I know the plans I have for you, says the Lord.",
  "Isaiah 40:31 – They that wait on the Lord shall renew their strength.",
  "Philippians 4:13 – I can do all things through Christ who strengthens me.",
  "John 3:16 – For God so loved the world that He gave His only Son.",
  "Proverbs 3:5 – Trust in the Lord with all your heart.",
  "Matthew 5:14 – You are the light of the world."
];

let verseIndex = 0;
const verseElement = document.getElementById("verse");

function rotateVerse() {
  verseElement.classList.remove("fade-in");
  void verseElement.offsetWidth; // Reset animation
  verseElement.classList.add("fade-in");

  verseElement.textContent = verses[verseIndex];
  verseIndex = (verseIndex + 1) % verses.length;
}

setInterval(rotateVerse, 6000);
rotateVerse();
function toggleMenu() {
    const nav = document.getElementById("nav");
    const isOpen = nav.style.display === "flex";
  
    nav.style.display = isOpen ? "none" : "flex";
  
    // Attach listener to all nav links when opening
    if (!isOpen) {
      const links = nav.querySelectorAll("a");
      links.forEach(link => {
        link.addEventListener("click", () => {
          nav.style.display = "none";
        });
      });
    }
  }
  

  // ✅ Header shadow on scroll
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    header.classList.toggle("scrolled", window.scrollY > 10);
  });
  
  // ✅ Menu toggle with slide effect
  function toggleMenu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("open");
  
    // Close menu after link click
    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
      });
    });
  }
  
  // ✅ Fade-in sections on scroll
  const fadeEls = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.1
  });
  fadeEls.forEach(el => observer.observe(el));
  