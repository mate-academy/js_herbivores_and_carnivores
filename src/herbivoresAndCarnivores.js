'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  kindaDead() {
    const index = Animal.alive.indexOf(this);

    Animal.alive.splice(index, 1);
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
  bite(victome) {
    if (!victome.hidden && (victome instanceof Herbivore)) {
      victome.health -= 50;

      if (victome.health <= 0) {
        victome.kindaDead();
      }
    }
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
