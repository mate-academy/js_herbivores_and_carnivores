'use strict';

class Animal {
  static alive = [];
  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
  }
}

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
  bite(obj) {
    if (!(obj instanceof Carnivore || obj.hidden)) {
      obj.health -= 50;

      if (obj.health <= 0) {
        const indexOfObjectElement = Animal.alive.indexOf(obj);

        Animal.alive.splice(indexOfObjectElement, 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
