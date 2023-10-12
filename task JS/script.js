"use strict";

const botton = document.querySelector(".botton");
const box = document.querySelector(".box");
const cross = document.querySelector(".cross");

const text = document.querySelector(".label");

const type = document.getElementById("change");
const apply = document.querySelector(".apply");

const todoList = document.getElementById("todo-list");
const newTaskInput = document.getElementById("new-task");

const update = document.querySelector(".update-hide");
const UpdateData = document.querySelector(".UpdateData");

let count = 0;

cross.addEventListener("click", function () {
  box.classList.add("hidden");
});

botton.addEventListener("click", function () {
  console.log("botton click");
  apply.classList.remove("hide");
  update.classList.add("update-hide");
  box.classList.remove("hidden");
  text.value = "";
});

function addTask(taskText, type) {
  const li = document.createElement("li");

  if (type === "text") {
    li.innerHTML = `
                <span>${taskText} <br><input type="text" /></span>
                <i class=" del-botton fa fa-edit " style="font-size:24px"></i>
                <button class ="btn-close del-botton"><i class="fa fa-trash-o " style="font-size:24px"></i></button>
                <button class="swap-btn"><i class='fas fa-angle-down del-botton down' style='font-size:24px'></i></button>
                <button class="del-botton up"><i class='fas fa-angle-up' style='font-size:24px'></i></button>
            `;
    li.classList.add("data");
    todoList.appendChild(li);
    text.value = "";
  } else if (type === "radio") {
    count++;
    // console.log(i);
    const input = Number(prompt("Select the gender\n 1. male\n 2. female "));
    li.innerHTML =
      input === 1
        ? `<span>${taskText} <input type="radio"  name="fav${count}_language" value="male" checked="">
            <label for="male"><i class='fas fa-user-tie' style='font-size:24px'></i></label>
            <input type="radio"  name="fav${count}_language" value="female">
            <label for="female"><i class='fas fa-female' style='font-size:30px'></i></label></span> <i class=" del-botton fa fa-edit " style="font-size:24px"></i>
          <button class ="btn-close del-botton"><i class="fa fa-trash-o " style="font-size:24px"></i></button> <button class="swap-btn"><i class='fas fa-angle-down del-botton down' style='font-size:24px'></i></button> <button class="del-botton up"><i class='fas fa-angle-up' style='font-size:24px'></i></button> `
        : `<span>${taskText} <input type="radio"  name="fav${count}_language" value="male" >
            <label for="male"><i class='fas fa-user-tie' style='font-size:24px'></i></label>
            <input type="radio"  name="fav${count}_language" value="female" checked="" >
            <label for="female"><i class='fas fa-female' style='font-size:30px'></i></label></span><i class=" del-botton fa fa-edit " style="font-size:24px"></i>
          <button class ="btn-close del-botton"><i class="fa fa-trash-o " style="font-size:24px"></i></button> <button class="swap-btn"><i class='fas fa-angle-down del-botton down' style='font-size:24px'></i></button> <button class="del-botton up"><i class='fas fa-angle-up' style='font-size:24px'></i></button>`;
    li.classList.add("data");
    todoList.appendChild(li);
    text.value = "";
  } else if (type === "checkbox") {
    count++;
    const input = Number(prompt("Do you have a bike\n 1. YES\n 2. NO "));
    li.innerHTML =
      input === 1
        ? `<span>${taskText} <input type="checkbox"  name="fav${count}_language" value="yes" checked="">
          <label for="yes"><i class='fas fa-biking' style='font-size:24px'></i></label>
          <input type="checkbox"  name="fav${count}_language" value="no">
          <label for="no"><i class='fas fa-car-side' style='font-size:24px'></i></label></span> <i class=" del-botton fa fa-edit " style="font-size:24px"></i>
        <button class ="btn-close del-botton"><i class="fa fa-trash-o " style="font-size:24px"></i></button> <button class="swap-btn"><i class='fas fa-angle-down del-botton down' style='font-size:24px'></i></button> <button class="del-botton up"><i class='fas fa-angle-up' style='font-size:24px'></i></button>`
        : `<span>${taskText} <input type="checkbox"  name="fav${count}_language" value="yes" >
          <label for="yes"><i class='fas fa-biking' style='font-size:24px'></i></label>
          <input type="checkbox"  name="fav${count}_language" value="no" checked="" >
          <label for="no"><i class='fas fa-car-side' style='font-size:24px'></i></label></span><i class=" del-botton fa fa-edit " style="font-size:24px"></i>
        <button class ="btn-close del-botton"><i class="fa fa-trash-o " style="font-size:24px"></i></button> <button class="swap-btn"><i class='fas fa-angle-down del-botton down' style='font-size:24px'></i></button> <button class="del-botton up"><i class='fas fa-angle-up' style='font-size:24px'></i></button>`;
    li.classList.add("data");
    todoList.appendChild(li);
    text.value = "";
  }

  const delRecord = document.querySelectorAll(".btn-close");

  delRecord.forEach((btn) => {
    btn.onclick = () => {
      btn.parentNode.remove();
    };
  });
  const swapButton = li.querySelector(".down");
  swapButton.addEventListener("click", () => {
    swapTask(li);
  });
  const down = li.querySelector(".up");
  down.addEventListener("click", () => {
    swapTaskup(li);
  });
}

