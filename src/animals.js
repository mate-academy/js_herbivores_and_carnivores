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
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;

      if (animal.health <= 0) {
        Animal.alive = Animal.alive.filter(a => a !== animal);
      }
    }
  }
}

// 🧪 Тест
const deer = new Herbivore('Bambi');
const rabbit = new Herbivore('Max');
const panther = new Carnivore('Bagira');

deer.hide();             // deer ховається
panther.bite(deer);      // нічого не станеться
panther.bite(rabbit);    // rabbit health: 50
panther.bite(rabbit);    // rabbit health: 0 — видалений

console.log(Animal.alive);
