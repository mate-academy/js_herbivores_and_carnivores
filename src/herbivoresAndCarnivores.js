'use strict';

class Animal {
  static alive = [];
  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
    this.hidden = false;

    Animal.alive.push(this);
  }

  checkHealth() {
    if (this.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
    }
  }
}

class Herbivore extends Animal {
  hide(hidden = true) {
    this.hidden = hidden;
  }
}

class Carnivore extends Animal {
  bite(victim) {
    if (victim instanceof Herbivore) {
      if (!victim.hidden) {
        victim.health -= 50;

        victim.checkHealth();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
