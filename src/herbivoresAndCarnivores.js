'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  static removeFromAlive(animal) {
    Animal.alive = Animal.alive.filter(a => a !== animal);
  }
}

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
  static BITE_DAMAGE = 50;

  bite(target) {
    if (!(target instanceof Herbivore) || target.hidden) {
      return;
    }

    target.health -= Carnivore.BITE_DAMAGE;

    if (target.health <= 0) {
      Animal.removeFromAlive(target);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
