'use strict';

//siema scroller for reviews
var mySiema = new Siema({
  duration: 500,
  loop: true
});

document.querySelector('.prev').addEventListener('click', function () {
  return mySiema.prev();
});
document.querySelector('.next').addEventListener('click', function () {
  return mySiema.next();
});
//siema scroller for services
var siemaServices = document.querySelector('.siema-services');
var siemaTwo = new Siema({
  duration: 700,
  loop: true,
  selector: siemaServices,
  perPage: {
    540: 2,
    1024: 3
  }
});

document.querySelector('.prev-services').addEventListener('click', function () {
  return siemaTwo.prev();
});
document.querySelector('.next-services').addEventListener('click', function () {
  return siemaTwo.next();
});
