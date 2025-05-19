'use strict';

class Animal {
  // write your code here
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

  static removeAnimal() {
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here

  bite(prey) {
    if (prey instanceof Herbivore && !prey.hidden) {
      prey.health -= 50;

      if (prey.health <= 0) {
        prey.die();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
