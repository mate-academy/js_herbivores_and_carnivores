'use strict';

const HEALTH = 100;
const DAMAGE_PER_BITE = 50;

class Animal {
  constructor(name) {
    this.name = name;
    this.health = HEALTH;
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
    this.hidden = true;
  }
}

class Carnivore extends Animal {

  bite(target) {
    if (
      target instanceof Herbivore
      && !target.hidden
    ) {
      target.health -= DAMAGE_PER_BITE;

      if (target.health <= 0) {
        Animal.alive = Animal.alive.filter((currentAnimal) => (
          currentAnimal !== target
        ));
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
