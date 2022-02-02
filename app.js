document.addEventListener('DOMContentLoaded', () => {

	const form = document.querySelector('form')
	const input = form.querySelector('.form__input input');
	const todoList = document.querySelector('.todo__list');
	const checkbox = document.querySelectorAll(".chebox__input")
	const todoArr = []

	class Todo {
		constructor(value) {
			this.value = value
		}

		addTodo() {
			if (this.value) {
				todoArr.push(this.value);
			}
		}

		createTodo() {
			todoList.innerHTML = ''
			todoArr.forEach((item, index) => {
				todoList.innerHTML += `<li class="todo__item"><label class="checkbox">
				<input data-error="Ошибка" class="checkbox__input" type="checkbox" value="1" name="form[]"><span class="checkbox__text"></span>
			</label><span class="item__text">${index + 1} ${item}</span><span class="todo__delete">x</span></li>`
			})
			todoList.childNodes.forEach((el, index) => {
				el.addEventListener('click', (e) => {
					if (e.target.classList.contains('todo__delete')) {
						el.remove()
						todoArr.splice(index, 1)
						this.createTodo()
					}
					if (e.target.classList.contains('checkbox__input')) {
							el.classList.toggle('checked')
					}
				})
			})
		}
	}

	form.addEventListener('submit', (e) => {
		e.preventDefault()
		const newTodo = new Todo(input.value)
		newTodo.addTodo()
		newTodo.createTodo()
		e.target.reset()
	})



})






