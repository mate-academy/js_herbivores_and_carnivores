'use strict';

class Animal {
  static addAnimal(animal) {
    if (this.alive === undefined) {
      this.alive = [];
    }
    this.alive.push(animal);
  }

  static removeAnimal(animal) {
    this.alive = this.alive.filter(liveAnimal => animal !== liveAnimal);
  }

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
    Animal.addAnimal(this);
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  constructor(name, health) {
    super(name, health);
    Animal.addAnimal(this);
  }

  bite(animal) {
    if (!(animal instanceof Carnivore) && !animal.hidden) {
      animal.health -= 50;
    }

    if (animal.health <= 0) {
      Animal.removeAnimal(animal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
