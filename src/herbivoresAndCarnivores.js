'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  static updateAnimalList() {
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
  }
}
Animal.alive = [];
class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
    this.type = 'herbivore';
  }
  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    this.type = 'carnivore';
  }
  bite(target) {
    if (!target.hidden && target.type === 'herbivore') {
      target.health -= 50;
    }

    if (target.health <= 0) {
      Animal.updateAnimalList();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
