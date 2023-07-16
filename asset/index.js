window.onscroll = function() {
  scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 50) {
      var el = document.querySelector('.scroll')
      el.classList.add('bg-dark')
      el.classList.add('fixed-top')

  } else {
    var el = document.querySelector('.scroll')
    el.classList.remove('bg-dark')
    el.classList.remove('bg-transparent')

  }
}