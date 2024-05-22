function 보내기() {
  const 입력박스 = document.getElementById("사용자채팅");
  const 메세지 = 입력박스.value.trim();
  if (메세지 == "") return;

  메세지보이기(메세지, "사용자");
  입력박스.value = "";

  setTimeout(() => {
    메세지보이기("문의사항을 말씀해주세요.", "봇");
  }, 1000);
}
function 메세지보기(메세지, 센더) {
  const 채팅박스 = document.getElementById("챗박스");
  const 메세지생성 = document.createElement("div");

  메세지생성.classList.add("메세지", 센더 + "-메세지");
  메세지생성.textContent = 메세지;
  채팅박스.appendChild(메세지생성);
}
