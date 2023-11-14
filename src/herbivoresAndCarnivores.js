'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = Animal.DEFAULT_HEALTH;
  }
}

Animal.DEFAULT_HEALTH = 100;
Animal.DEATH_STATE_HEALTH = 0;
Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;

    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);

    Animal.alive.push(this);
  }

  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= Carnivore.BITE_DAMAGE;

      if (target.health <= Animal.DEATH_STATE_HEALTH) {
        Animal.alive = Animal.alive.filter(animal => animal !== target);
      }
    }
  }
}

Carnivore.BITE_DAMAGE = 50;

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
