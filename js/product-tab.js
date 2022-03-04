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

// detectTapPanelPosition..........위치에 따라 탭메뉴 active되게..
// 사전정보 : 각 tabPanel의 y축 위치(문서의 시작점에서부터 얼마나 아래에 있는지)
// 요소의 y축 위치 = window.scrollY + element.getBoundingClientRect().top 
const productTabPanelIdList = [
  'product-spec',
  'product-review',
  'product-inquiry',
  'product-shipment',
  'product-recommendation'
]
const productTabPanelList = productTabPanelIdList.map((panelId) => {
  const tabPanel = document.querySelector(`#${panelId}`)
  return tabPanel
})

const productTabPanelPositionMap = {}

function detectTabPanelPosition(){
  // 각각의 tabPanel의 y축 위치를 찾는다.
  // productTabPanelPositionMap에 그 값을 업데이트
  // ex,
  // {
  //   'product-spec': 1000,
  //   'product-review': 5000,
  //   ...
  // }
  productTabPanelList.forEach((panel) => {
    // id
    // y축 위치
    const id = panel.getAttribute('id')
    const position = window.scrollY + panel.getBoundingClientRect().top
    productTabPanelPositionMap[id] = position
  })
  console.log(productTabPanelPositionMap['product-spec'])
}

window.addEventListener('load', detectTabPanelPosition)
window.addEventListener('resize', detectTabPanelPosition)