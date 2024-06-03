'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }

  static alive = [];
}

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    Animal.alive.push(this);
  }

  bite(object) {
    if (!(object instanceof Carnivore) && object.hidden === false) {
      object.health -= 50;
    }

    Animal.alive.forEach((animal, index) => {
      if (animal.health <= 0) {
        Animal.alive.splice(index, 1);
      }
    });
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
