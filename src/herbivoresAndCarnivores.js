'use strict';

class Animal {
  static alive = [];
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  checkHealth() {
    if (this.health <= 0) {
      this.index = Animal.alive.indexOf(this);
      Animal.alive.splice(this.index, 1);
    }
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(anim) {
    if (anim instanceof Herbivore && !anim.hidden && anim.health > 0) {
      anim.health -= 50;
      anim.checkHealth();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
