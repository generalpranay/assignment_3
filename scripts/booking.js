/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
var cost_per_day=35;
var number_per_day=0;


let monday = document.getElementById("monday");
let tuesday = document.getElementById("tuesday");
let wednesday = document.getElementById("wednesday");
let thursday = document.getElementById("thursday");
let friday = document.getElementById("friday");

let half_day = document.getElementById("half");
let full_day = document.getElementById("full");
let clear_btn = document.getElementById("clear-button");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
function mon(){
    monday.classList.add("clicked");
    number_per_day+=1;
    calculate();
}
monday.addEventListener("click",mon);
function tue(){
    tuesday.classList.add("clicked");
    number_per_day+=1;
    calculate();
}
tuesday.addEventListener("click",tue);
function wed(){
    wednesday.classList.add("clicked");
    number_per_day+=1;
    calculate();
}
wednesday.addEventListener("click",wed);
function thurs(){
    thursday.classList.add("clicked");
    number_per_day+=1;
    calculate();
}
thursday.addEventListener("click",thurs);
function fri(){
    friday.classList.add("clicked");
    number_per_day+=1;
    calculate();
}
friday.addEventListener("click",fri);




/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
function clear_button() {
    monday.classList.remove("clicked");
    tuesday.classList.remove("clicked");
    thursday.classList.remove("clicked");
    wednesday.classList.remove("clicked");
    friday.classList.remove("clicked");

    cost_per_day = 0;
    number_per_day = 0;

    calculate();
}
clear_btn.addEventListener("click", clear_button);


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
function button_select_half(){
    cost_per_day=20;
    half_day.classList.add("clicked");
    full_day.classList.remove("clicked");
    calculate();
}
half_day.addEventListener("click",button_select_half)


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
function button_select_full(){
    cost_per_day=35;
    full_day.classList.add("clicked");
    half_day.classList.remove("clicked");
    calculate();
}
full_day.addEventListener("click",button_select_full)

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate(){
    let calculated_cost=cost_per_day * number_per_day;
    document.getElementById("calculated-cost").innerHTML=calculated_cost;
    
}
