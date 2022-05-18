'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100, hidden = false) {
    super(name, health);
    this.hidden = hidden;
    Animal.alive.push(this);
  }

  hide() {
    return (this.hidden = !this.hidden);
  }
}

class Carnivore extends Animal {
  constructor(name, health, hidden) {
    super(name, health, hidden);
    Animal.alive.push(this);
  }

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
