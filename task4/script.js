
function myFunction() {
  var mText = prompt("Введите текст");
  document.getElementById("demo").textContent = mText;
  myFunction.preventDefault()
}
