'use strict';

class Animal {
  constructor(name) {
    this.health = 100;
    this.name = name;

    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (target instanceof Herbivore
      && !target.hidden) {
      target.health -= 50;

      if (target.health <= 0) {
        Animal.alive.splice(Animal.alive.indexOf(target), 1);

        return 0;
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
