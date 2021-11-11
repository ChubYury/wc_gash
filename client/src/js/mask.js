/* eslint-disable no-unused-vars */
import Inputmask from 'inputmask';
import $ from 'jquery';

document.addEventListener('DOMContentLoaded', () => {
  const maskName = new Inputmask('a{1,40}')
  // const maskMail = new Inputmask('a{1,40}@*{1,10}')
  const maskPhone = new Inputmask('+38 (999) 999 99 99')
  const inputNameVisit = document.getElementById('name-visit');
  maskName.mask(inputNameVisit)
  const inputPhoneVisit = document.getElementById('phone-visit');
  maskPhone.mask(inputPhoneVisit)
  const inputPhoneSelect = document.getElementById('phone-select');
  maskPhone.mask(inputPhoneSelect)
  const inputPhoneFeedback = document.getElementById('phone-feedback');
  maskPhone.mask(inputPhoneFeedback)
  const inputPhone = document.getElementById('phone');
  maskPhone.mask(inputPhone)
});
