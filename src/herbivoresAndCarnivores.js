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
      const index = Animal.alive.indexOf(this);

      if (index !== -1) {
        Animal.alive.splice(index, 1);
      }
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
