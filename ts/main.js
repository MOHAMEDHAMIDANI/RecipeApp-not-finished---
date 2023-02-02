var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var page = document.body.id;
console.log(page);
switch (page) {
    case 'home':
        nav_bar_toggle();
        slider_moving();
        count_Element();
        remove_meal_from_fav_meals();
        fetch_random_meal();
        open_meal_content();
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
function slider_moving() {
    var slider = document.querySelector('.slider');
    console.log(slider);
    var isDown = false;
    var startX;
    var scrollLeft;
    slider.addEventListener('mousedown', function (e) {
        isDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', function () {
        isDown = false;
    });
    slider.addEventListener('mouseup', function () {
        isDown = false;
    });
    slider.addEventListener('mousemove', function (e) {
        if (!isDown) {
            return;
        } //stop the fn from running
        e.preventDefault();
        var X = e.pageX - slider.offsetLeft;
        var walk = X - startX;
        slider.scrollLeft = scrollLeft - walk;
    });
    // mobile friendly 
    slider.addEventListener('touchstart', function (e) {
        isDown = true;
        startX = e.touches[0].pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('touchmove', function (e) {
        if (!isDown) {
            return;
        } //stop the fn from running
        e.preventDefault();
        var X = e.touches[0].pageX - slider.offsetLeft;
        var walk = X - startX;
        slider.scrollLeft = scrollLeft - walk;
    });
    slider.addEventListener('touchend', function () {
        isDown = false;
    });
}
// count the Element to make it kind of responsive grid
function count_Element() {
    setInterval(function () {
        var slider = document.querySelector('.slider');
        var num_element = slider.children.length;
        console.log(num_element);
        slider.style.cssText = "grid-template-columns: repeat(".concat(num_element, ", 80px);");
    }, 1000);
}
// remove meal from fav container 
function remove_meal_from_fav_meals() {
    var slider = document.querySelector('.slider');
    var remove_btn = document.querySelectorAll('.remove-btn');
    remove_btn.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            var fav_meal = e.currentTarget.parentElement;
            slider.removeChild(fav_meal);
            console.log('working');
        });
    });
}
// nav bar 
function nav_bar_toggle() {
    var Btn_bars = document.querySelector('#menu-bars');
    var nav_bar = document.querySelector('#nav-bar');
    console.log(Btn_bars);
    console.log(nav_bar);
    Btn_bars.addEventListener('click', function () {
        nav_bar.classList.toggle('close');
    });
}
// open the meal content 
function open_meal_content() {
    var meals = document.querySelectorAll('.meal-img');
    console.log(meals);
    meals.forEach(function (meal) {
        meal.addEventListener("click", function (e) {
            var currentMeal = e.currentTarget.parentElement;
            console.log(currentMeal);
            currentMeal.classList.add("active-meal");
        });
    });
}
// and close it down 
function close_meal_content() {
    var remove_meal_btns = document.querySelectorAll(".remove-active-meal");
    console.log(remove_meal_btns);
    remove_meal_btns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            var content = e.currentTarget.parentElement.parentElement.parentElement;
            console.log(content);
            content.classList.remove("active-meal");
        });
    });
}
// add favorite meal to the container
function add_fav_meal() {
    var fav_btns = document.querySelectorAll('.favorite');
    console.log(fav_btns);
    fav_btns.forEach(function (btn) {
        btn.addEventListener("click", function () {
            if (btn.classList.contains("fa-solid")) {
                btn.classList.remove("fa-solid");
            }
            else {
                btn.classList.add("fa-solid");
            }
        });
    });
}
// add starred meal to the container
function add_starred_meal() {
    var fav_btns = document.querySelectorAll('.fa-star');
    console.log(fav_btns);
    fav_btns.forEach(function (btn) {
        btn.addEventListener("click", function () {
            if (btn.classList.contains("fa-solid")) {
                btn.classList.remove("fa-solid");
            }
            else {
                btn.classList.add("fa-solid");
            }
        });
    });
}
// // add the meal to the locale storage
// function add_meal_to_locale_storage(id:number,type:string) : [string]{
// }
// // and remove it
// function remove_meal_to_locale_storage(id:number,type:string) : [string]{
// }
// add meal to container depends on there container name 
function add_meal_to_container(container_name, meal) {
    var container = document.querySelector(".".concat(container_name));
    var div_meal = document.createElement("div");
    div_meal.classList.add("meal");
    div_meal.innerHTML = " <img class=\"meal-img\" src=\"".concat(meal.strMealThumb, "\" alt=\"\">\n    <i class=\"favorite fa-regular fa-heart fa-2x \"></i>\n    <div class=\"time\">\n        <i class=\"fa-regular fa-clock fa-lg\"></i>\n        <span>20 min</span>\n    </div>\n    <div class=\"container-meal\">\n        <div class=\"meal-content\">\n            <i class=\"remove-active-meal fa-sharp fa-solid fa-circle-xmark fa-2x\"></i>\n            <img src=\"").concat(meal.strMealThumb, "\" alt=\"\">\n            <i class=\"fa-regular fa-star fa-2x\"></i>\n        </div>\n    </div>\n    ");
    container.appendChild(div_meal);
}
function fetch_random_meal() {
    return __awaiter(this, void 0, void 0, function () {
        var random_meal, res_random_meal;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://www.themealdb.com/api/json/v1/1/random.php")];
                case 1:
                    random_meal = _a.sent();
                    return [4 /*yield*/, random_meal.json()];
                case 2:
                    res_random_meal = _a.sent();
                    console.log(res_random_meal);
                    add_meal_to_container("meals-container", res_random_meal.meals[0]);
                    return [2 /*return*/];
            }
        });
    });
}
