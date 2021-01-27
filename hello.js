const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function(){
    console.log("tata bye bye");
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block"
})
const depositBtn = document.getElementById("addDeposit")
depositBtn.addEventListener("click", function(){
    const despositAmount = document.getElementById("depositAmount").value;
    const depositNumber = parseFloat(despositAmount);

    const currentDeposit = document.getElementById("currentDeposit").innerText;
    const currentDepositNumber = parseFloat
})