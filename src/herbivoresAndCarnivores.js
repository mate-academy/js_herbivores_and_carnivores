'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  refreshAliveList() {
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  degreaseHealthOfOpponent(target, damage) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= damage;
    }
  }

  bite(herbivore) {
    this.degreaseHealthOfOpponent(herbivore, 50);

    if (herbivore.health <= 0) {
      this.refreshAliveList();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
