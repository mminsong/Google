//localStorage에 이메일 또는 휴대전화 입력 값 넣기
document.getElementById("nextBtn").addEventListener("click", function () {
  const input = document.getElementById("userId").value;
  if (document.getElementById("userId").value === "") {
    alert("이메일 또는 휴대전화를 입력하세요");
  } else {
    localStorage.setItem("username", input);

    //비동기 처리 타이밍 문제/브라우저 렌더링 타이밍 때문에 setTimeout으로 살짝 지연시킴
    setTimeout(() => {
      window.location.href = `../html/next.html?userId=${encodeURIComponent(
        input
      )}`;
    }, 10);
  }
});
