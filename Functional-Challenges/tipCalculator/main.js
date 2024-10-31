const billAmount = document.querySelector("#bill-amount");
const tipPercentage = document.querySelector("#tip-percentage");
const tipAmount = document.querySelector("#tip-amount");
const totalAmount = document.querySelector("#total-amount");
const calculateBtn = document.querySelector("#calculate-tip-btn");

calculateBtn.addEventListener("click", () => {
	const billAmountValue = parseFloat(billAmount.value);
	const tipPercentageValue = parseFloat(tipPercentage.value);

	const tipAmountValue = (billAmountValue * tipPercentageValue) / 100;
	const totalAmountValue = billAmountValue + tipAmountValue;

	tipAmount.textContent = tipAmountValue.toFixed(2);
	totalAmount.textContent = totalAmountValue.toFixed(2);
});
