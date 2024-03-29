'use strict';

class Animal {
  static alive = [];
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  die() {
    const index = Animal.alive.indexOf(this);

    if (index !== -1) {
      Animal.alive.splice(index, 1);
    }
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.name = name;
    this.hidden = false;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(object) {
    if (object instanceof Herbivore && !object.hidden) {
      object.health -= 50;
    }

    if (object.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== object);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
