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
        <div class="container d-flex flex-sm-column flex-md-row  justify-content-around mt-3 flex-lg-row">
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


    // let commonDiv=document.createElement('div');
    // commonDiv.className="bg-success container d-flex flex-row justify-content-around  ";
    
    // let imgDiv=document.createElement('div');
    // imgDiv.className="d-flex flex-column bg-warning"
    // imgDiv.style.width="40%"
    // const imageElement = document.createElement("img");
    // imageElement.style.width="100%"
    // imageElement.style.height="340px"
    // imageElement.src = `${item.strMealThumb}`
    
    // let p=document.createElement('p')
    // p.innerHTML=`<b>Categories</b>:${item.strCategory}<br/><b>Area</b>:${item.strArea}<br/><b>Tags</b>:${item.strTags}<br/><br/><h3>Ingridients</h3>`
    
    // let ul=document.createElement('ul')
    // let li=document.createElement('li')
    // li.innerHTML="jdud"
    // ul.appendChild(li)
    // imgDiv.append(imageElement,p,ul)
    
    
    
    
    
 


    // let dataDiv=document.createElement('div')
    // dataDiv.className="bg-primary"
    // dataDiv.innerHTML=`<h2>${item.strMeal}</h2><br/><br/><p>${item.strInstructions}</p>`
    // dataDiv.style.width="50%"
   


    // let videoDiv=document.createElement('div')
    // videoDiv.className="container"
    // let videoTag=document.createElement('iframe')
    // videoTag.src=`${item.strYoutube}`
    // videoTag.style.width="400px"
    // videoTag.style.height="400px"
    // let h3=document.createElement('h3')
    // h3.innerHTML="Video Recepie"

    // videoDiv.appendChild(videoTag)



    // commonDiv.append(imgDiv,dataDiv)
    // mainDiv.append(commonDiv,h3,videoDiv);

}

async function getData(){
    let res= await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    let data=await res.json()
    createDiv(data.meals[0])
    console.log(data.meals[0])
}

// const btn = document.getElementById('btn');
// const mainDiv = document.getElementById('mainDiv');

// btn.addEventListener('click', () => {
// 	fetch('https://www.themealdb.com/api/json/v1/1/random.php')
// 		.then(res => res.json())
// 		.then(res => {
// 			createMeal(res.meals[0]);
// 		})
// 		.catch(e => {
// 			console.warn(e);
// 		});
// });


// const createMeal = meal => {
// 	const ingredients = [];

// 	// Get all ingredients from the object. Up to 20
// 	for (let i = 1; i <= 20; i++) {
// 		if (meal[`strIngredient${i}`]) {
// 			ingredients.push(
// 				`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
// 			);
// 		} else {
// 			// Stop if there are no more ingredients
// 			break;
// 		}
// 	}

// 	const newInnerHTML = `
// 		<div class="row">
// 			<div class="columns five">
// 				<img src="${meal.strMealThumb}" alt="Meal Image">
// 				${
// 					meal.strCategory
// 						? `<p><strong>Category:</strong> ${meal.strCategory}</p>`
// 						: ''
// 				}
// 				${meal.strArea ? `<p><strong>Area:</strong> ${meal.strArea}</p>` : ''}
// 				${
// 					meal.strTags
// 						? `<p><strong>Tags:</strong> ${meal.strTags
// 								.split(',')
// 								.join(', ')}</p>`
// 						: ''
// 				}
// 				<h5>Ingredients:</h5>
// 				<ul>
// 					${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
// 				</ul>
// 			</div>
// 			<div class="columns seven">
// 				<h4>${meal.strMeal}</h4>
// 				<p>${meal.strInstructions}</p>
// 			</div>
// 		</div>
// 		${
// 			meal.strYoutube
// 				? `
// 		<div class="row">
// 			<h5>Video Recipe</h5>
// 			<div class="videoWrapper">
// 				<iframe width="420" height="315"
// 				src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}">
// 				</iframe>
// 			</div>
// 		</div>`
// 				: ''
// 		}
// 	`;

// 	mainDiv.innerHTML = newInnerHTML;
// };