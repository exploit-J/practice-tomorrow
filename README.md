# 오늘의 집 클론코딩 연습입니다.

### 1. GNB

* 로그일을 하지 않은 경우

```html
<div class="button-group">
  <button class="gnb-icon-button is-search lg-hidden" type="button" aria-label="검색창 열기 버튼">
    <i class="ic-search"></i>
  </button>
  <a class="gnb-icon-button is-cart" href="/" aria-laber="장바구니 페이지로 이동">
    <i class="ic-cart"></i>
  </a>

  <div class="gnb-auth sm-hidden">
    <a href="/">로그인</a>
    <a href="/">회원가입</a>
  </div>
</div>
```

* 로그일을 한 경우

```html
<div class="button-group">
  <button class="gnb-icon-button is-search lg-hidden" type="button" aria-label="검색창 열기 버튼">
    <i class="ic-search"></i>
  </button>

  <a class="gnb-icon-button sm-hidden" href="/" aria-laber="스크랩북 페이지로 이동">
    <i class="ic-bookmark"></i>
  </a>

  <a class="gnb-icon-button sm-hidden" href="/" aria-laber="내소식 페이지로 이동">
    <i class="ic-bell"></i>
  </a>

  <a class="gnb-icon-button is-cart" href="/" aria-laber="장바구니 페이지로 이동">
    <i class="ic-cart"></i>
    <strong class="badge">5</strong>
  </a>

  <button class="gnb-avatar-button sm-hidden" type="button" aria-label="마이메뉴 열기 버튼">
    <div class="avatar-32">
      <img src="./assets/images/img-user-01.jpg" alt="4달라">
    </div>
  </button>
</div>
```

### 2. sidebar

- 로그인을 하지 않은 경우
```html
<div class="sidebar-auth">
        <a class="btn-outlined btn-40" href="/">로그인</a>
        <a class="btn-primary btn-40" href="/">회원가입</a>
      </div>
```

- 로그인을 한 경우
```html
 <div class="sidebar-user">
        <a href="/">
          <div class="avatar-24">
            <img src="assets/images/img-user-01.jpg" alt="4달라">
          </div>
          <strong class="username">사딸라</strong>
        </a>
      </div>
```
```html
<div class="sidebar-user-menu">
  <ul class="user-menu-list">
    <li class="user-menu-item">
      <a href="/">
        마이페이지
      </a>
    </li>
    <li class="user-menu-item">
      <a href="/">
       나의 쇼핑
     </a>
    </li>
    <li class="user-menu-item">
     <a href="/">
        스크랩북
      </a>
    </li>
    <li class="user-menu-item">
      <a href="/">
        알림
      </a>
    </li>
    <li class="user-menu-item">
      <a href="/">
        이벤트
      </a>
    </li>
  </ul>
</div>
```
