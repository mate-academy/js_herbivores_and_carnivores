'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
    Animal.addAnimal(this);
  }

  static addAnimal(animal) {
    this.alive.push(animal);
  }

  static removeAnimal(animal) {
    this.alive.splice(this.alive.indexOf(animal), 1);
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    if (this.hidden === false) {
      this.hidden = true;
    } else {
      this.hidden = false;
    }
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(prey) {
    if (prey instanceof Herbivore && prey.hidden !== true && prey.health > 0) {
      prey.health -= 50;
    }

    if (prey.health === 0) {
      Animal.removeAnimal(prey);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
