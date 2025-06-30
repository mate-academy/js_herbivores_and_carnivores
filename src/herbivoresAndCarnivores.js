/* eslint-disable no-console */
/* eslint-disable no-useless-constructor */
'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  die() {
    const index = Animal.alive.indexOf(this);

    if (index > -1) {
      Animal.alive.splice(index, 1);
    }
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
    console.log(`${this.name} is now hiding.`);
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
  }

  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      console.log(`${this.name} bites ${target.name}.`);
      target.health -= 50;

      if (target.health <= 0) {
        console.log(`${target.name} has died.`);
        target.die();
      }
    } else if (target instanceof Carnivore) {
      console.log(
        `${this.name} cannot bite another carnivore, ${target.name}.`,
      );
    } else if (target.hidden) {
      console.log(
        `${this.name} cannot see ${target.name} because it is hiding.`,
      );
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
