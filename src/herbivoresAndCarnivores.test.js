'use strict';

const { Animal, Herbivore, Carnivore } = require('./herbivoresAndCarnivores');

describe('Animal', () => {
  it('Herbivore can be used as a constructor', () => {
    const animal = new Herbivore('Zebra');

    expect(animal).toBeInstanceOf(Herbivore);
  });

  it('Carnivore can be used as a constructor', () => {
    const animal = new Carnivore('Tiger');

    expect(animal).toBeInstanceOf(Carnivore);
  });

  it('Herbivore should have falsy "hidden" property by default', () => {
    const animal = new Herbivore('Zebra');

    // eslint-disable-next-line max-len
    expect(animal.hidden).toBe(false);  // Перевірка, чи "hidden" ініціалізується як false
  });

  // eslint-disable-next-line max-len
  it('Herbivore should have "hide" method which inverts "hidden" property', () => {
    const animal = new Herbivore('Zebra');

    animal.hide();  // Викликаємо метод hide
    expect(animal.hidden).toBe(true);  // Перевірка, чи "hidden" стало true
  });

  // eslint-disable-next-line max-len
  it('Carnivore should have "bite" method which decreases "health" property of herbivores', () => {
    const carn = new Carnivore('Tiger');
    const herb = new Herbivore('Zebra');

    carn.bite(herb);  // Хижак атакує травоїдну тварину
    // eslint-disable-next-line max-len
    expect(herb.health).toBe(50);  // Перевірка, чи знижено здоров\'я травоїдної тварини
  });

  it('Carnivore should not bite Herbivore if it is hidden', () => {
    const carn = new Carnivore('Tiger');
    const herb = new Herbivore('Zebra');

    herb.hide();  // Травоїдна тварина ховається
    carn.bite(herb);  // Напад не повинен бути здійснений
    expect(herb.health).toBe(100);  // Перевірка, що здоров\'я не змінено
  });

  it('Carnivores should not bite other Carnivores', () => {
    const carn1 = new Carnivore('Tiger');
    const carn2 = new Carnivore('Lion');

    carn1.bite(carn2);  // Хижак не може вкусити іншого хижака
    expect(carn2.health).toBe(100);  // Здоров\'я хижака не змінюється
  });

  // eslint-disable-next-line max-len
  it('Herbivores should be removed from "Animal.alive" array when their health is 0', () => {
    const herb = new Herbivore('Zebra');
    const carn = new Carnivore('Tiger');

    carn.bite(herb);  // Перше вкушення
    carn.bite(herb);  // Друге вкушення (Zebra вмирає)
    // eslint-disable-next-line max-len
    expect(Animal.alive.includes(herb)).toBe(false);  // Травоїдна тварина більше не в масиві
  });

  // eslint-disable-next-line max-len
  it('Herbivores should stay in "Animal.alive" array if their health is still positive', () => {
    const herb = new Herbivore('Zebra');
    const carn = new Carnivore('Tiger');

    carn.bite(herb);
    // eslint-disable-next-line max-len
    expect(Animal.alive.includes(herb)).toBe(true);  // Травоїдна тварина повинна бути в масиві
  });

  it('Two of the same herbivore exist, but only one dies', () => {
    const olderZebra = new Herbivore('Zebra');
    const youngerZebra =  new Herbivore('Zebra');
    const lion = new Carnivore("Lion");

    lion.bite(youngerZebra);
    lion.bite(youngerZebra);

    expect(Animal.alive.includes(olderZebra)).toBe(true);
    expect(Animal.alive.includes(lion)).toBe(true);
    expect(Animal.alive.includes(youngerZebra)).toBe(false);
  });
});
