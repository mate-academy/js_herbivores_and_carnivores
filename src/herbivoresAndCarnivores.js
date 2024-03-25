'use strict';

// Травоїдні та м'ясоїдні тварини
// Природа добре підходить для відображення принципів об'єктно-орієнтованого
// програмування. Всі екземпляри класу Animal повинні мати властивості
// health та name. За замовчуванням здоров'я дорівнює 100.

// Створіть клас Herbivore. Herbivore має метод hide,
// який змінює властивість прихованості звіра і допомагає ховатися від хижаків.

// Створіть клас Сarnivore. Carnivore має метод bite,
// який отримує об'єкт травоїдного і зменшує здоров'я об'єкта на 50.
// Метод не працює, якщо це інший хижак,
// або якщо травоїдна тварина в даний момент ховається.

// Травоїдні і Ссавці повинні розширювати Animal class..

// Всі живі тварини повинні знаходитись у статичному масиві Animal.alive.
// Якщо здоров'я тварини досягає 0,
// тварина помирає і її слід видалити зі статичного масиву Animals.alive.

// const deer = new Herbivore('Bembi');
// const panther = new Carnivore('Bagira');
// const lion = new Carnivore('King');
// const rabbit = new Herbivore('Max');

// Animal.alive === [
//   {name: 'Bembi', health: 100, hidden: false},
//   {name: 'Bagira', health: 100},
//   {name: 'King', health: 100},
//   {name: 'Max', health: 100, hidden: false},
// ];

// lion.bite(deer);
// panther.bite(lion);

// Animal.alive === [
//   {name: 'Bembi', health: 50},
//   {name: 'Bagira', health: 100},
//   {name: 'King', health: 100},
//   {name: 'Max', health: 100},
// ];

// panther.bite(deer);
// rabbit.hide();
// panther.bite(rabbit);

// Animal.alive === [
//   {name: 'Bagira', health: 100},
//   {name: 'King', health: 100},
//   {name: 'Max', health: 100, hidden: true},
// ];

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
    this.hidden = false;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (target instanceof Herbivore && target.hidden === false) {
      target.health -= 50;
    }

    Animal.alive = Animal.alive.filter((element) => element.health >= 50);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

// constructor(name, weight, coords, chipVersion) {
//   this.name = name;
//   this.weight = weight;
//   this.coords = { x: coords.x || 0, y: coords.y || 0};
//   this.chipVersion = chipVersion;
// }
