'use strict';

class Animal {
  constructor(name, health = 100) {
    this.health = health;
    this.name = name;

    Animal.alive.push(this);
  }
}

Animal.alive = [];

Animal.deleteDead = function() {
  Animal.alive = Animal.alive.filter(item => item.health !== 0);
};

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
  bite(obj) {
    if (!obj.hidden && obj instanceof Herbivore) {
      obj.health -= 50;

      if (obj.health === 0) {
        Animal.deleteDead();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
