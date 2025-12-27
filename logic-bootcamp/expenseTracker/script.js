const description = document.getElementById("description");
const amount = document.getElementById("amount");
const date = document.getElementById("date");
const expenseForm = document.getElementById("expense-form");
const expenseItems = document.getElementById("expenses");

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function addExpense(description, amount, date) {
  if (!description || amount <= 0 || !date) {
    alert("Please enter valid expense details");
    return;
  }
  const expense = {
    id: Date.now(),
    description: description,
    amount: parseFloat(amount),
    date: new Date(date),
  };
  localStorage.setItem("expenses", JSON.stringify([...expenses, expense]));
  expenses.push(expense);
  renderExpenses();
}

function renderExpenses() {
  if (expenses.length === 0) {
    expenseItems.innerHTML = "<li>No expenses recorded.</li>";
    return;
  }
  expenseItems.innerHTML = "";
  expenses.forEach((expense) => {
    const li = document.createElement("li");
    li.textContent = `${expense.description} - $${expense.amount.toFixed(
      2
    )} on ${new Date(expense.date).toLocaleDateString()}`;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = () => {
      expenses = expenses.filter((e) => e.id !== expense.id);
      renderExpenses();
    };
    expenseItems.appendChild(deleteBtn);
    expenseItems.appendChild(li);
  });
}

expenseForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addExpense(description.value, amount.value, date.value);
  expenseForm.reset();
});

// Initial render
renderExpenses();
