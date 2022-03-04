const reviewLikeButtonList = document.querySelectorAll('.review-card-footer button')

const HELPFUL = '도움됨'
const NOT_HELPFUL = '도움이 돼요'

// check icon 삽입방법 -1-
const checkIcon = '<i class="ic-check" aria-hieed></i>'


function togglereviewLikeButton(){
  // 1. btn의 클래스 btn-primary <-> btn-outlined
  // 2. 텍스트 변경 : 도움됨 <-> 도움이 돼요
  // 3. count: N명에게 도움이 되었습니다.

  const isLiked = this.classList.contains('btn-primary')
  const textElement = this.nextElementSibling
  const reviewCardFooter = this.parentNode

  if(isLiked){
    this.innerHTML = NOT_HELPFUL
  } else{
    this.innerHTML = checkIcon + HELPFUL // check icon 삽입방법 -1-

    // check icon 삽입방법 -2-
    // const checkIcon = document.createElement('i')
    // checkIcon.classList.add('ic-check')
    // checkIcon.setAttribute('aria-hidden', true)
    // this.prependChild(checkIcon)
  }
    
  if(textElement){
    const countSpan = textElement.querySelector('span')
    const count = Number(countSpan.innerHTML.replace(',', ''))

    let newCount = count
    if(isLiked){
      // 비활성화할 count : - 1
      newCount = newCount - 1
      if(newCount === 0){
        reviewCardFooter.removeChild(textElement)
      }
      countSpan.innerHTML = newCount.toLocaleString()
    }else{
      // 활성화할 count : + 1
      newCount = newCount + 1
      countSpan.innerHTML = newCount.toLocaleString()
    }

  } else{
    if(!isLiked){ // 여기선 if 안써도 되지 않나?
      const newTextElement = document.createElement('p')
      newTextElement.innerHTML = '<strong><span>1</span></strong>에게 도움이 되었습니다.'
      reviewCardFooter.appendChild(newTextElement)
    }
  }

  this.classList.toggle('btn-primary')
  this.classList.toggle('btn-outlined')
}

reviewLikeButtonList.forEach((button) => {
  button.addEventListener('click', togglereviewLikeButton)
})

