'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;

    this.onAnimalCreate();
  }

  static alive = [];

  onAnimalCreate() {
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
  bite(target) {
    if (target instanceof Carnivore || target.hidden) {
      return;
    }

    target.health -= 50;

    if (target.health <= 0) {
      const index = Animal.alive.indexOf(target);

      Animal.alive.splice(index, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
