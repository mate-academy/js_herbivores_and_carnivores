'use strict';

class Animal {
  static alive = [];
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }

  checkAlive() {
    if (this.health <= 0) {
      const index = Animal.alive.indexOf(this);

      if (index > -1) {
        Animal.alive.splice(index, 1);
      }
    }
  }

  getreduceHealth(numberReducedHealth) {
    this.health -= numberReducedHealth;
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herbivoreObj) {
    if (herbivoreObj instanceof Herbivore && !herbivoreObj.hidden) {
      herbivoreObj.getreduceHealth(50);
      herbivoreObj.checkAlive();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
