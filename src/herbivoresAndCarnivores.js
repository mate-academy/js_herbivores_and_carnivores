'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;

    // Adaugă în lista celor vii
    Animal.alive.push(this);
  }

  // Metodă auxiliară: scoate animalul din lista celor vii
  die() {
    const index = Animal.alive.indexOf(this);

    if (index !== -1) {
      Animal.alive.splice(index, 1);
    }
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
  bite(other) {
    if (!(other instanceof Herbivore)) {
      return;
    }

    if (other.hidden) {
      return;
    }

    other.health -= 50;

    if (other.health <= 0) {
      other.die();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
// new comment for test
