# Todo-List

<img src="https://user-images.githubusercontent.com/96860670/174079136-fe58c5c5-4349-4211-b0a0-ff58a80e3a00.png" alt="img" width = "300px"/>

<!-- ## 목차

```
1. 사용 기술
2. 주요 기능
3. 기본 구조
4. 추가 요소
5. 배포
6. History
``` -->

Vanilla Js로 구현한 투두리스트입니다.

Demo
[https://sukyungdev-todolist.netlify.app/](https://sukyungdev-todolist.netlify.app/)

## 사용 기술

-   HTML
-   CSS
-   Bootstrap
-   JavaScript

## 주요 기능

1. 할일 입력.

    > 유저가 할일 입력가능.

2. 할일 삭제.

    > 선택한 할일 삭제가능.

3. 체크/체크 해제.

    > 완료된 할일은 삭제가능. 체크 해제 기능도 함께 구현.

4. 날짜/요일.

    > 오늘 날짜와 요일 확인 가능.

5. 할일 상태에 따라 나눠서 볼수 있는 탭 구현.
    > all(모든할일), ongoing(진행중인일), done(완료한일)

## Advanced Feature

1.  유저가 입력한 할일이 매우 길 경우 레이아웃이 무너지지 않도록  
    overflow:auto; 이용.

    <img src="https://user-images.githubusercontent.com/96860670/174077758-846107ef-68f7-4e4a-8181-36405d32ff86.png" alt="img" width="200px" />

2.  유저가 빈 값을 입력시 alert로 알려준다.

    <img src="https://user-images.githubusercontent.com/96860670/174079957-f53b011a-6d2e-4c15-bb27-40297f96b4e8.png" alt="img" width="200px" />

3.  반응형 대응.

> Bootstrap을 이용해서 반응형 웹페이지 제작.

-   모바일 버전  
    <img src="https://user-images.githubusercontent.com/96860670/174078041-d27b8b25-07a5-4c28-a257-0c5fed8b768d.png" alt="img" width = "200px"/>

-   타블렛 버전(>= 768px)  
    <img src="https://user-images.githubusercontent.com/96860670/174079330-607430e6-01f0-4183-b52a-7c4aad9cf567.png" alt="img" width = "300px"/>

## 배포

netlify를 이용하여 배포하였습니다.

## History

-   2022/06/15 : deploy 완료.
    safari 브라우저에서 요일이 undefiend로 나타나는 오류 수정.
-   2022/06/16 : readme추가.