apply.addEventListener("click", () => {
  const taskText = text.value;

  if (taskText !== "") {
    addTask(taskText, type.value);
    box.classList.add("hidden");
  }
});

todoList.addEventListener("click", (event) => {
  const target = event.target;
  const parentLi = target.closest(".data");

  if (target.classList.contains("fa-edit")) {
    const span = parentLi.querySelector("span");

    text.value = span.textContent;
    const inputElement = span.querySelector("input");
    const type2 = inputElement.getAttribute("type");

    document.getElementById("change").value = type2;

    console.log("click Edit");
    console.log(apply);
    box.classList.remove("hidden");
    apply.classList.add("hide");
    update.classList.remove("update-hide");

    const newText = span.textContent;
    UpdateData.onclick = (e) => {
      if (newText !== null) {
        console.log("click Edit");
        const taskText = text.value;

        const li = document.createElement("li");

        if (type.value === "text") {
          li.innerHTML = `
                <span>${taskText}<br><input type="text" /></span>
                <i class="del-botton fa fa-edit " style="font-size:24px"></i>
                <button class ="btn-close del-botton"><i class="fa fa-trash-o " style="font-size:24px"></i></button>
                <button class="swap-btn"><i class='fas fa-angle-down del-botton down' style='font-size:24px'></i></button>
                <button class="del-botton up"><i class='fas fa-angle-up' style='font-size:24px'></i></button>

            `;
          li.classList.add("data");
          target.closest(".data").after(li);
          console.log(target.parentNode);
          target.parentNode.remove();
          text.value = "";
        } else if (type.value === "radio") {
          count++;
          // console.log(i);
          const input = Number(
            prompt("Select the gender\n 1. male\n 2. female ")
          );
          li.innerHTML =
            input === 1
              ? `<span>${taskText} <input type="radio"  name="fav${count}_language" value="male" checked="">
            <label for="male"><i class='fas fa-user-tie' style='font-size:24px'></i></label>
            <input type="radio"  name="fav${count}_language" value="female">
            <label for="female"><i class='fas fa-female' style='font-size:30px'></i></label></span> <i class=" del-botton fa fa-edit " style="font-size:24px"></i>
          <button class ="btn-close del-botton"><i class="fa fa-trash-o " style="font-size:24px"></i></button> <button class="swap-btn"><i class='fas fa-angle-down del-botton down' style='font-size:24px'></i></button> <button class="del-botton up"><i class='fas fa-angle-up' style='font-size:24px'></i></button> `
              : `<span>${taskText} <input type="radio"  name="fav${count}_language" value="male" >
            <label for="male"><i class='fas fa-user-tie' style='font-size:24px'></i></label>
            <input type="radio"  name="fav${count}_language" value="female" checked="" >
            <label for="female"><i class='fas fa-female' style='font-size:30px'></i></label></span><i class=" del-botton fa fa-edit " style="font-size:24px"></i>
          <button class ="btn-close del-botton"><i class="fa fa-trash-o " style="font-size:24px"></i></button> <button class="swap-btn"><i class='fas fa-angle-down del-botton down' style='font-size:24px'></i></button> <button class="del-botton up"><i class='fas fa-angle-up' style='font-size:24px'></i></button>`;
          li.classList.add("data");
          target.closest(".data").after(li);
          target.parentNode.remove();
          text.value = "";
        } else if (type.value === "checkbox") {
          count++;
          const input = Number(prompt("Do you have a bike\n 1. YES\n 2. NO "));
          li.innerHTML =
            input === 1
              ? `<span>${taskText} <input type="checkbox"  name="fav${count}_language" value="yes" checked="">
          <label for="yes"><i class='fas fa-biking' style='font-size:24px'></i></label>
          <input type="checkbox"  name="fav${count}_language" value="no">
          <label for="no"><i class='fas fa-car-side' style='font-size:24px'></i></label></span> <i class=" del-botton fa fa-edit " style="font-size:24px"></i>
        <button class ="btn-close del-botton"><i class="fa fa-trash-o " style="font-size:24px"></i></button> <button class="swap-btn"><i class='fas fa-angle-down del-botton down' style='font-size:24px'></i></button> <button class="del-botton up"><i class='fas fa-angle-up' style='font-size:24px'></i></button>`
              : `<span>${taskText} <input type="checkbox"  name="fav${count}_language" value="yes" >
          <label for="yes"><i class='fas fa-biking' style='font-size:24px'></i></label>
          <input type="checkbox"  name="fav${count}_language" value="no" checked="" >
          <label for="no"><i class='fas fa-car-side' style='font-size:24px'></i></label></span><i class=" del-botton fa fa-edit " style="font-size:24px"></i>
        <button class ="btn-close del-botton"><i class="fa fa-trash-o " style="font-size:24px"></i></button> <button class="swap-btn"><i class='fas fa-angle-down del-botton down' style='font-size:24px'></i></button> <button class="del-botton up"><i class='fas fa-angle-up' style='font-size:24px'></i></button>`;
          li.classList.add("data");
          target.closest(".data").after(li);
          target.parentNode.remove();
          text.value = "";
        }
        const delRecord = document.querySelectorAll(".btn-close");

        delRecord.forEach((btn) => {
          btn.onclick = () => {
            btn.parentNode.remove();
          };
        });

        const swapButton = li.querySelector(".down");
        swapButton.addEventListener("click", () => {
          swapTask(li);
        });
        const down = li.querySelector(".up");
        down.addEventListener("click", () => {
          swapTaskup(li);
        });
        box.classList.add("hidden");
      }
    };
  }
});
function swapTaskup(taskElement) {
  const prevTask = taskElement.previousElementSibling;
  if (prevTask) {
    const tempText = taskElement.querySelector("span").innerHTML;
    taskElement.querySelector("span").innerHTML =
      prevTask.querySelector("span").innerHTML;
    prevTask.querySelector("span").innerHTML = tempText;
  }
}

function swapTask(taskElement) {
  const nextTask = taskElement.nextElementSibling;
  if (nextTask) {
    const tempText = taskElement.querySelector("span").innerHTML;
    taskElement.querySelector("span").innerHTML =
      nextTask.querySelector("span").innerHTML;
    nextTask.querySelector("span").innerHTML = tempText;
  }
}
