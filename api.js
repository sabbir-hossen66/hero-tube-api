const heroTube = document.getElementById('heron-button');
const cardContainer = document.getElementById('card-container')
let selectedCategory = 1000;

const allCategeory = async () => {
  const res = await fetch(`https://openapi.programming-hero.com/api/videos/categories`)
  const data = await res.json()
  const showData = data.data
  displayCategory(showData)
  // console.log(showData);
}
allCategeory()

const displayCategory = (displayData) => {

  // console.log(displayData);
  displayData.forEach(cards => {
    const newBtn = document.createElement('button')
    newBtn.innerText = cards.category
    newBtn.className = 'btn btn-ghost-100 text-xl'
    newBtn.addEventListener('click', () => fetchDataCategories(cards.category_id))
    heroTube.appendChild(newBtn)
  });
}

const fetchDataCategories = async (categoryId) => {
  // console.log(categoryId);
  selectedCategory = categoryId
  // const oneCategory = async () => {
  const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
  const data = await res.json()

  // console.log(showData);
  const showData = data.data
  oneDataCetegory(showData)

}

fetchDataCategories(selectedCategory)

const oneDataCetegory = (displayVideo) => {
  console.log(displayVideo);

  cardContainer.innerHTML = ''
  let variFied = ''
  displayVideo.forEach(video => {
    if (video.authors[0].verified) {
      variFied = `varified`
    }
    console.log(video);
    const videoshowDisplay = document.createElement('div')
    videoshowDisplay.innerHTML = `
       <div class="card card-compact w-96 bg-base-100 shadow-xl">
        <img src="${video.thumbnail}" alt="Shoes" />
        <div class="card-body">
          <h2 class="card-title">${video.title}</h2>
          <p>${video.others.views}</p>
          ${variFied}
          <div class="card-actions justify-center">
            <button class="btn btn-primary">See Details</button>
          </div>
        </div>
      </div>
    `
    // videoshowDisplay.className = 'card card-compact w-96 bg-base-100 shadow-xl '
    cardContainer.appendChild(videoshowDisplay)
  })
}