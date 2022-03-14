const dishes = [
  {
    name: "Eggplant Parmesan",
    isVegetarian: true
  },
  {
    name: 'Spaghetti & Meatballs',
    isVegetarian: false
  }, {
    name: "Stuffed Shells",
    isVegetarian: true
  },
  {
    name: "Tiramisu",
    isVegetarian: true
  },
]
// const guests = dishes.filter(dish => dish.isVegetarian)
// console.log(guests)

const vegetarianMenu = (menu) => {
  const menuNode = document.querySelector('#menu');
  const vegetarianOptions = menu.filter((option) => option.isVegetarian)

  vegetarianOptions.forEach(option => {
    let dish = document.createElement('li');
    dish.textContent = option.name;
    menuNode.appendChild(dish);

  })

}

vegetarianMenu(dishes)