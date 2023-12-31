'use strict';

class Animal {
  static FULL_HEALTH_ANIMAL = 100;
  static DEATH_HEALTH = 0;

  static alive = [];

  constructor(name, health = Animal.FULL_HEALTH_ANIMAL) {
    this.name = name;
    this.health = health;
  }

  static addAliveAnimal(animal) {
    this.alive.push(animal);
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;

    Animal.addAliveAnimal(this);
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  static CARNIVORE_DAMAGE = 50;

  constructor(name, health) {
    super(name, health);

    Animal.addAliveAnimal(this);
  }

  bite(herbivore) {
    if (herbivore instanceof Herbivore && herbivore.hidden === false) {
      herbivore.health -= Carnivore.CARNIVORE_DAMAGE;

      if (herbivore.health === Animal.DEATH_HEALTH) {
        Animal.alive = Animal.alive.filter(animal => animal !== herbivore);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
