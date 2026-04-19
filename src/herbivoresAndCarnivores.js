'use strict';

class Animal {
  // write your code here

  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  // write your code here

  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here

  bite(target) {
    // ❌ якщо це не травоїдний
    if (!(target instanceof Herbivore)) {
      return;
    }

    // ❌ ховається
    if (target.hidden === true) {
      return;
    }

    // ✅ кусаємо
    target.health -= 50;

    // 💀 якщо помер
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
