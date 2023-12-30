let xmlHttp = new XMLHttpRequest();
let itemsList = ``;
let itemsView = document.getElementById('items-view');
let item = window.location.search.substring(6,);
// console.log(item);






async function getItems(){
  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${item}`);
  let data = await response.json();
  // console.log(data.meals);


  for (let index = 0; index < data.meals.length; index++) {
    itemsList += `<div class="card rounded-4 shadow-lg col-4 g-4" style="width: 18rem;">
    <img src="${data.meals[index].strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body"><a href="/item.html?item=${data.meals[index].idMeal}" class="text-decoration-none text-dark">
    <h5 class="card-title">${data.meals[index].strMeal}</h5></a>
      
      
    </div>
  </div>`
    
}

itemsView.innerHTML = itemsList;
};

getItems();