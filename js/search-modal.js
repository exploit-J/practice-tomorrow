const searchModal = document.querySelector('.search-modal')
const searchOverlay = document.querySelector('.overlay')
const searchButton = document.querySelector('.gnb-icon-button.is-search')
const searchModalCloseButton = searchModal.querySelector('.search-modal-form .btn-ghost') //document는 문저 전체. 변수를 지정하여 노드 검색 범위를 줄일 수 있음.

function openSearchModal(){
  searchModal.classList.add('is-active')
  searchOverlay.classList.add('is-active')
}

searchButton.addEventListener('click', openSearchModal)

function closeSearchModal(){
  searchModal.classList.remove('is-active')
  searchOverlay.classList.remove('is-active')
}

searchModalCloseButton.addEventListener('click', closeSearchModal)