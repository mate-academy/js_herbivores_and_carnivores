'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
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
  constructor(name) {
    super(name);
  }


  bite(animal) {
    if (animal.hidden === true) {
      return animal;
    }

    if (animal instanceof Carnivore) {
      return animal;
    }

    animal.health -= 50;
    console.log(animal);

    if (animal.health <= 0) {
      Animal.alive = Animal.alive.filter(anim => anim.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
