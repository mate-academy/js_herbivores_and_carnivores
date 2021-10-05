'use strict';


class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
  }
}

class Herbivore extends Animal {
  constructor(health, name, hidden = false) {
    super(health, name);
    this.hidden = hidden;
    Animal.alive.push(this);
  }

  hide() {
    if (this.hidden === true) {
      this.hidden = false;
    } else if (this.hidden === false) {
      this.hidden = true;
    }
  }
}

class Carnivore extends Animal {
  constructor(health, name) {
    super(health, name);
    Animal.alive.push(this);
  }

  bite(name) {
    let index = Animal.alive.findIndex(creature => creature === name);
    if (Animal.alive[index].hasOwnProperty('hidden') && Animal.alive[index].hidden === false) {
      Animal.alive[index].health -= 50;
    }

    if (Animal.alive[index].health === 0) {
      Animal.alive.splice(index, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
