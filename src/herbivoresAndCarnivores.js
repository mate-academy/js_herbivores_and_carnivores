'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }

  // static addNewAnimal(obj) {
  //   Animal.alive.push(obj);
  // }
}

Animal.alive = [];

Animal.checkAlive = (obj) => {
  if (obj.health <= 0) {
    Animal.alive.splice(Animal.alive.findIndex(item =>
      item.health === obj.health), 1);
  }
};

class Herbivore extends Animal {
  constructor(name, health = 100, hidden = false) {
    super(name, health);
    this.hidden = hidden;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    Animal.alive.push(this);
  }

  bite(obj) {
    if (obj instanceof Herbivore && !obj.hidden) {
      obj.health = obj.health - 50;

      Animal.checkAlive(obj);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
