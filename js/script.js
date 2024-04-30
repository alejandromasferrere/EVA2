document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');
  
    // Función para cerrar el menú
    function closeMenu() {
      menuIcon.classList.remove('active');
      menu.classList.remove('active');
    }
  
    // Event listener para el ícono del menú
    menuIcon.addEventListener('click', function () {
      menuIcon.classList.toggle('active');
      menu.classList.toggle('active');
    });
  
    // Event listener para cerrar el menú si se hace clic fuera de él
    document.addEventListener('click', function (event) {
      const isClickInsideMenu = menu.contains(event.target);
      const isClickOnMenuIcon = menuIcon.contains(event.target);
      if (!isClickInsideMenu && !isClickOnMenuIcon) {
        closeMenu();
      }
    });
  });
  
  