'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.health = health;
    this.name = name;

    Animal.alive.push(this);
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
  bite(animalBited) {
    if (animalBited instanceof Herbivore && animalBited.hidden === false) {
      animalBited.health -= 50;

      if (animalBited.health <= 0) {
        const filtredAnimals = Animal.alive.filter(
          (animal) => animal !== animalBited,
        );

        Animal.alive = filtredAnimals;
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
