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
  constructor(name, health = 100, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(obj) {
    if (obj.hidden === false && obj instanceof Carnivore === false) {
      obj.health -= 50;
    }

    if (obj.health === 0) {
      const i = Animal.alive.indexOf(obj.name);

      Animal.alive.splice(i, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
