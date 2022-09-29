'use strict';

class Animal {
  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
  }
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

  bite(herb) {
    if (herb.hidden === false && !(herb instanceof Carnivore)) {
      herb.health -= 50;
    }

    if (Animal.alive.some(key => key.health <= 0)) {
      Animal.alive = Animal.alive.filter(anim => anim.health > 0);
    }
  }
}

Animal.alive = []; // Static field

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
