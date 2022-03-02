const sectionHeaderIconButton = document.querySelector('.product-shipment .product-section-header.sm-only .icon-button')

function showFullSection(){
  const section = this.parentNode.parentNode //parentNode 중복사용으로 상위 부모 선택 가능
  section.classList.add('is-open')
  }

sectionHeaderIconButton.addEventListener('click', showFullSection)