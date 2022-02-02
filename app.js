const form = document.querySelector('form')
const input = form.querySelector('.form__input input');
const btn = form.querySelector('.form__btn');
const todoList = document.querySelector('.todo__list');
const todoArr = []

showTodo()

function addTodo() {
	let value = input.value;
	if (value) {
		todoArr.push(value);
	}
}

btn.addEventListener('click', (e) => {
	e.preventDefault()
	addTodo()
	showTodo()
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







