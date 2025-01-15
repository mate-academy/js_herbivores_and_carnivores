'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    if (health > 0) {
      Animal.alive.push(this);
    }
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.name = name;
    this.health = health;
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.name = name;
    this.health = health;
    this.hidden = false;
  }

  bite(herbivore) {
    if (!herbivore.hidden && !(herbivore instanceof Carnivore)) {
      herbivore.health -= 50;

      if (herbivore.health <= 0) {
        // remove from alive
        for (let i = 0; i < Animal.alive.length; i++) {
          if (Animal.alive[i].health <= 0) {
            Animal.alive.splice(i, 1);
            break;
          }
        } // end for
      }
    } // end if hidden
  } // end bite
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

Animal.alive = [];
