'use strict';

const HEALTH = 100;
const DAMAGE_PER_BITE = 50;

class Animal {
  constructor(name) {
    this.name = name;
    this.health = HEALTH;
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    Animal.alive.push(this);
  }

  bite(target) {
    if (
      target.health > 0
      && target instanceof Herbivore
      && !target.hidden
    ) {
      target.health -= DAMAGE_PER_BITE;

      if (target.health === 0 || target.health < 0) {
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
