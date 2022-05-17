'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
  static alive = [];
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);

    this.hidden = false;
  }

  hide() {
    if (this.hidden) {
      this.hidden = false;
    };

    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(obj) {
    if ((obj instanceof Herbivore)
    && obj.hidden === false) {
      obj.health -= 50;
      Animal.alive = Animal.alive.filter(beatsAlive => beatsAlive.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
