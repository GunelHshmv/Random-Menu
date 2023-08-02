const btn=document.querySelector('#btn');
const buttonDiv=document.querySelector('#buttonDiv');
const mainDiv=document.querySelector('#mainDiv');


btn.addEventListener('click',()=>{
    if(buttonDiv.classList.contains('justify-content-center')){
        buttonDiv.classList.remove('justify-content-center')
        buttonDiv.style.height="24vh"
    }
    getData()
})
function createDiv(item){
    let ingredients=[];
    for (let i = 1; i <21; i++) {
        if(`${item[`strIngredient${i}`]}`){
            ingredients.push(
        `${item[`strIngredient${i}`]} - ${item[`strMeasure${i}`]}`) 
        }
    }
    console.log(ingredients)
    const newInnerHTML=`
    <div class="container-fluid d-flex flex-column ">
        <div id="buttonDiv" class=" d-flex flex-column align-items-center mt-5"  >
            <h1><b>Feeling hungry?</b></h1>
            <p>Get a random meal by clicking below</p>
            <button type="button" id="btn" class="bg-primary ">GET MEAL</button>
        </div>
        <div class="container d-flex flex-sm-column flex-md-row align-items-center  justify-content-around mt-3 flex-lg-row">
            <div id="img" class="d-flex flex-column " style="width: 40%;">
                <img src="${item.strMealThumb}" alt="" style="width:100%; height: 340px;"><br/>
                <p><b>Category</b>:${item.strCategory}<br/><b>Area</b>:${item.strArea} <br/><b>Tags</b>:${item.strTags}</p>
                <br/>
                <h4>Ingridients</h4>
                <ul>
					${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
				</ul>
            </div>
            <div id="dataDiv" class="" style="width: 50%;"><h2>${item.strMeal}</h2><br/><p>${item.strInstructions}</p></div>
        </div>
        <div class="container" style="width: 100%;">
        <h4><b>Video Recepie</b></h4>
            <div class="container ">
				<iframe width="100%" height="400"
				src="https://www.youtube.com/embed/${item.strYoutube.slice(-11)}">
				</iframe>
			</div>
        </div>
    </div>
    `
mainDiv.innerHTML=newInnerHTML
}

async function getData(){
    let res= await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    let data=await res.json()
    createDiv(data.meals[0])
    console.log(data.meals[0])
}
