'use strict';

class Animal {
  static alive = [];
  static DEFAULT_HEALTH_POINTS = 100;
  static BITE_DAMAGE = 50;
  static DEFAULT_STEALTH = false;

  constructor(name, health = Animal.DEFAULT_HEALTH_POINTS) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(health, name, hidden = Animal.DEFAULT_STEALTH) {
    super(health, name);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(targetAnimal) {
    if (targetAnimal instanceof Herbivore && !targetAnimal.hidden) {
      targetAnimal.health -= Animal.BITE_DAMAGE;
    }

    Animal.alive = Animal.alive.filter((aliveAnimal) => aliveAnimal.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
