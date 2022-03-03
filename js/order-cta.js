const orderCta = document.querySelector('.order-cta')

const [orderCtaBookmarkButton, orderCtaBuyButton] = orderCta.children //아래 두줄을 이 한줄로 표현 가능
// const orderCtaBookmarkButton = orderCta.children[0]
// const orderCtaBuyButton = orderCta.children[1]

const orderModal = document.querySelector('.order-form-modal')
const orderModalOverlay = document.querySelector('.overlay')

function openOrderMoldal(){
  orderModal.classList.add('is-open')
  orderModalOverlay.classList.add('is-active')
}

orderCtaBuyButton.addEventListener('click', openOrderMoldal)

function closeOpenModal(){
  orderModal.classList.remove('is-open')
  orderModalOverlay.classList.remove('is-active')
}

orderModalOverlay.addEventListener('click', )