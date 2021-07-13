'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    Animal.alive.push(this);
  }

  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;
    }

    for (let i = 0; i < Animal.alive.length; i++) {
      if (Animal.alive[i].health <= 0) {
        Animal.alive.splice(i, 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
