'use strict';

class Animal {
  constructor(health, name) {
    this.health = 100;
    this.name = name;
    Animal.alive.push(this);
  }

  isHealth() {
    for (let i = 0; i < Animal.alive.length; i++) {
      if (Animal.alive[i].health <= 0) {
        Animal.alive.splice(i, 1);
      }
    }
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(health, name) {
    super(health, name);
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite() {
    for (const enimal of Animal.alive) {
      if (!enimal.hidden && enimal instanceof Herbivore) {
        enimal.health -= 50;
      }
    }
    this.isHealth();
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
