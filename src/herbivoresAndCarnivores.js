'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }

  static deleteAliveObj() {
    Animal.alive = Animal.alive.filter((item) => item.health > 0);
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
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(obj) {
    if (obj instanceof Herbivore && !obj.hidden) {
      obj.health -= 50;

      Animal.deleteAliveObj(obj);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
