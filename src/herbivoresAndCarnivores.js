'use strict';

// class Animal {
//   // write your code here
// }

// class Herbivore extends Animal {
//   // write your code here
// }

// class Carnivore extends Animal {
//   // write your code here
// }
class Animal {
  static alive = []; // Статичний масив всіх живих тварин

  constructor(name) {
    this.name = name;
    this.health = 100;
    this.hidden = false;
    Animal.alive.push(this); // Додаємо тварину до масиву alive
  }

  // Метод для видалення мертвих тварин з масиву alive
  static removeDeadAnimals() {
    this.alive = this.alive.filter((animal) => animal.health > 0);
  }
}

class Herbivore extends Animal {
  // Тепер конструктор не потрібен
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // Тепер конструктор не потрібен
  bite(herbivore) {
    // Перевірка, чи це травоїдна тварина, і чи не ховається вона
    if (herbivore instanceof Herbivore && !herbivore.hidden) {
      herbivore.health -= 50; // Зменшуємо здоров'я травоїдного

      if (herbivore.health <= 0) {
        herbivore.health = 0;
        // Якщо здоров'я травоїдного стає 0 або менше, він гине
      }
    }
    // Очищення мертвих тварин зі статичного масиву
    Animal.removeDeadAnimals();
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
