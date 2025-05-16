//전역변수
const plus = document.getElementById("inputBox");
const urlName = document.getElementById("urlname");
const url = document.getElementById("url");

//로그아웃
document.getElementById("nickname").addEventListener("click", function () {
  document.getElementById("logout").style.display = "block";
  document.getElementById("logout").style.cursor = "pointer";
});
document.getElementById("logout").addEventListener("click", function () {
  localStorage.removeItem("username");
  localStorage.removeItem("pw");
  location.reload();
});
//바로가기 추가해서 모달 팝업에 name, url 입력 후 home 화면에 값 나오게,
//데이터가 localStorage에 들어가면 모달 팝업 빈 값으로 세팅
document.getElementById("saveBtn").addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.setItem("urlname", urlName.value);
  localStorage.setItem("url", url.value);

  document.getElementById("modal").style.visibility = "hidden";
  document.getElementById("popup").style.visibility = "hidden";

  document.getElementById("inputBox").style.display = "block";
  document.getElementById("urlName").innerText = urlName.value;
  document.getElementById("urlAdd").innerText = url.value;

  // 입력값 초기화
  urlName.value = "";
  url.value = "";
  document.getElementById("inputBox").addEventListener("click", function () {
    window.location.href = localStorage.getItem("url");
  });
});

//URL에 값이 있으면 완료버튼 활성화
const input = document.getElementById("url");
const button = document.getElementById("saveBtn");

input.addEventListener("input", function () {
  if (this.value.trim() === "") {
    button.disabled = true; // 비어있으면 비활성화
    button.style.cursor = "default";
    button.style.backgroundColor = "#ccc";
    button.style.color = "999";
  } else {
    button.disabled = false; // 값이 있으면 활성화
    button.style.cursor = "pointer";
    button.style.backgroundColor = "#696001";
    button.style.color = "white";
  }
});

//삭제 버튼 누르면 바로가기 삭제

//팝업 띄우기
function popUp() {
  document.getElementById("modal").style.visibility = "visible";
  document.getElementById("popup").style.visibility = "visible";
}

//취소 누르면 팝업 닫기
function cancel() {
  document.getElementById("modal").style.visibility = "hidden";
  document.getElementById("popup").style.visibility = "hidden";
}

//아이디, 비밀번호까지 다 입력하고 리다이렉트 됐을 때 로그인 버튼 hidden, 아이디 앞 2자리만 가져와서 뜨게하기
document.addEventListener("DOMContentLoaded", function () {
  event.preventDefault();
  if (localStorage.getItem("username") === null) {
    //id값이 없을 때
    document.getElementById("drop-down").style.display = "none";
    document.getElementById("loginBtn").style.visibility = "visible";
    document.getElementById("nickname").style.visibility = "hidden";
    document.getElementById("nickname").value =
      localStorage.getItem("username");
  } else if (localStorage.getItem("username") !== null) {
    //id값 있을때. 로그인 버튼 사라지고
    document.getElementById("loginBtn").style.display = "none";
    document.getElementById("nickname").style.visibility = "visible";
    //닉네인 표출
    document.getElementById("nickname").innerText = localStorage
      .getItem("username")
      .substring(0, 2);
    document.getElementById("nickname").style.cursor = "pointer";
    document.getElementById("logout").style.display = "none";
  }
});
//홈 화면 실행될 때 바로가기 url, name 있으면 ui에 보이게, 없으면 display none
window.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("url") === null) {
    document.getElementById("inputBox").style.display = "none";
  } else {
    document.getElementById("urlName").innerText =
      localStorage.getItem("urlname");
    document.getElementById("urlAdd").innerText = localStorage.getItem("url");
    document.getElementById("inputBox").addEventListener("click", function () {
      window.location.href = localStorage.getItem("url");
    });
  }
});
