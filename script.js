// MENU TOGGLE
function toggleMenu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("open");
  
    // Optional: close nav when link is clicked
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

  // Contact Form Submission 
  const form = document.querySelector("form");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        status.innerHTML = "✅ Message sent successfully!";
        form.reset();
        status.classList.add("show");

        setTimeout(() => {
          status.classList.remove("show");
        }, 4000);
      } else {
        const data = await response.json();
        if (data.errors) {
          status.innerHTML = "❌ " + data.errors.map(err => err.message).join(", ");
        } else {
          status.innerHTML = "❌ Something went wrong. Please try again.";
        }
      }
    } catch (error) {
      status.innerHTML = "❌ Error: " + error.message;
    }
  });
