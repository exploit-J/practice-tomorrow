const productTab = document.querySelector('.product-tab')
const productTabButtonList = productTab.querySelectorAll('button')


let currentActiveTab = productTab.querySelector('.is-active')

const TOP_HEADER_DESKTOP = 80 + 50 + 54
const TOP_HEADER_MOBILE = 50 + 40 + 40

function toggleActiveTab(){
  const tabItem = this.parentNode

  if(currentActiveTab != tabItem){
    tabItem.classList.add('is-active')
    currentActiveTab.classList.remove('is-active')
    currentActiveTab = tabItem
  }
}

function scrollToTabPanel (){
  const tabPanelID = this.parentNode.getAttribute('aria-labelledby')
  const tabPanel = document.querySelector(`#${tabPanelID}`) // `#$`방식 : template literal
  
  const scrollAmount = tabPanel.getBoundingClientRect().top - 
  (window.innerWidth >= 768 ? TOP_HEADER_DESKTOP : TOP_HEADER_MOBILE) //width 768이상이면 데탑 아니면 모바일 적용....희한한 문법이다..

  window.scrollBy({
    top: scrollAmount,
    behavior: 'smooth'
  })
  console.log(tabPanel)
}

productTabButtonList.forEach((button) => {
  button.addEventListener('click', toggleActiveTab)
  button.addEventListener('click', scrollToTabPanel)
})