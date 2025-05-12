//팝업 띄우기
function popUp() {
  document.getElementById('popup').style.visibility = 'visible';
}

//취소 누르면 팝업 닫기
function cancel() {
  document.getElementById('popup').style.visibility = 'hidden';
}

//저장 --> 이름, url 입력 후 input 태그 초기화
function save() {
  var name = document.getElementById('name');
  var url = document.getElementById('url');
  document.getElementById('popup').style.visibility = 'hidden';
  name.value = null;
  url.value = null;
}