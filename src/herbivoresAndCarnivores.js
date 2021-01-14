'use strict';

class Animal {
  constructor(name) {
    this.health = 100;
    this.name = name;
    this.index = Animal.index;
    Animal.alive.push(this);
    Animal.index++;
  }
}

Animal.alive = [];
Animal.index = 0;
class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    if (this.hidden === false) {
      this.hidden = true;
    } else {
      this.hidden = false;
    };
  }
}

class Carnivore extends Animal {
  bite(obj) {
    if (obj.hidden === false && obj instanceof Herbivore) {
      obj.health -= 50;

      if (obj.health === 0) {
        Animal.alive.splice(obj.index, obj.index);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
