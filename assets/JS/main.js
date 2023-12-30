let xmlHttp = new XMLHttpRequest();
let categoriesList = ``;
let categoriesView = document.getElementById('Category-view');

async function getCategory(){
    let response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    let data = await response.json();
    // console.log(data.categories);
    
    for (let index = 0; index < data.categories.length; index++) {
        categoriesList += `<div class="card col-4 g-3 " style="width: 18rem;" id="Category-view">
        <img src="${data.categories[index].strCategoryThumb}" class="card-img-top" alt="Desserts">
        <div class="card-body"><a href="/items.html?item=${data.categories[index].strCategory}" class="text-decoration-none link-dark">
          <h5 class="card-title">${data.categories[index].strCategory}</h5>
          
        </a>
        </div>
      </div>`
        
    }

    categoriesView.innerHTML = categoriesList;
};
getCategory();