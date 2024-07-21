'use strict';

const INITIAL_HEALTH = 100;
const BITE_DAMAGE = 50;
const INITIAL_HIDDEN_STATE = false;

class Animal {
  static alive = [];
  static removeDeadAnimals() {
    Animal.alive = Animal.alive.filter(({ health }) => health > 0);
  }

  constructor(name, health = INITIAL_HEALTH) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health = INITIAL_HEALTH, hidden = INITIAL_HIDDEN_STATE) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(bittenAnimal) {
    if (bittenAnimal instanceof Carnivore || bittenAnimal.hidden) {
      return;
    }

    bittenAnimal.health -= BITE_DAMAGE;

    if (bittenAnimal.health <= 0) {
      Animal.removeDeadAnimals();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
