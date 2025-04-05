'use strict';

class Animal {
  static alive = [];

  constructor(health = 100, name) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this); // Додаємо в загальний масив
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100, hidden = false) {
    super(health, name);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(health, name);
  }

  bite(target) {
    if (target instanceof Herbivore && !target.hidden && target.health > 0) {
      target.health -= 50; // Зменшуємо здоров'я травоїдного
    }

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
