'use strict';

class Animal {
  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
  }
}
Animal.alive = [];
class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }
  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(hervibore) {
    if (hervibore instanceof Herbivore && !hervibore.hidden) {
      hervibore.health -= 50;
    }

    Animal.alive = Animal.alive.filter(animal =>
      animal instanceof Herbivore && animal.health > 0
    );
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
