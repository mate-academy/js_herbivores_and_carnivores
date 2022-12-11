'use strict';

class Animal {
  static addAnimal(obj) {
    Animal.alive.push(obj);
  }

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.name = name;
    this.health = health;
    this.hidden = false;
    Animal.addAnimal(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.name = name;
    this.health = health;
    Animal.addAnimal(this);
  }

  bite(obj) {
    if (!obj.hidden && obj instanceof Carnivore === false) {
      obj.health = obj.health - 50;

      Animal.alive = Animal.alive.filter(el => el.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
