const nav = document.querySelector('.container-nav'),
      btn = document.querySelector('.btn-burger');

btn.addEventListener('click', function(){
  btn.classList.toggle('open')
  nav.classList.toggle('open')
}, false)