// Minimal scripts for menu toggle and small UI niceties
document.addEventListener('DOMContentLoaded', function(){
  var btn = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav');
  if(btn && nav){
    btn.addEventListener('click', function(){
      if(nav.style.display === 'flex') nav.style.display = '';
      else nav.style.display = 'flex';
    });
  }
});
