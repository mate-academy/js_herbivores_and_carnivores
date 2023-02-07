'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

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
      const onlyAlive = [];

      for (let i = 0; i < Animal.alive.length; i++) {
        if (Animal.alive[i].name !== victim.name) {
          onlyAlive.push(Animal.alive[i]);
        }
      }

      Animal.alive = onlyAlive;
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
