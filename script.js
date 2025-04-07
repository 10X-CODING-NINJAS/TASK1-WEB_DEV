const newTask = document.getElementById("input");
const addTask = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");


addTask.addEventListener("click", () => {
    addToList();
});

newTask.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        addToList();
    }
});

function addToList() {
    let text = newTask.value;
    if (text) {

        const listItem = document.createElement("li");
        listItem.className = "task-item";
        const checkbox = document.createElement("button");
        checkbox.className = "btn-check";
        checkbox.innerHTML = `<i class="fa-solid fa-check"><i/>`;
        const span = document.createElement("span");
        span.className = "text";
        span.textContent = text;
        const closeButton = document.createElement("button");
        closeButton.className = "btn-close";
        closeButton.innerHTML = `<i class="fa-solid fa-xmark"><i/>`;

        listItem.appendChild(checkbox);
        listItem.appendChild(span);
        listItem.appendChild(closeButton);

        taskList.appendChild(listItem);

        newTask.value = "";

        closeButton.addEventListener("click", () => {
            taskList.removeChild(listItem);
        });

        checkbox.addEventListener("click", () => {
            listItem.classList.toggle("active");
        });
    }
}