<script setup>
import {ref} from "vue";

const todos = ref([
  {id: 1, text: "Fix website bug", completed: false},
  {id: 2, text: "Prepare for meeting", completed: false},
  {id: 3, text: "Send email updates", completed: false},
]);

const completedTodos = ref([]);
const newTodoText = ref("");

const onTodoDragStart = (e, id, isCompleted) => {
  e.dataTransfer.setData("text/plain", JSON.stringify({id, isCompleted}));
};

const onTodoDragOver = (e) => {
  e.preventDefault();
};

const onTodoDrop = (e, targetCompleted) => {
  e.preventDefault();
  const data = JSON.parse(e.dataTransfer.getData("text/plain"));
  const {id, isCompleted} = data;

  if (isCompleted !== targetCompleted) {
    if (isCompleted) {
      const movedTodo = completedTodos.value.find((todo) => todo.id === id);
      completedTodos.value = completedTodos.value.filter(
          (todo) => todo.id !== id
      );
      todos.value = [...todos.value, {...movedTodo, completed: false}];
    } else {
      const movedTodo = todos.value.find((todo) => todo.id === id);
      todos.value = todos.value.filter((todo) => todo.id !== id);
      completedTodos.value = [
        ...completedTodos.value,
        {...movedTodo, completed: true},
      ];
    }
  }
};

const handleAddTodo = (e) => {
  e.preventDefault();
  if (newTodoText.value.trim() !== "") {
    const newTodo = {
      id: Date.now(),
      text: newTodoText.value.trim(),
      completed: false,
    };
    todos.value = [...todos.value, newTodo];
    newTodoText.value = "";
  }
};
</script>

<template>
  <div
      class="p-8 mb-4 flex 1024px:flex-row flex-col gap-5 justify-center"
  >
    <div
        class="w-full 1024px:w-[50%] bg-gray-50 dark:bg-slate-800 p-3 rounded-md"
        @dragover="onTodoDragOver"
        @drop="onTodoDrop($event, false)"
    >
      <h4
          class="text-xl font-semibold dark:text-[#abc2d3] text-gray-700 text-center mb-3"
      >
        Todo
      </h4>

      <form @submit="handleAddTodo" class="mb-4 w-full">
        <div class="flex">
          <input
              type="text"
              v-model="newTodoText"
              placeholder="Add todo"
              class="px-4 py-2 dark:bg-slate-800 dark:border-slate-600 dark:text-[#abc2d3] w-full outline-none border-l border-t border-b rounded-l-md focus:border-[#36af7b] border-gray-300 text-[0.9rem]"
          />
          <button
              type="submit"
              class="px-4 py-1 text-[0.9rem] bg-[#36af7b] text-white rounded-r-md"
          >
            Add
          </button>
        </div>
      </form>

      <ul class="space-y-2">
        <li
            v-for="todo in todos"
            :key="todo.id"
            draggable="true"
            @dragstart="onTodoDragStart($event, todo.id, false)"
            class="bg-white p-2 dark:bg-slate-700 dark:text-[#abc2d3] rounded-md cursor-move"
        >
          {{ todo.text }}
        </li>
      </ul>
    </div>

    <div
        class="w-full 1024px:w-[50%] min-h-[120px] dark:bg-slate-800 bg-gray-50 p-3 rounded-md"
        @dragover="onTodoDragOver"
        @drop="onTodoDrop($event, true)"
    >
      <h4
          class="text-xl font-semibold text-gray-700 dark:text-[#abc2d3] text-center mb-3"
      >
        Completed
      </h4>
      <ul class="space-y-2">
        <li
            v-for="todo in completedTodos"
            :key="todo.id"
            draggable="true"
            @dragstart="onTodoDragStart($event, todo.id, true)"
            class="bg-white p-2 dark:bg-slate-700 dark:text-[#abc2d3] rounded-md cursor-move"
        >
          {{ todo.text }}
        </li>
      </ul>
    </div>
  </div>
</template>