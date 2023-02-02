let page = document.body.id ;
console.log(page);
switch(page) {
    case 'home':
        nav_bar_toggle();
        slider_moving();
        count_Element();
        remove_meal_from_fav_meals();
        fetch_random_meal()
        open_meal_content ();
        close_meal_content();
        add_fav_meal();
        add_starred_meal();
        break;
    case 'favorite':
        nav_bar_toggle();
        break;
    case 'stared':
        nav_bar_toggle();
        break;
}
// slider
function slider_moving(){
    let slider = document.querySelector('.slider') as HTMLElement;
console.log(slider);
let isDown :boolean = false;
let startX : number;
let scrollLeft : number;
slider.addEventListener('mousedown', (e) : void => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft ;
})

slider.addEventListener('mouseleave', () => {
    isDown = false;
})

slider.addEventListener('mouseup', () => {
    isDown = false;
})
slider.addEventListener('mousemove', (e)  => {
    if (!isDown) {return;} //stop the fn from running
    e.preventDefault();
    const X : number = e.pageX - slider.offsetLeft;
    const walk = X - startX;
    slider.scrollLeft = scrollLeft - walk;
})
// mobile friendly 
slider.addEventListener('touchstart', (e) : void => {
    isDown = true;
    startX = e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft ;
})

slider.addEventListener('touchmove', (e)  => {
    if (!isDown) {return;} //stop the fn from running
    e.preventDefault();
    const X : number = e.touches[0].pageX - slider.offsetLeft;
    const walk = X - startX;
    slider.scrollLeft = scrollLeft - walk;
})

slider.addEventListener('touchend', () => {
    isDown = false;
})
}
// count the Element to make it kind of responsive grid
function count_Element(){
    setInterval(() =>{
        let slider = document.querySelector('.slider') as HTMLElement;
    let num_element = slider.children.length;
    console.log(num_element) ;
    slider.style.cssText = `grid-template-columns: repeat(${num_element}, 80px);`
    },1000)
    
}
// remove meal from fav container 
function remove_meal_from_fav_meals (){
    let slider = document.querySelector('.slider') as HTMLElement;
    let remove_btn = document.querySelectorAll('.remove-btn') ;
    
    remove_btn.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            let fav_meal = e.currentTarget.parentElement ;
            slider.removeChild(fav_meal);
            console.log('working');
        })
    } )
}
// nav bar 
function nav_bar_toggle() {
    let Btn_bars = document.querySelector('#menu-bars') as HTMLElement;
let nav_bar = document.querySelector('#nav-bar') as HTMLElement;
console.log(Btn_bars);
console.log(nav_bar);
Btn_bars.addEventListener('click', () => {
    nav_bar.classList.toggle('close')
})
}
// open the meal content 
function open_meal_content (){
    let meals = document.querySelectorAll('.meal-img') ;
    console.log(meals);
    meals.forEach((meal) => {
        meal.addEventListener("click", (e) => {
            let currentMeal = e.currentTarget.parentElement;
            console.log(currentMeal);
            currentMeal.classList.add("active-meal");
        })
    })
}
// and close it down 
function close_meal_content(){
    let remove_meal_btns = document.querySelectorAll(".remove-active-meal");
    console.log(remove_meal_btns);
    remove_meal_btns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            let content = e.currentTarget.parentElement.parentElement.parentElement;
            console.log(content);
            content.classList.remove("active-meal");
        })
    })
    
}
// add favorite meal to the container
function add_fav_meal(){
    let fav_btns = document.querySelectorAll('.favorite');
    console.log(fav_btns);
    fav_btns.forEach((btn) => {
        btn.addEventListener("click", () => {
            if (btn.classList.contains("fa-solid")){
                btn.classList.remove("fa-solid");
            }else {
                btn.classList.add("fa-solid");
            }
        })
    })
}
// add starred meal to the container
function add_starred_meal(){
    let fav_btns = document.querySelectorAll('.fa-star');
    console.log(fav_btns);
    fav_btns.forEach((btn) => {
        btn.addEventListener("click", () => {
            if (btn.classList.contains("fa-solid")){
                btn.classList.remove("fa-solid");
            }else {
                btn.classList.add("fa-solid");
            }
        })
    })
}
// // add the meal to the locale storage
// function add_meal_to_locale_storage(id:number,type:string) : [string]{
    
// }
// // and remove it
// function remove_meal_to_locale_storage(id:number,type:string) : [string]{
    
// }
// add meal to container depends on there container name 
function add_meal_to_container(container_name :string  ,meal : [string]) {
    let container = document.querySelector(`.${container_name}`);
    let div_meal = document.createElement("div");
    div_meal.classList.add("meal");
    div_meal.innerHTML = ` <img class="meal-img" src="${meal.strMealThumb}" alt="">
    <i class="favorite fa-regular fa-heart fa-2x "></i>
    <div class="time">
        <i class="fa-regular fa-clock fa-lg"></i>
        <span>20 min</span>
    </div>
    <div class="container-meal">
        <div class="meal-content">
            <i class="remove-active-meal fa-sharp fa-solid fa-circle-xmark fa-2x"></i>
            <img src="${meal.strMealThumb}" alt="">
            <i class="fa-regular fa-star fa-2x"></i>
        </div>
    </div>
    `;
    container.appendChild(div_meal);
} 
async function fetch_random_meal(){
    const random_meal = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    const res_random_meal = await random_meal.json();
    console.log(res_random_meal);
    add_meal_to_container("meals-container",res_random_meal.meals[0]);
}












