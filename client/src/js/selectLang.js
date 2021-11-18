const selectSingle = document.querySelector('.language2__select');
const selectSingleTitle = selectSingle.querySelector('.language2__title');
const selectSingleLabels = selectSingle.querySelectorAll('.language2__label');

// Toggle menu
selectSingleTitle.addEventListener('click', () => {
  if (selectSingle.getAttribute('data-state') === 'active') {
    selectSingle.setAttribute('data-state', '');
  } else {
    selectSingle.setAttribute('data-state', 'active');
  }
});

// Close when click to option
for (let i = 0; i < selectSingleLabels.length; i++) {
  selectSingleLabels[i].addEventListener('click', evt => {
    selectSingleTitle.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
  });
}
// **********************************************************************/
const selectSingle2 = document.querySelector('.currency2__select');
const selectSingleTitle2 = selectSingle2.querySelector('.currency2__title');
const selectSingleLabels2 = selectSingle2.querySelectorAll('.currency2__label');

// Toggle menu
selectSingleTitle2.addEventListener('click', () => {
  if (selectSingle2.getAttribute('data-state') === 'active') {
    selectSingle2.setAttribute('data-state', '');
  } else {
    selectSingle2.setAttribute('data-state', 'active');
  }
});

// Close when click to option
for (let i = 0; i < selectSingleLabels2.length; i++) {
  selectSingleLabels2[i].addEventListener('click', evt => {
    selectSingleTitle2.textContent = evt.target.textContent;
    selectSingle2.setAttribute('data-state', '');
  });
}
