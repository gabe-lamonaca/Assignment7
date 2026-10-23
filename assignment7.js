

function multTable(){
let x = window.prompt("Enter the number you would like to make a table for: ");
let a = window.prompt("Enter the number you would like the table to start at: ");
let b = window.prompt("Enter the number you would like the table to end at: ");
for(let i = a; i <= b; i++){
    let tag = document.createElement("p")
    tag.innerHTML = `${x} * ${i} = ${x*i}`
    document.getElementById("div").appendChild(tag)
}
}


const initialColors = [
  '#FF5733', '#33FF57', '#3357FF', '#FF33F6', '#F6FF33',
  '#33FFF6', '#FF8C33', '#8C33FF', '#FF338C', '#33FF8C'
];

function createRandomButton(){
    const container = document.getElementById('buttonContainer')
    for (let i = 0; i<10; i ++){
    const btn = document.createElement('button');
    btn.style.backgroundColor = initialColors[i];
    btn.style.width = '50px';
    btn.style.height = '50px';
    btn.id = `btn-${i}`;
    container.appendChild(btn);
    }
}


function randomizeColors(){
    const colors = [
    '#FF5733', '#33FF57', '#3357FF', '#FF33F6', '#F6FF33',
    '#33FFF6', '#FF8C33', '#8C33FF', '#FF338C', '#33FF8C',
    '#FFD700', '#00CED1', '#FF69B4', '#7B68EE', '#FFA07A'
  ];
  const buttons = document.querySelectorAll('buttonContainer button');
  buttons.forEach(btn =>{
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    btn.style.backgroundColor = randomColor;
  })
}
createRandomButton();
document.getElementById('randomize-btn').addEventListener('click', randomizeColors);