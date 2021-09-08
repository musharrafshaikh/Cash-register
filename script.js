const billAmount = document.querySelector("#bill-amount");

const cashGiven = document.querySelector("#cash-given");

const message = document.querySelector("#error-message");

const checkButton = document.querySelector("#check-button");

const noOfNotes = document.querySelectorAll(".no-of-notes");
const availabelNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateBillAndCashAmount() {
  message.style.display = "none";
  if (billAmount.value > 0){
if (cashGiven.value >= billAmount.value ) {
const amountToBeReturned = cashGiven.value - billAmount.value;
calculateChange(amountToBeReturned);
}else{
  showMessage("The cash provided should be equal to bill amount");
}
 } else{
   showMessage("Invalid Bill Amount")
  }
});

function calculateChange(amountToBeReturned){
for (let i = 0; i < availabelNotes.length; i++) {
  const numberOfNotes = Math.trunc(
    amountToBeReturned / availabelNotes[i]
  );
  amountToBeReturned %= availabelNotes[i];
  noOfNotes[i].innerText = numberOfNotes;
}
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}

