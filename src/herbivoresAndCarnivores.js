const { Herbivore, Carnivore, Animal } = require('./animal');

test('Carnivore attacks and kills Herbivore', () => {
  const rabbit = new Herbivore('Max');
  const lion = new Carnivore('Simba');

  lion.attack(rabbit);
  expect(rabbit.health).toBe(50);

  lion.attack(rabbit);
  expect(rabbit.health).toBe(0);
  expect(Animal.alive.includes(rabbit)).toBe(false);
});
