'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }

  die() {
    Animal.alive = Animal.alive.filter(animal => animal !== this);
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {

  bite(target) {
    if (!(target instanceof Herbivore)) {
      return;
  }
    if (target.hidden) {
      return;
   }

   target.health -= 50;

   if (target.health <= 0) {
     target.die();
      }
    }
  }

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
