'use strict';

class Animal {
  static alive = [];
  static DEFAULT_HEALTH = 100;
  static BITE_DAMAGE = 50;

  constructor(name, health = Animal.DEFAULT_HEALTH) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }

  checkHealthStatus() {
    if (this.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== this);
    }
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
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
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= Carnivore.BITE_DAMAGE;

      if (target.health <= 0) {
        target.checkHealthStatus();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
