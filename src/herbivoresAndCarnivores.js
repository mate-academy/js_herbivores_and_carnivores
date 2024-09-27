'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

Animal.remove = function(prey) {
  if (prey.health <= 0) {
    Animal.alive = Animal.alive.filter(
      (animal) => animal !== prey,
    );
  }
};

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(prey) {
    if (prey instanceof Herbivore && !prey.hidden) {
      prey.health -= 50;
      Animal.remove(prey);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
