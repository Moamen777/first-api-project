let xmlHttp = new XMLHttpRequest();
let itemList = ``;
let itemView = document.getElementById('item-view');
let id = window.location.search.substring(6,);
// console.log(id);



async function getitem(){
  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  let data = await response.json();
  // console.log(data.meals);


  for (let index = 0; index < data.meals.length; index++) {
    itemList += `<div class="card rounded-4 shadow-lg" style="width: 30rem;">
    <div class="card rounded-4 shadow-lg" style="width: 30rem;">
      <img src="${data.meals[index].strMealThumb
      }" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${data.meals[index].strMeal}</h5>
        <h6>Ingredients</h6>
        <ul>
          <li>${data.meals[index].strIngredient1}</li>
          <li>${data.meals[index].strIngredient2}</li>
          <li>${data.meals[index].strIngredient3}</li>
          <li>${data.meals[index].strIngredient4}</li>
          <li>${data.meals[index].strIngredient5}</li>
          <li>${data.meals[index].strIngredient6}</li>
          <li>${data.meals[index].strIngredient7}</li>
          <li>${data.meals[index].strIngredient8}</li>
          <li>${data.meals[index].strIngredient9}</li>
        </ul>
        <h6>Measurements</h6>
        <ul>
          <li>${data.meals[index].strMeasure1}</li>
          <li>${data.meals[index].strMeasure2}</li>
          <li>${data.meals[index].strMeasure3}</li>
          <li>${data.meals[index].strMeasure4}</li>
          <li>${data.meals[index].strMeasure5}</li>
          <li>${data.meals[index].strMeasure6}</li>
          <li>${data.meals[index].strMeasure7}</li>
          <li>${data.meals[index].strMeasure8}</li>
          <li>${data.meals[index].strMeasure9}</li>
        </ul>
        <p class="card-text lead p-3 m-2">${data.meals[index].strInstructions
        }.</p>
      </div>
    </div>`
    
}

itemView.innerHTML = itemList;

};

getitem();