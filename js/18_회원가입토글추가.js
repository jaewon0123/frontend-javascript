function 이용약관() {
  const 약관박스 = document.getElementById("약관");

  if (약관박스.classList.contains("더보기")) {
    약관박스.classList.remove("더보기");
  } else {
    약관박스.classList.add("더보기");
  }
}

function 가입유무() {
  const 이름 = document.getElementById("user_name").value;
  const 이메일 = document.getElementById("user_email").value;

  if (이름 == "동그라미" && 이메일 == "kh@kh.kh") {
    alert("이미 가입된 회원입니다.");
  } else {
    alert("가입되어있지 않습니다.");
  }
}
function 회원가입() {
  alert("회원가입이 완료되었습니다.");
}
