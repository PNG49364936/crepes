const choice = ["🥚","🥛","🧈","🍷"]

const ingredient1 = document.getElementById("ingredient-1");
const ingredient2 = document.getElementById("ingredient-2");
const ingredient3 = document.getElementById("ingredient-3");
const resultArea = document.getElementById("result-area");
const playBtn = document.getElementById("play-btn");

console.log(ingredient1,ingredient2,ingredient3)

const generateChoice = () => {
    let r = Math.floor(Math.random() * 4);
    console.log (r)
    return choice[r]
  };

const insertHtml = (choice1, choice2, choice3, result) =>{
 ingredient1.innerHTML = choice1;
 ingredient2.innerHTML = choice2;
 ingredient3.innerHTML = choice3;
 resultArea.innerHTML = result;
};

const decideWiner = (a, b, c) => {
    const ingredients = ["🥚", "🥛", "🧈"];
    const uniqueIngredients = new Set([a, b, c]);

    // Check if all three choices are unique and are from the ingredients list
    if (uniqueIngredients.size === 3 && [a, b, c].every(item => ingredients.includes(item))) {
        return "ok crepes";
    } else {
        return "perdu";
    }
}


const play  = () =>{
let choice1 = generateChoice();
let choice2 = generateChoice();
let choice3 = generateChoice();
let result = decideWiner(choice1, choice2, choice3);

insertHtml(choice1, choice2, choice3 ,result);
};






playBtn.addEventListener('click', play);