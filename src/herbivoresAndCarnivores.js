class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  die() {
    Animal.alive = Animal.alive.filter(animal => animal !== this);
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
  bite(victim) {
    if (victim instanceof Herbivore && !victim.hidden) {
      victim.health -= 50;

      if (victim.health <= 0) {
        victim.die();
      }
    }
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
  }
}

module.exports = { Animal, Herbivore, Carnivore };

if (require.main === module) {
  const deer = new Herbivore('Bembi');
  const panther = new Carnivore('Bagira');
  const lion = new Carnivore('King');
  const rabbit = new Herbivore('Max');

  lion.bite(deer);
  panther.bite(lion);

  panther.bite(deer);
  rabbit.hide();
  panther.bite(rabbit);
}
