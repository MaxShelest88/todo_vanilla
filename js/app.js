document.addEventListener('DOMContentLoaded', () => {
	'use strict'
	const form = document.querySelector('form')
	const input = form.querySelector('.form__input input');
	const todoList = document.querySelector('.todo__list');
	const clearBtn = document.querySelector('.todo__btnclear')
	const todoArr = []
	const toZero = (num) => (num < 10) ? `0${num}` : num
	let newTodo;

	class Todo {
		constructor(value) {
			this.value = value
			this.checked = false
			this.addTodo()
		}

		addTodo() {
			if (this.value) {
				todoArr.push(this);
			}
			this.createTodo()
		}

		createTodo() {
			todoList.innerHTML = ''
			todoArr.forEach((item, index) => {
				if (!item.checked) {
					todoList.innerHTML += `<li class="todo__item"><label class="checkbox">
				<input class="checkbox__input" type="checkbox" value="1" name="form[]"><span class="checkbox__text"></span>
			</label><div>${toZero(index + 1)}</div><div class="todo__text">${item.value}</div><div class="todo__delete"></div></li>`
				} else {
					todoList.innerHTML += `<li class="todo__item checked"><label class="checkbox">
				<input class="checkbox__input" type="checkbox" value="1" name="form[]" checked><span class="checkbox__text"></span>
			</label><div>${toZero(index + 1)}</div><div class="todo__text">${item.value}</div><div class="todo__delete"></div></li>`
				}
			})

			const todoListItems = [...todoList.children]

			if (todoListItems.length > 0) {
				todoListItems.forEach((el, index) => {
					el.addEventListener('click', (e) => {
						let target = e.target
						if (target.classList.contains('todo__delete')) {
							this.deleteTodo(index, todoArr)
						}
						this.checkTodo(e, el, index, todoArr)
						this.editTodo(el, index, todoArr)
					})
				})
			}
		}

		deleteTodo(index, arr) {
			arr.splice(index, 1)
			this.createTodo()
		}

		editTodo(el, index, arr) {
			el.addEventListener('dblclick', (e) => {
				let target = e.target;
				if (target.classList.contains('todo__text')) {
					target.contentEditable = true;
				}
				let oldValue;
				target.onfocus = () => {
					oldValue = target.innerHTML
				}
				target.onblur = () => {
					const newValue = target.innerHTML
					if (oldValue != newValue) {
						arr[index].value = newValue;
					}
					target.contentEditable = false;
				}
			})
		}

		checkTodo(e, el, index, arr) {
			if (e.target.classList.contains('checkbox__input') && !el.classList.contains('checked')) {
				el.classList.add('checked')
				arr[index].checked = true;

			} else if (e.target.classList.contains('checkbox__input') && el.classList.contains('checked')) {
				el.classList.remove('checked')
				arr[index].checked = false;
			}
		}
	}

	form.addEventListener('submit', (e) => {
		e.preventDefault()
		newTodo = new Todo(input.value)
		e.target.reset()
	})

	clearBtn.addEventListener('click', () => {
		todoArr.length = 0
		newTodo.createTodo()
	})

})






