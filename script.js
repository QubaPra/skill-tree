var squares = document.getElementsByTagName("div");
var money = document.getElementById("money-feniksy");
var moneyValue;
if(localStorage.getItem("money") === null){
  moneyValue = 200;
}else{
  moneyValue = parseInt(localStorage.getItem("money"));
}
money.innerHTML = "Feniksy has: $" + moneyValue;

for (var i = 0; i < squares.length; i++) {
  if(squares[i].id.startsWith("square")){
    if(localStorage.getItem(squares[i].id) === "blue"){
      squares[i].style.backgroundColor = "blue";
    }else{
      squares[i].style.backgroundColor = "red";
    }
    squares[i].addEventListener("click", function() {
      if (moneyValue >= 10) {
        var confirmBuy = confirm("Are you sure you want to buy this skill for $10?");
        if(confirmBuy){
          if (this.style.backgroundColor === "red") {
            this.style.backgroundColor = "blue";
            moneyValue -= 10;
            money.innerHTML = "Feniksy has: $" + moneyValue;
            localStorage.setItem("money", moneyValue);
            localStorage.setItem(this.id, "blue");
            this.removeEventListener("click", arguments.callee);
          } else {
            this.style.backgroundColor = "red";
            localStorage.setItem(this.id, "red");
          }
        }
      }else{
        alert("You have not enough money to buy this skill");
      }
    });
  }
}
var clearButton = document.getElementById("clear-storage");
clearButton.addEventListener("click", function(){
  localStorage.clear();
  location.reload();
});
