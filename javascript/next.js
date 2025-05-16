//login.html 에서 아이디 입력한 값 불러오기
const existingId = localStorage.getItem("username");
document.getElementById("userId").textContent = existingId;

//아이디 입력한 값 클릭하면 login.html으로 넘어가게
document.getElementById("userId").addEventListener("click", function () {
  window.location.href = `../html/login.html?userId=${encodeURIComponent(
    existingId
  )}`;
});

//비밀번호 입력하기
document.getElementById("nextBtn").addEventListener("click", function () {
  if (document.getElementById("putpw").value === "") {
    alert("비밀번호를 입력하세요");
  } else {
    const b = document.getElementById("putpw").value;
    localStorage.setItem("pw", b);

    setTimeout(() => {
      window.location.href = `../index.html?userId=${encodeURIComponent(
        document.getElementById("userId")
      )}&password=${encodeURIComponent(document.getElementById("putpw"))}`;
    });
  }
});

//비밀번호 표시 체크박스 클릭하면 비밀번호 표시되게
document.getElementById("check").addEventListener("change", function () {
  const passCheck = document.getElementById("putpw");
  if (this.checked) {
    passCheck.type = "text";
  } else {
    passCheck.type = "password";
  }
});
