'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
  }
  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(anim) {
    if (!anim.hidden && anim instanceof Herbivore) {
      anim.health -= 50;
    }

    if (anim.health <= 0) {
      const result = Animal.alive.filter(x => x.name !== anim.name);

      Animal.alive = [...result];
    }
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
