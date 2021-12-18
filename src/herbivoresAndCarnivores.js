'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

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
  bite(anim) {
    if (anim.hidden === false) {
      anim.health -= 50;

      if (anim.health === 0) {
        Animal.alive = Animal.alive.filter(item => item !== anim);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

Animal.alive = [];
