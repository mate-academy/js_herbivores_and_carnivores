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
  hidden = false;

  hide() {
    this.hidden = !this.hidden;
  }

  die() {
    Animal.alive = Animal.alive.filter(animal => animal !== this);
  }
}

class Carnivore extends Animal {
  static BITE_DAMAGE = 50;

  bite(herbivore) {
    if (herbivore instanceof Herbivore && !herbivore.hidden) {
      herbivore.health -= Carnivore.BITE_DAMAGE;
    }

    if (herbivore.health <= 0) {
      herbivore.die();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
