const formInit = () => {
	const scriptURL = 'https://script.google.com/macros/s/AKfycbxeudUhSn3AllxUXtdxgJswN06wg0aBC8v1gZcoLHScyzK01WWsv5nc6f1ESQJMc4_6/exec'
  const form = document.forms['form']

  form.addEventListener('submit', e => {
    e.preventDefault()
		document.querySelector('#form-submit').innerText = 'Submitting...'
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => formSuccessAction())
      .catch(error => console.error('Error!', error.message))
  })

	document.querySelector('#form-reset').addEventListener('click', (e) => {
		formSuccessAction()
	})
}

const formSuccessAction = () => {
	document.querySelector('#form-submit').innerText = 'Submit'
	const successCont = document.querySelector('#form-success-cont')
	successCont.classList.toggle('display-none')
}

export { formInit }