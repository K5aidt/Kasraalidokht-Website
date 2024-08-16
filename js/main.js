function openHomePage() {
  window.location.href = 'home.html';
}
function openPortfolioPage() {
  window.location.href = 'portfolio.html';
}
function openSocialsPage() {
  window.location.href = 'socials.html'
}

function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}