let spacing =  document.getElementById('spacing');
let blur =  document.getElementById('blur');
let base =  document.getElementById('base');
spacing.addEventListener('change', () => {
  document.documentElement.style.setProperty('--spacing', `${spacing.value}px`);
    
})
blur.addEventListener('change', () => {
  document.documentElement.style.setProperty('--blur', `${blur.value}px`);
    
})
base.addEventListener('change', () => {
  document.documentElement.style.setProperty('--base', `${base.value}`);
  console.log(base.value)
    
})
