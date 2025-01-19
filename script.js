document.addEventListener("DOMContentLoaded", () => {
  // Expense form submission
  const expenseForm = document.getElementById("expense-form");
  if (expenseForm) {
    expenseForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const amount = document.getElementById("amount").value;
      const date = document.getElementById("date").value;

      const expenseList = document.getElementById("expense-list");
      const expenseItem = document.createElement("div");
      expenseItem.classList.add("expense-item");
      expenseItem.innerHTML = `<div><strong>${name}</strong> - $${amount} on ${date}</div>`;
      expenseList.appendChild(expenseItem);

      expenseForm.reset();
    });
  }
});