//전역변수
const plus = document.getElementById("fast");
const username = document.getElementById("name");
const url = document.getElementById("url");

const info = document.querySelector("#saveInfo");

//localStorage에 저장된 데이터 불러오기
//const saveName = localStorage.getItem(username);

//바로가기 추가에 데이터가 없으면 삭제버튼 안보이게, 데이터가 있으면 저장된 localStorage 보여주기
if (localStorage.getItem("value") === null) {
} else {
  info.innerText = localStorage.getItem("value");
}
//저장 --> 이름, url 입력 후 input 태그 초기화
function save() {
  //완료 버튼을 클릭했을 때 파라미터가 생성되는 것을 방지
  //방지를 안하면 화면 비율이 완료 버튼 클릭 전후가 다름
  event.preventDefault();

  const userValue = [username.value, url.value];
  const existing = localStorage.getItem("value");
  const data = existing ? JSON.parse(existing) : [];

  data.push(userValue);

  localStorage.setItem("value", JSON.stringify(data));

  //이름, url에 입력한 내용 홈 ui에 표시
  info.innerText = localStorage.getItem("value");
  //완료를 누르면 모달 팝업 hidden 처리
  document.getElementById("modal").style.visibility = "hidden";
  document.getElementById("popup").style.visibility = "hidden";

  //모달 팝업의 작성된 데이터 리셋
  username.value = "";
  url.value = "";
}

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
function remove() {}

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

//URL에 값이 없으면 완료 버튼 작동 안됨
