// order-form-active

const orderCta = document.querySelector('.order-cta')

const [orderCtaBookmarkButton, orderCtaBuyButton] = orderCta.children
//아래 두줄을 위 한줄로 표현 가능
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

orderModalOverlay.addEventListener('click', closeOpenModal)

// bookmark-active

function toggleOrderCtaBookmark(){
  // 1. 버튼 is-active 클래스 toggle
  // 2. icon 클래스 변경 => ic-bookmark-filled
  // 3. 카운트 숫자 값 변경 + - 1
  const [icon, countSpan] = this.children // [icon, 북마크span]
  const count = Number(countSpan.innerHTML.replaceAll(',', ''))
  // Number() 문자를 숫자로 변환 / replaceAll('a', 'b') 모든문자 a를 b로 변환

  let newCount = count
  if (this.classList.contains('is-active')){
    // 활성화 상태이니 비활성화 해야함 (ic-bookmark) -1
    icon.classList.add('ic-bookmark')
    icon.classList.remove('ic-bookmark-filled')
    newCount = newCount - 1
  } else{
    // 비활성화 상태이니 활성화 해야함 (ic-bookmark-filled) +1
    icon.classList.add('ic-bookmark-filled')
    icon.classList.remove('ic-bookmark')
    newCount = newCount + 1
  }
  
  countSpan.innerHTML = newCount.toLocaleString()
  this.classList.toggle('is-active')
}

orderCtaBookmarkButton.addEventListener('click', toggleOrderCtaBookmark)


// const: 상수, 변수값이 변하면 안됨.  let: 변수값이 변해도 적용 됨