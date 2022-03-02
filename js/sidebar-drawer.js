const drawerMenuButtonList = document.querySelectorAll('.sidebar-nav .drawer-menu-button')
//같은 작업하는 요소들을 selectorAll로 배열로 뽑아낸다

function toggleDrawerMenu(){
  const drawerMenu = this.parentNode  // this.는 drawerMenuButton을 가리킴, parentNode:부모요소 선택
  drawerMenu.classList.toggle('is-open') //add + remove = toggle
}

drawerMenuButtonList.forEach(function(button){ //forEach : 반복문 시행
  button.addEventListener('click', toggleDrawerMenu)
})
