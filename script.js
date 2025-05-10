const buttonYes = document.getElementById('yes');
const image = document.getElementById('image');
const buttonno= document.getElementById('no');

  buttonYes.addEventListener('touchstart', () => {
    const maxX = window.innerWidth - buttonYes.offsetWidth;
    const maxY = window.innerHeight - buttonYes.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    buttonYes.style.left = `${randomX}px`;
    buttonYes.style.top = `${randomY}px`;
  });
    buttonYes.addEventListener('mouseenter', () => {
    const maxX = window.innerWidth - buttonYes.offsetWidth;
    const maxY = window.innerHeight - buttonYes.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    buttonYes.style.left = `${randomX}px`;
    buttonYes.style.top = `${randomY}px`;
  });
  buttonno.addEventListener('touchstart', ()=> {
    buttonYes.style.visibility = 'hidden';
    image.style.display = 'block';

  })
    buttonno.addEventListener('click', ()=> {
    buttonYes.style.visibility = 'hidden';
    image.style.display = 'block';

  })