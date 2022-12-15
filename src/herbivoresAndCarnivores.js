'use strict';

class Animal {
  // write your code here
  constructor(name) {
    this.name = name;
    this.health = 100;
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  // write your code here
  constructor(name, health) {
    super(name, health);

    this.hidden = false;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  constructor(name, health) {
    super(name, health);

    Animal.alive.push(this);
  }

  bite(victim) {
    if (victim instanceof Herbivore && !victim.hidden) {
      victim.health -= 50;
    }

    Animal.alive = Animal.alive.filter(animal =>
      animal.health);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
