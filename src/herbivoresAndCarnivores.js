'use strict';

class Animal {
  static alive = [];

  contructor(name) {
    this.name = name;
    this.health = 100;
  }

  static updateAlive(target) {
    const index = this.alive.indexOf(target);

    if (target.health <= 0) {
      this.alive.splice(index, 1);
    } else {
      this.alive[index].health = target.health;
    }
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.health = 100;
    this.hidden = false;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    this.health = 100;
    Animal.alive.push(this);
  }

  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= 50;
    }
    Animal.updateAlive(target);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
