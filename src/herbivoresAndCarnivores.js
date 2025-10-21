'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true; // zawsze ustawia hidden na true, nie toggle
  }
}

class Carnivore extends Animal {
  bite(target) {
    // pojedynczy warunek sprawdzający, czy target jest Herbivore i nie ukryty
    if (!(target instanceof Herbivore) || target.hidden) return;

    target.health -= 50;
    // usuwanie martwych zwierząt przy użyciu filter
    Animal.alive = Animal.alive.filter(a => a.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

