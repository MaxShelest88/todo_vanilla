const form = document.querySelector('form')
const input = form.querySelector('.form__input input');
const todoList = document.querySelector('.todo__list');
const todoArr = []

// showTodo()

function addTodo() {
	let value = input.value;
	if (value) {
		todoArr.push(value);
	}
}

form.addEventListener('submit', (e) => {
	e.preventDefault()
	addTodo()
	showTodo()
	e.target.reset()
})

function showTodo() {
	todoList.innerHTML = ''
	todoArr.forEach((item, index) => {
		todoList.innerHTML += `<li class="todo__item"><span>${index + 1} ${item}</span><span class="todo__delete">x</span></li>`
	})
	todoList.childNodes.forEach((el, index) => {
		el.addEventListener('click', (e) => {
			if (e.target.classList.contains('todo__delete')) {
				el.remove()
				todoArr.splice(index, 1)
				showTodo()
			}
		})
	})
}

class Todo {
	constructor(value) {
		this.value = value
	}

	createTodo() {
		if (this.value) {
			todoArr.push(this.value);
		}
		todoList.innerHTML = ''
		todoArr.forEach((item, index) => {
			todoList.innerHTML += `<li class="todo__item"><span>${index + 1} ${item}</span><span class="todo__delete">x</span></li>`
		})
		deleteTodo();
	}

	static deleteTodo() {
		todoList.childNodes.forEach((el, index) => {
			el.addEventListener('click', (e) => {
				if (e.target.classList.contains('todo__delete')) {
					el.remove()
					todoArr.splice(index, 1)
					showTodo()
				}
			})
		})
	}
	
}






