//메뉴추가 기능만들기
function 메뉴추가() {
  const 메뉴리스트 = document.getElementById("menu-list");

  //메뉴추가 입력 프롬포트 추가하기
  const 신메뉴 = prompt("새로운 메뉴를 입력해주세요 : ");
  //만약에 신메뉴를 입력해서 확인을 눌렀다면
  if (신메뉴) {
    //확인을 누르면 true
    //li 태그 추가하기
    const newItem = document.createElement("li");
    // 만들어놓은 li 태그 안에 프롬포트로 추가할 내용 적은 것
    newItem.textContent = 신메뉴;
    메뉴리스트.appendChild(newItem);
  }
}
/*
createElement : 태그 생성하기 닫는 태그 표시 안해줘도됨
        예를 들어 div 태그를 생성하길 원한다면
        document.createElement("div"); 작성
appendChild : 눈에 보이게끔 부모 태그에 새로 만든 자식 태그를 추가

                                메뉴리스트.appendChild(newItem);
id값 제거하고 태그만 작성하기             ul.appendChild(li);
                                메뉴리스트 = ul 태그 값
                                newItem = 새로 추가되는 li 태그 값
*/

//메뉴선택 기능만들기
function 메뉴선택() {
  const 메뉴리스트 = document.getElementById("menu-list");
  // li 태그를 선택해서 숫자 배열로 만들기
  const 아이템들 = document.getElementsByTagName("li");
  //만약 모든 아이템을 보길 원한다면 for문 사용

  // 랜덤숫자
  const 랜덤숫자 = Math.floor(Math.random() * 아이템들.length);
  console.log("랜덤으로 나온 숫자 : " + 랜덤숫자);
  const 아이템선택 = 아이템들[랜덤숫자];
  console.log("선택된 아이템이름 : " + 아이템선택.innerText);
  alert("오늘의 점심 메뉴는 ? " + 아이템선택.innerText);
}
