class Animal {
  static ANIMAL_HITPOINTS = 100;
  static BITE_POWER = 50;
  static alive = [];

  health = Animal.ANIMAL_HITPOINTS;
  constructor(name) {
    this.name = name;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= Animal.BITE_POWER;
    }

    if (!target.health) {
      Animal.alive = Animal.alive.filter((animal) => animal.health);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
