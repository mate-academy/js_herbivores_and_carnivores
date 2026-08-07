'use strict';

class Animal {
  static alive = [];

  name = '';
  health = 100;

  constructor(name) {
    this.name = name;
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);

    this.hidden = false;

    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);

    Animal.alive.push(this);
  }

  bite(objectOfAnimal) {
    if (!objectOfAnimal.hidden && objectOfAnimal instanceof Herbivore) {
      objectOfAnimal.health -= 50;

      if (objectOfAnimal.health <= 0) {
        Animal.alive = Animal.alive.filter((element) => element.health > 0);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
