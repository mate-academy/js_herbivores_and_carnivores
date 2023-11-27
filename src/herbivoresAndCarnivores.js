'use strict';

class Animal {
  // write your code here
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.hidden = false;

    if (!Animal.alive) {
      Animal.alive = [];
    }
    Animal.alive.push(this);
  }
  die() {
    if (Animal.alive.includes(this)) {
      Animal.alive = Animal.alive.filter(animal => animal !== this);
    }
  }
  hide() {
    this.hidden = true;
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(name, diet, hidden) {
    super(name);
    this.diet = diet;
    this.hidden = hidden === true;
  }
}

class Carnivore extends Animal {
  // write your code here
  constructor(name, sound, hidden) {
    super(name);
    this.sound = sound;
    this.hidden = hidden === true;
  }

  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= 50;

      if (target.health <= 0) {
        target.die();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
