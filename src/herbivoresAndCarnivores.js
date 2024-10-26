'use strict';

class Animal {
  static alive = []; // Масив для зберігання всіх живих тварин

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this); // Додаємо нову тварину до масиву живих
  }

  checkHealth() {
    if (this.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== this);
    }
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true; // Травоїдна тварина ховається
  }

  unhide() {
    this.hidden = false; // Травоїдна тварина виходить із сховку
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (!(animal instanceof Herbivore) || animal.hidden) {
      return;
    }
    animal.health -= 50; // Зменшуємо здоров'я травоїдного
    animal.checkHealth(); // Перевіряємо, чи тварина залишилася живою
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
