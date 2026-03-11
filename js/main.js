// ========== TYPING ANİMASYONU ==========
function initTyping() {
  const el = document.getElementById('typing-text');
  if (!el) return;

  const texts = [
    '.NET ile uygulama geliştir',
    'HTML/CSS ile web tasarla',
    'JavaScript ile etkileşim kat',
    'Arduino ile devre kur'
  ];

  let textIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function type() {
    const current = texts[textIndex];

    if (!deleting) {
      el.textContent = current.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === current.length) {
        setTimeout(() => { deleting = true; type(); }, 2000);
        return;
      }
      setTimeout(type, 80);
    } else {
      el.textContent = current.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        deleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, 400);
        return;
      }
      setTimeout(type, 40);
    }
  }

  type();
}

// ========== MOBİL MENÜ ==========
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    toggle.textContent = nav.classList.contains('open') ? '✕' : '☰';
  });

  // Linke tıklayınca menüyü kapat
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.textContent = '☰';
    });
  });
}

// ========== SAYFA YÜKLENDİĞİNDE ==========
document.addEventListener('DOMContentLoaded', () => {
  initTyping();
  initMobileMenu();
});
