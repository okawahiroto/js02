// let nameInput = document.getElementById('nameInput');
// let nameOutput = document.getElementById('nameOutput');
// let nameOutputText = document.getElementById('nameOutputText');
// let btnSubmit = document.getElementById('btnSubmit');
// let btnDelete = document.getElementById('btnDelete');

nameInput.value = '';
// ここでuserNameを定義、代入しても、下の関数内では使えない？
let userName = nameInput.value;

console.log(userName);

// formの要素取得勉強中
console.log(form[1].value);

btnSubmit.addEventListener('click', function() {
  console.log('送信ボタン');
  // 関数内でuserNameを定義、代入しないとダメ？
  let userName = nameInput.value;

  console.log(userName);

  nameOutput.value = userName;
  nameOutputText.innerText = userName;

  nameInput.value = '';
  console.log('--------');
});

btnDelete.addEventListener('click', function() {
  console.log('削除ボタン');
  nameInput.value = '';
  nameOutput.value = '';
  nameOutputText.innerText = '';
  console.log('--------');
});


