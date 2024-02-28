const elList = document.querySelector('.films')
const Input = document.querySelector('.form__input')
const ButtonNext = document.querySelector('.next')

function RenderFilms(array, node) {
  node.innerHTML = null

  array.forEach(element => {
    const newLi = document.createElement('li')

    newLi.textContent = element.Title

    node.appendChild(newLi)


  });
}

let API = '1cab9c74'
let FilmsHulk = 'hulk'
let page = 1

async function films() {
  
  try {
    const res = await fetch('https://www.omdbapi.com/?i=tt3896198&apikey=' + API + '&s=' + FilmsHulk + '&page=' + page)
    const data = await res.json();
  
    if (data.Response === 'True') {
      RenderFilms(data.Search, elList)
    }
  } catch {
    elList.textContent = "Error"
  }

  
}

films()

Input.addEventListener('input', () => {

  const searchValue = Input.value.trim()

    FilmsHulk = searchValue
  
  films()
})


ButtonNext.addEventListener('click', () => {
  page++

  films()
})


