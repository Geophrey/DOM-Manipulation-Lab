// Part 1
// Menu data structure
const menuLinks = [
  { text: 'about', href: '/about' },
  { text: 'catalog', href: '/catalog' },
  { text: 'orders', href: '/orders' },
  { text: 'account', href: '/account' },
];

// const mainEl = document.querySelector('main')

// console.log(mainEl)
// const mainEl = document.createElement("main");
// mainEl.style.backgroundColor = "#4a4e4d";
// document.body.appendChild(mainEl);
// const tag = document.createElement('h1')
// mainEl.appendChild(tag)
// mainEl.innerHTML = 'DOM Manipulation'


// console.log(document.qu)



const mainEl = document.querySelector('main');
mainEl.style.backgroundColor = 'var(--main-bg)';
const heading = document.createElement("h1");
const headingtitle = document.createTextNode("DOM Manipulation");
heading.appendChild(headingtitle);
// heading.style.color = 'var(--top-menu-bg)';
mainEl.appendChild(heading);
mainEl.classList.add('flex-ctr')

document.body.appendChild(mainEl);

// Part 2: Creating a Menu Bar

const navBar = document.getElementById('top-menu')
navBar.style.height = '100%'
navBar.style.backgroundColor = 'var(--top-menu-bg)';
navBar.classList.add('flex-around')

console.log(navBar);

// Part 3: Adding Menu Buttons

let a = document.createElement("a")

for(let menuLink of menuLinks) {
    const link=document.createElement("a");
    link.textContent=menuLink["text"]; 
    link.href=menuLink["href"]; 
    navBar.appendChild(link);
}

