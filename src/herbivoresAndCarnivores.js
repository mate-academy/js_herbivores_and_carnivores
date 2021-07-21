'use strict';

class Animal {
  // write your code here
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    this.hidden = false;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  // write your code here
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(herb) {
    if (herb.hidden === false
    && !(herb instanceof Carnivore)) {
      herb.health -= 50;
    }

    if (herb.health <= 0) {
      const herbIndex = Animal.alive.findIndex(animal => animal === herb);

      Animal.alive.splice(herbIndex, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
