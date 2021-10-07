(function() {
  const openingBtn = document.querySelector('.sidebar__hamburger');
  const closingBtn = document.querySelector('.sidebar__close');
  const sidebar = document.querySelector('.sidebar');
  
  openingBtn.addEventListener('click', () => {
    sidebar.classList.add('sidebar--opened') 
  });
  
  closingBtn.addEventListener('click', () => {
      sidebar.classList.remove('sidebar--opened');
  });
}())

