//gnbsearch-menu toggle
const gnbSearch = document.querySelector('.gnb-search')
const gnbSearchInput = gnbSearch.querySelector('input')
const gnbSearchHistory = gnbSearch.querySelector('.search-history')

// gnbsearch-history delete all
const deleteAllButton = gnbSearchHistory.querySelector('.search-history-header button')
const gnbSearchHistoryList = gnbSearchHistory.querySelector('ol')

// gnbsearch-button delete
const deleteButtonList = gnbSearchHistoryList.querySelectorAll('.delete-button')

function closeGnbSearchFunction(){
  gnbSearchHistory.classList.remove('is-active')
  window.removeEventListener('click', closeGnbSearchHistory)
}

function closeGnbSearchHistory(e){
  if(!gnbSearch.contains(e.target)){
    closeGnbSearchFunction()
  }
}

function openGnbSearchHistory(){
  if(gnbSearchHistoryList.children.length === 0){
    return
  }

  if(!gnbSearchHistory.classList.contains('is-active')){
    window.addEventListener('click', closeGnbSearchHistory)
  }
  gnbSearchHistory.classList.add('is-active')  
}

function deleteAllSearchHistory(){
  gnbSearchHistoryList.innerHTML = ''
  closeGnbSearchFunction()
}


function deleteSearchHistory(e){
  e.stopPropagation()
  const itemToDelete = this.parentNode
  gnbSearchHistoryList.removeChild(itemToDelete)
  
  if(gnbSearchHistoryList.children.length === 0){
    closeGnbSearchFunction()
  }
}

deleteAllButton.addEventListener('click', deleteAllSearchHistory )

gnbSearchInput.addEventListener('focus', openGnbSearchHistory)

deleteButtonList.forEach((button) => {
  button.addEventListener('click', deleteSearchHistory)
})
