'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    if (health > 0) {
      Animal.alive.push(this);
    }
  }
}

Animal.alive = [];
class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (
      !(herbivore instanceof Herbivore) ||
      herbivore.hidden ||
      herbivore.health <= 0
    ) {
      return;
    }

    herbivore.health -= 50;

    if (herbivore.health <= 0) {
      Animal.alive = Animal.alive.filter(
        (aliveAnimal) => aliveAnimal !== herbivore,
      );
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
