'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
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
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    const isHerbivore = animal instanceof Herbivore;
    const isNotHidden = animal.hidden === false;

    if (isHerbivore && isNotHidden) {
      const biteDamage = 50;
      const isDead = animal.health - biteDamage === 0;
      const removeFromAlive = () => {
        Animal.alive = Animal.alive.filter(beast => beast.health <= 0);
      };

      isDead
        ? removeFromAlive()
        : animal.health -= biteDamage;
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
