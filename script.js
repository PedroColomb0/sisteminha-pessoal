function carregarPagina(pagina) {
  document.getElementById('conteudo-frame').src = pagina;
  
  // Fechar o sidebar em dispositivos móveis após clicar em um link
  if (window.innerWidth <= 768) {
    toggleSidebar();
  }
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('open');
  
  // Impedir rolagem do corpo quando o sidebar está aberto
  document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : 'auto';
}

// Fechar o sidebar ao clicar fora dele (para mobile)
document.addEventListener('click', function(event) {
  const sidebar = document.getElementById('sidebar');
  const menuToggle = document.querySelector('.menu-toggle');
  
  if (window.innerWidth <= 768 && 
      !sidebar.contains(event.target) && 
      !menuToggle.contains(event.target) &&
      sidebar.classList.contains('open')) {
    toggleSidebar();
  }
});