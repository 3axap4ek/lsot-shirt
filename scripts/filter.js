(function(){
   const elem = document.querySelector('.products__list');
const iso = new Isotope( elem, {
  // options
  itemSelector: '.products__item',
  filter: '.popular'
});
    
    const controls = document.querySelectorAll('.filter__link')
    const activeClass = 'filter__item--active'
    
    controls.forEach(function(control) {
       control.addEventListener('click', function(e) {
           e.preventDefault();

           const filterName = control.getAttribute('data-filter')


           controls.forEach(function(link){
               link.closest('.filter__item').classList.remove(activeClass)
           })
          

           control.closest('.filter__item').classList.add(activeClass)

           iso.arrange({
               filter: `.${filterName}`
           })
       })
    })


}())