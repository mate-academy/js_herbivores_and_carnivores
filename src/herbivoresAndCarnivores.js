'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.addAlive(this);
  }

  static addAlive(beast) {
    Animal.alive.push(beast);
  }

  static changeHiddenProperty(beastName, value) {
    for (let i = 0; i < Animal.alive.length; i++) {
      const element = Animal.alive[i];

      if (element.name === beastName) {
        element.hidden = value;
      }
    }
  }

  static removeFromAlive(beastName) {
    Animal.alive = Animal.alive.filter((el) => el.name !== beastName);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
    Animal.changeHiddenProperty(name, false);
  }

  hide() {
    this.hidden = !this.hidden;
    Animal.changeHiddenProperty(this.name, this.hidden);
  }
}

class Carnivore extends Animal {
  bite(beast) {
    if (beast instanceof Herbivore && !beast.hidden) {
      beast.health -= 50;

      if (beast.health <= 0) {
        Animal.removeFromAlive(beast.name);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
