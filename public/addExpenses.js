
const category = document.getElementById("expenseName");
const amount = document.getElementById("expenseAmount");
const Expensesbtn = document.getElementById("addExpensesbtn");
const expenses = document.getElementById("expenses");

let expList = [];

Expensesbtn.addEventListener("click", () => {
  const expense = document.createElement("div");
  expense.innerHTML = `<div class="input-group mt-3">
  <input
    type="text"
    class="form-control"
    aria-label="Recipient's username with two button addons"
    value = ${category.value}
  />
  <button class="btn btn-outline-secondary" type="button">
    Remove
  </button>
</div>`;

  expenses.appendChild(expense);

  let list={};
  list.category = category.value;
  list.amount = amount.value;
  memList.push(list);

  console.log(category.value);
  console.log(amount.value);
});
