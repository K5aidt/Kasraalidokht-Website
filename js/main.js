function openHomePage() {
  window.location.href = 'home';
}
function openPortfolioPage() {
  window.location.href = 'portfolio';
}
function openSocialsPage() {
  window.location.href = 'socials'
}

function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}