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
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (target.hasOwnProperty('hidden') && target.hidden === false) {
      target.health -= 50;

      if (target.health <= 0) {
        Animal.alive = Animal.alive.filter(({ name }) => {
          return name !== target.name;
        });
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
