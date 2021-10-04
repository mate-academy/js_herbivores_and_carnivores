'use strict';

class Animal {
  static alive = [];
  constructor(name, health = 100) {
    this.health = health;
    this.name = name;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(prey) {
    if (
      (prey instanceof Herbivore)
      && !prey.hidden
    ) {
      prey.health -= 50;

      if (prey.health <= 0) {
        this.eatCorpse();
      };
    }
  }

  eatCorpse() {
    Animal.alive = Animal.alive.filter(creature => creature.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
