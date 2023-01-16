'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, hidden) {
    super(name);
    this.hidden = false;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(sufferedAnimal) {
    if (sufferedAnimal instanceof Herbivore && !sufferedAnimal.hidden) {
      sufferedAnimal.health -= 50;
    }

    Animal.alive = Animal.alive.filter(alive => alive.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
