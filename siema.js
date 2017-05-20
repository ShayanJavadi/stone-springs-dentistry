//siema scroller for reviews
const mySiema = new Siema({
  duration: 500,
  loop: true
});

document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
document.querySelector('.next').addEventListener('click', () => mySiema.next());
mySiema.next();
//siema scroller for services
const siemaServices = document.querySelector('.siema-services');
const siemaTwo = new Siema({
  duration: 700,
  loop: true,
  selector: siemaServices,
  perPage: 3
})

document.querySelector('.prev-services').addEventListener('click', () => siemaTwo.prev());
document.querySelector('.next-services').addEventListener('click', () => siemaTwo.next());
