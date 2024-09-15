'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  static removeFromAlive(animal) {
    const index = Animal.alive.indexOf(animal);

    Animal.alive.splice(index, 1);
  }
}

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
  bite(targetObject) {
    if (targetObject.hidden === false) {
      targetObject.health -= 50;
    }

    if (targetObject.health <= 0) {
      Animal.removeFromAlive(targetObject);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
