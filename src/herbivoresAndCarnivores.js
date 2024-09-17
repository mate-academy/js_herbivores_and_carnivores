'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  decreaseHealth(damage) {
    this.health -= damage;
  }

  deleteDeadAnimal(points) {
    Animal.alive = Animal.alive.filter(item => item.health > points);
  }
}

Animal.alive = [];

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
  bite(nameOfBitten) {
    const BITE_POINTS = 50;
    const LIMIT_OF_HEALTH = 0;
    const isHerbivore = nameOfBitten instanceof Herbivore;

    if (isHerbivore && !nameOfBitten.hidden) {
      nameOfBitten.decreaseHealth(BITE_POINTS);
    }

    nameOfBitten.deleteDeadAnimal(LIMIT_OF_HEALTH);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
