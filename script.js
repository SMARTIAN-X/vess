// MENU TOGGLE
function toggleMenu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("open");
  
    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
      });
    });
  }
  
  // COUNTDOWN TIMER
  const eventDate = new Date("2025-12-23T09:00:00").getTime();
  const countdown = setInterval(() => {
    const now = new Date().getTime();
    const gap = eventDate - now;
  
    const days = Math.floor(gap / (1000 * 60 * 60 * 24));
    const hours = Math.floor((gap / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((gap / 1000 / 60) % 60);
    const seconds = Math.floor((gap / 1000) % 60);
  
    document.getElementById("days").textContent = days.toString().padStart(2, '0');
    document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
  
    if (gap < 0) clearInterval(countdown);
  }, 1000);
  
  // FADE-IN ON SCROLL
  const fadeEls = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });
  fadeEls.forEach(el => observer.observe(el));
  
  // ROTATING VERSE
  const verses = [
    "I can do all things through Christ who strengthens me. – Philippians 4:13",
    "The Lord is my shepherd, I shall not want. – Psalm 23:1",
    "Trust in the Lord with all your heart. – Proverbs 3:5",
    "Be still and know that I am God. – Psalm 46:10",
    "Let your light shine before others. – Matthew 5:16"
  ];
  let verseIndex = 0;
  function rotateVerse() {
    document.getElementById("verse").textContent = verses[verseIndex];
    verseIndex = (verseIndex + 1) % verses.length;
  }
  setInterval(rotateVerse, 6000);
  rotateVerse(); // Show immediately
  
  // ✅ EMAIL VALIDATION
  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    const email = form.querySelector('input[name="email"]').value.trim();
    const message = form.querySelector('textarea[name="message"]').value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      e.preventDefault();
      return;
    }
  
    if (message.length < 5) {
      alert("Please enter a message with at least 5 characters.");
      e.preventDefault();
      return;
    }
  });
  