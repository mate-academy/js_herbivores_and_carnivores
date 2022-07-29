'use strict';

class Animal {
  // write your code here
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    if (Animal.alive == null) {
      Animal.alive = [];
    };

    if (Animal.alive) {
      Animal.alive.push(this);
    }
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(name, health = 100) {
    super(name, health);

    this.hidden = false;
  }

  hide() {
    this.hidden ? this.hidden = false : this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(creature) {
    if (creature instanceof Herbivore && !creature.hidden) {
      creature.health -= 50;

      Animal.alive = Animal.alive.filter(function(aniObj) {
        return aniObj.health !== 0;
      });
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
