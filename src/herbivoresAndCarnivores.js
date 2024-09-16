'use strict';

class Animal {
  // write your code here
  static alive = [];
  static health = 100;

  constructor(name) {
    this.name = name;
    this.health = Animal.health;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor() {
    super();
    this.hidden = false;
  }
  hide(hidden) {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  static damage = 50;
  static fullDamage = 0;

  bite(carnivore) {
    if (carnivore.hidden === false) {
      carnivore.health -= Carnivore.damage;

      if (carnivore.health <= 0) {
        Animal.alive = Animal.alive.filter((animal) => animal !== carnivore);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
