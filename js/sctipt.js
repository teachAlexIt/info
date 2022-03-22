let body = document.querySelector('body');
let hamburger = document.querySelector('.hamburger');
let navLinks = document.querySelector('.nav__links');
hamburger.onclick = function() {
  hamburger.classList.toggle('hamburger_active');
  navLinks.classList.toggle('nav__links_active');
  body.classList.toggle('scroll-none');
}
let navLinksList = document.querySelectorAll('.nav__links a');
for (let i = 0;i < navLinksList.length;i++) {
  navLinksList[i].onclick = function() {
    hamburger.classList.remove('hamburger_active');
    navLinks.classList.remove('nav__links_active');
    body.classList.remove('scroll-none');
  }
}
let headerFoto = document.querySelector('.header__foto');
window.addEventListener('mousemove', function(e) {
  let X = e.clientX / (window.innerWidth * 3);
  let Y = e.clientY / window.innerHeight * 0.05;
  body.style.setProperty('--XPosition', X * 10 + 'deg');
  body.style.setProperty('--YPosition', Y * 30 + 'deg');
});

let coursesButtons = document.querySelectorAll('.courses__item button');
let coursesDiscriptionItems = document.querySelectorAll('.courses__discription .models__item');
let wrapper = document.querySelector('.wrapper');
for (let i = 0;i < coursesButtons.length;i++){
  coursesButtons[i].onclick = function(){
    coursesDiscriptionItems[i].classList.add('models_active');
    wrapper.classList.add('wrapper_active');
    body.classList.add('scroll-none');
    wrapper.onclick = function(){
      coursesDiscriptionItems[i].classList.remove('models_active');
      wrapper.classList.remove('wrapper_active');
      body.classList.remove('scroll-none');
    }
  }
}
console.log(coursesButtons)
console.log(coursesDiscriptionItems)
let startTime = new Date();
let clock = startTime.getHours().toString();
if(clock > 6 && clock < 20) {
  body.classList.remove('boby_darck');
}else{
  body.classList.add('boby_darck');
}

let inputs = document.querySelectorAll('.input-box input');
let spans = document.querySelectorAll('.input-box span');
let textarea = document.querySelector('textarea');
for (let i = 0;i < inputs.length;i++) {
  inputs[i].onfocus = function() {
    if (i == 2){
      spans[3].classList.add('span_top');
      spans[3].classList.add('span_color');
    }else{
      spans[i].classList.add('span_top');
      spans[i].classList.add('span_color');
      if (i == 1 && inputs[1].value == '') {
        inputs[1].value = '+';
      }
    }
  }
  inputs[i].onblur = function() {
    if (i == 2){
      spans[3].classList.remove('span_color');
      if (inputs[2].value == ''){
        spans[3].classList.remove('span_top');
      }
    }else{
      if (inputs[i].value == '' || inputs[i].value == '+') {
        spans[i].classList.remove('span_top');
        if (i == 1) {
          inputs[1].value = '';
        }
      }
      spans[i].classList.remove('span_color');
    }
    
  }
}
textarea.onfocus = function(){
  spans[2].classList.add('span_top');
  spans[2].classList.add('span_color');
}
textarea.onblur = function(){
  spans[2].classList.remove('span_color');
  if (textarea.value == '') {
    spans[2].classList.remove('span_top');
  }
}

let submitIframe = document.querySelector('#order iframe');
let submitWrapper = document.querySelector('#order .submit-wrapper');
submitIframe.onload= function(){
  submitWrapper.classList.add('submit-wrapper_active');
  setTimeout(() => {
    document.forms.order.reset();
    for (let i = 0;i < spans.length;i++){
      spans[i].classList.remove('span_top');
      spans[i].classList.remove('span_color');
    }
    submitWrapper.classList.remove('submit-wrapper_active');
  }, 3000);
}