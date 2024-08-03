
const navMenu = document.getElementById('nav-menu');  
  
window.addEventListener('scroll', () => {  
  if (window.scrollY > 100) {  
   navMenu.classList.add('scrolled');  
  } else {  
   navMenu.classList.remove('scrolled');  
  }  
});  
  
navMenu.addEventListener('mouseover', (e) => {  
  if (e.target.tagName === 'A') {  
   navMenu.style.backgroundColor = 'red';  
   navMenu.style.color = '#fff';  
  }  
});  
  
navMenu.addEventListener('mouseout', () => {  
  navMenu.style.backgroundColor = '';  
  navMenu.style.color = '';  
});
