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
    this.name = name;
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    this.name = name;
  }

  bite(obj) {
    if (!obj.hidden && obj instanceof Herbivore) {
      obj.health -= 50;
    }

    Animal.alive.map((animal, index) => {
      if(animal.health <= 0) {
          Animal.alive.splice(index, 1);
        }
      return animal;
    })
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
