'use strict';

class Animal {
  static alive = [];
  constructor(health = 100, name) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
  }

  checkHealth() {
    if (this.health <= 0) {
      this.index = Animal.alive.indexOf(this);
      Animal.alive.splice(this.index, 1);
    }
  }
}

class Herbivore extends Animal {
  constructor(health = 100, name, hidden) {
    super(health, name);
    this.hidden = hidden;
    this.hidden = false;
    this.health = 100;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super();
  }

  bite(animals) {
    if (animals instanceof Herbivore && !animals.hidden && animals.health > 0) {
      animals.health -= 50;
      animals.checkHealth();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
