'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  reduceHealth(animal) {
    if (animal instanceof Herbivore && animal.hidden === false) {
      animal.health -= 50;
    }
  }

  die(animal) {
    if (animal.health <= 0) {
      Animal.alive = Animal.alive.filter(el => el !== animal)
     }
  }

}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {

bite(animal) {
  return this.reduceHealth(animal), this.die(animal);
}
}


module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
