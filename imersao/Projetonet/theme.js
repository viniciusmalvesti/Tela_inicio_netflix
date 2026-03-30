// Recuperar o tema salvo ou usar o padrão
const savedTheme = localStorage.getItem('theme') || 'dark-theme';
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Aplicar tema ao carregar
if (savedTheme === 'light-theme') {
  html.classList.add('light-theme');
}
updateThemeButton();

// Alternar tema ao clicar no botão
themeToggle.addEventListener('click', () => {
  html.classList.toggle('light-theme');
  
  const isLight = html.classList.contains('light-theme');
  const newTheme = isLight ? 'light-theme' : 'dark-theme';
  localStorage.setItem('theme', newTheme);
  
  updateThemeButton();
});

// Atualizar ícone do botão baseado no tema
function updateThemeButton() {
  const isLight = html.classList.contains('light-theme');
  themeToggle.textContent = isLight ? '🌙' : '☀️';
}
