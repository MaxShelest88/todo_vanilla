document.addEventListener('DOMContentLoaded', () => {

	const form = document.querySelector('form')
	const input = form.querySelector('.form__input input');
	const todoList = document.querySelector('.todo__list');
	const todoArr = []
	const toZero = (num) => (num < 10) ? `0${num}` : num

	class Todo {
		constructor(value) {
			this.value = value
			this.checked = false
		}

		addTodo() {
			if (this.value) {
				todoArr.push(this);
			}
			console.log(todoArr);
		}

		createTodo() {
			todoList.innerHTML = ''
			todoArr.forEach((item, index) => {
				if (!item.checked) {
					todoList.innerHTML += `<li class="todo__item"><label class="checkbox">
				<input class="checkbox__input" type="checkbox" value="1" name="form[]"><span class="checkbox__text"></span>
			</label><span class="item__text">${toZero(index + 1)} ${item.value}</span><span class="todo__delete">x</span></li>`
				} else {
					todoList.innerHTML += `<li class="todo__item checked"><label class="checkbox">
				<input class="checkbox__input" type="checkbox" value="1" name="form[]" checked><span class="checkbox__text"></span>
			</label><span class="item__text">${toZero(index + 1)} ${item.value}</span><span class="todo__delete">x</span></li>`
				}

			})
			todoList.childNodes.forEach((el, index) => {
				el.addEventListener('click', (e) => {
					if (e.target.classList.contains('todo__delete')) {
						el.remove()
						todoArr.splice(index, 1)
						this.checked = false
						this.createTodo()
					}
					if (e.target.classList.contains('checkbox__input') && !el.classList.contains('checked')) {
						el.classList.add('checked')
						this.checked = true
						todoArr[index] = this
					} else if (e.target.classList.contains('checkbox__input') && el.classList.contains('checked')) {
						el.classList.remove('checked')
						this.checked = false
						todoArr[index] = this
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






