'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(victim) {
    if (victim.hidden === false) {
      victim.health -= 50;
    }

    if (victim.health === 0) {
      const onlyAlive = Animal.alive.filter(animal => {
        return animal.name !== victim.name;
      });

      Animal.alive = onlyAlive;
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
