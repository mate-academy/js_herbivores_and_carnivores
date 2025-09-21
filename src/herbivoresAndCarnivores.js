'use strict';

class Animal {
  static alive = [];
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
  alive() {
    return Animal.alive;
  }
  die() {
    Animal.alive = Animal.alive.filter((animal) => animal !== this);

    // const index = Animal.alive.indexOf(victim);

    // if (index !== -1) {
    //   Animal.alive.splice(index, 1);
    // }
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
  // eslint-disable-next-line no-useless-constructor
  constructor(name, health) {
    super(name, health);
  }

  bite(victim) {
    if (victim instanceof Herbivore && !victim.hidden) {
      victim.health -= 50;
    }

    if (victim.health <= 0) {
      victim.die();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
