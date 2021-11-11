import MicroModal from 'micromodal'

MicroModal.init({
  onShow: modal => console.info(`${modal.id} is shown`), // [1]
  onClose: modal => console.info(`${modal.id} is hidden`), // [2]
  openTrigger: 'data-custom-open', // [3]
  closeTrigger: 'data-custom-close', // [4]
  disableScroll: true, // [5]
  disableFocus: false, // [6]
  awaitOpenAnimation: false, // [7]
  awaitCloseAnimation: false, // [8]
  debugMode: true, // [9]
  targetModal: 'modal',
})
// ищем все кнопки-откывашки модалов
const buttons = Array.from(document.getElementsByClassName('js-modal-trigger'))
// если они есть
if (buttons.length) {
  // идем по все
  buttons.forEach(button => {
    // на каждую навешиваем прослушиватель клика
    button.addEventListener('click', e => {
      // убираем стандартное поведение кнопки
      e.preventDefault()
      // у кнопки есть дата-атрибут с именем нужного модала
      console.log(button.dataset)
      const modalEntity = document.getElementById(button.dataset.modalName)
      // находим контейнер, куда встатим найденный код
      const mymodal = document.getElementById('innerModal')
      console.log(mymodal)
      // вставляем в готовый контейнер - html искомого модала
      mymodal.innerHTML = modalEntity.innerHTML
      // открываем наш модал
      console.log(MicroModal)
      MicroModal.show('formModal')

      document.dispatchEvent(new Event('dom-bind'))
    })
  })
}
