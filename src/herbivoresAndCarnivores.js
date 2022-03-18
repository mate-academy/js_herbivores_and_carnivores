'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);

    this.hidden = false;
  }
  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(prey) {
    if (prey.hidden === false
      && prey instanceof Herbivore) {
      prey.health -= 50;

      for (let i = 0; i < Animal.alive.length; i++) {
        if (Animal.alive[i].health === 0) {
          Animal.alive.splice(i, 1);
        }
      }
    }
  }
};

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
