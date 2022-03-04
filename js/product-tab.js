const productTab = document.querySelector('.product-tab')
const productTabButtonList = productTab.querySelectorAll('button')


let currentActiveTab = productTab.querySelector('.is-active')
let disabledUpdating = false

const TOP_HEADER_DESKTOP = 80 + 50 + 54
const TOP_HEADER_MOBILE = 50 + 40 + 40

function toggleActiveTab(){
  const tabItem = this.parentNode

  if(currentActiveTab != tabItem){
    disabledUpdating = true
    tabItem.classList.add('is-active')
    currentActiveTab.classList.remove('is-active')
    currentActiveTab = tabItem

    setTimeout(() => {
      disabledUpdating = false
    }, timeout);
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

  updateActiveTabOnScroll()
}

function updateActiveTabOnScroll(){
  if(disabledUpdating){
    return
  }

  const scrolledAmount = window.scrollY + (window.innerWidth >= 768 ? TOP_HEADER_DESKTOP + 80: TOP_HEADER_MOBILE + 8)
  
  let newActiveTab

  if(scrolledAmount >= productTabPanelPositionMap['product-recommendation']){
    newActiveTab = productTabButtonList[4] //  추천 버튼
  } else if(scrolledAmount >= productTabPanelPositionMap['product-shipment']){
    newActiveTab = productTabButtonList[3] //  배송/환불 버튼
  } else if(scrolledAmount >= productTabPanelPositionMap['product-inquiry']){
    newActiveTab = productTabButtonList[2] //  문의 버튼
  } else if(scrolledAmount >= productTabPanelPositionMap['product-review']){
    newActiveTab = productTabButtonList[1] //  문의 버튼
  } else{
    newActiveTab = productTabButtonList[0] //  상품정보 버튼
  }

  const bodyHeight = document.body.offsetHeight + (window.innerWidth < 1200 ? 56 : 0)
  if(window.scrollY + window.innerHeight == bodyHeight){
    newActiveTab = productTabButtonList[4]
  }

  if(newActiveTab) {
    newActiveTab = newActiveTab.parentNode
    if(newActiveTab != currentActiveTab){
      newActiveTab.classList.add('is-active')
      if(currentActiveTab != null){
      currentActiveTab.classList.remove('is-active')
      }
        currentActiveTab = newActiveTab
    }
  }
}

window.addEventListener('load', detectTabPanelPosition)
window.addEventListener('resize', detectTabPanelPosition)
window.addEventListener('scroll', updateActiveTabOnScroll)