const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener('change', save)

function add() {
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert('Dia ja incluso')
    return
  }
  alert('Adicionado com sucesso')
  nlwSetup.addDay(today)
}

// Esta funcao e' para adcionar um novo registro de habitos do dia ao clicar no botao

function save() {
  localStorage.setItem('qualquernome', JSON.stringify(nlwSetup.data))
}

// Esta funcao salva todas alteracoes feitas no formulario no local storage no navegador

const data = JSON.parse(localStorage.getItem('qualquernome')) || {}
nlwSetup.setData(data)
nlwSetup.load()
