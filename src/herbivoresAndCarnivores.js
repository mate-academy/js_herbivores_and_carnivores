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
  constructor(name, health = 100, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    return (this.hidden = !this.hidden);
  }
}

class Carnivore extends Animal {
  bite(object) {
    const isCarvinore = object instanceof Carnivore;

    if (object.hidden !== true && !isCarvinore) {
      object.health -= 50;

      if (object.health === 0) {
        const index = Animal.alive.indexOf(object);

        Animal.alive.splice(index, 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
