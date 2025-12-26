const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const addButton = document.getElementById("add-todo-btn");
const totalTodos = document.getElementById("total-todos");
const completedTodos = document.getElementById("completed-todos");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function createTodo(text) {
  return {
    id: Date.now(),
    text: text,
    completed: false,
  };
}

function addTodo() {
  const text = todoInput.value.trim();
  if (text === "") return;

  const todo = createTodo(text);
  if (!todo) return;
  todos.push(todo);
  saveTodos();
  todoInput.value = "";
  renderTodos();
}

function deleteTodo(id) {
  console.log(id);
  todos = todos.filter((todo) => todo.id !== id);
  saveTodos();
  renderTodos();
}

function toggleCompleteTodo(id) {
  const todo = todos.find((todo) => todo.id === id);
  if (!todo) return;
  todo.completed = !todo.completed;
  saveTodos();
  renderTodos();
}

function updateTodo(id) {
  const todo = todos.find((todo) => todo.id === id);
  if (!todo) return;
  const newText = prompt("Update todo:", todo.text);
  if (newText !== null && newText.trim() !== "") {
    todo.text = newText.trim();
    saveTodos();
    renderTodos();
  }
}

function renderTodos() {
  todoList.innerHTML = "";
  if (todos.length === 0) {
    todoList.innerHTML = "<li>No todos available.</li>";
    return;
  }
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.className = "todo-item";
    if (todo.completed) {
      li.classList.add("completed");
    }
    li.innerHTML = `
      <span>${todo.text}</span>
      <button class="complete-btn">${
        todo.completed ? "Undo" : "Complete"
      }</button>
      <button class="update-btn">Update</button>
      <button class="delete-btn">Delete</button>
    `;
    li.querySelector(".complete-btn").onclick = () =>
      toggleCompleteTodo(todo.id);
    li.querySelector(".update-btn").onclick = () => updateTodo(todo.id);
    li.querySelector(".delete-btn").onclick = () => deleteTodo(todo.id);
    todoList.appendChild(li);
    totalTodos.textContent = `${todos.length}`;
    completedTodos.textContent = `${todos.filter((t) => t.completed).length}`;
  });
}

addButton.addEventListener("click", addTodo);
renderTodos();
