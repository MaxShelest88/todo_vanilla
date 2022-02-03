document.addEventListener('DOMContentLoaded', () => {

	const form = document.querySelector('form')
	const input = form.querySelector('.form__input input');
	const todoList = document.querySelector('.todo__list');
	const clearBtn = document.querySelector('.todo__clear')
	const todoArr = []
	const toZero = (num) => (num < 10) ? `0${num}` : num
	let newTodo;

	class Todo {
		constructor(value) {
			this.value = value
			this.checked = false
		}

		addTodo() {
			if (this.value) {
				todoArr.push(this);
			}
		}

		createTodo() {
			todoList.innerHTML = ''
			todoArr.forEach((item, index) => {
				if (!item.checked) {
					todoList.innerHTML += `<li class="todo__item"><label class="checkbox">
				<input class="checkbox__input" type="checkbox" value="1" name="form[]"><span class="checkbox__text"></span>
			</label><span class="todo__text">${toZero(index + 1)} ${item.value}</span><span class="todo__delete">x</span></li>`
				} else {
					todoList.innerHTML += `<li class="todo__item checked"><label class="checkbox">
				<input class="checkbox__input" type="checkbox" value="1" name="form[]" checked><span class="checkbox__text"></span>
			</label><span class="todo__text">${toZero(index + 1)} ${item.value}</span><span class="todo__delete">x</span></li>`
				}
			})
			const todoListItems = [...todoList.children]
			todoListItems.forEach((el, index) => {
				el.addEventListener('click', (e) => {
					let target = e.target
					if (target.classList.contains('todo__delete')) {
						this.deleteTodo(el, index, todoArr)
					}
					this.checkTodo(e, el, index, todoArr)
				})
			})
		}

		deleteTodo(el, index, arr) {
			el.remove()
			arr.splice(index, 1)
			this.createTodo()
		}

		checkTodo(e, el, index, arr) {
			if (e.target.classList.contains('checkbox__input') && !el.classList.contains('checked')) {
				el.classList.add('checked')
				this.checked = true
				arr[index] = this
			} else if (e.target.classList.contains('checkbox__input') && el.classList.contains('checked')) {
				el.classList.remove('checked')
				this.checked = false
				arr[index] = this
			}
		}
	}

	form.addEventListener('submit', (e) => {
		e.preventDefault()
		newTodo = new Todo(input.value)
		newTodo.addTodo()
		newTodo.createTodo()
		e.target.reset()
	})

	clearBtn.addEventListener('click', () => {
		todoArr.length = 0
		newTodo.createTodo()
	})

})






