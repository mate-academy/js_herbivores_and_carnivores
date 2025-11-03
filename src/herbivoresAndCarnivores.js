'use strict';

class Animal {
  static alive = []; // масив усіх живих тварин

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

// Клас травоїдних тварин
class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

// Клас хижаків
class Carnivore extends Animal {
  bite(target) {
    // кусаємо тільки травоїдних, які не сховалися
    if (!(target instanceof Herbivore) || target.hidden) {
      return;
    }

    target.health -= 50;

    // якщо здоров'я впало до 0 або нижче — видаляємо зі списку живих
    if (target.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== target);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
