import { User } from "../src/supa.js";

describe ('User', () => {
  let newUser = new User(29);
  test ('this should test that the users age is 29', () => {
    expect(newUser.age).toEqual(29);
  });

test ('this should test Mercury age calculation', () => {
  expect(newUser.mercuryAge()).toEqual(120);
  });

  test ('this should test Venus age calculation', () => {
    expect(newUser.venusAge()).toEqual(46);
  });

test ('this should test Mars age calculation', () => {
  expect(newUser.marsAge()).toEqual(15);
});

test ('this should test Jupiter age calculation', () => {
  expect(newUser.jupiterAge()).toEqual(2);
});

test ('this should test life Expectancy calculation, should return a random number less than 100', () => {
  expect(newUser.lifeExpectancy()).toBeLessThan(100);
});

//theshold would be 220 years
test ('this should test life Expectancy on Mercury (mercury age + life expectancy)', () => {
  expect(newUser.estimatedMercury()).toBeLessThan(220);
});

//theshold would be 146 years
test ('this should test life Expectancy on Venus (venus age + life expectancy)', () => {
  expect(newUser.estimatedVenus()).toBeLessThan(146);
});

//theshold would be 115 years
test ('this should test life Expectancy on Mars (Mars age + life expectancy)', () => {
  expect(newUser.estimatedMars()).toBeLessThan(115);
});

//theshold would be 102 years
test ('this should test life Expectancy on Jupiter (Jupiter age + life expectancy)', () => {
  expect(newUser.estimatedJupiter()).toBeLessThan(102);
});

test ('this should calculate the final years left on Mercury', () => {
  expect(newUser.leftMercury()).toBeGreaterThan(2);
});

test ('this should calculate the final years left on Venus', () => {
  expect(newUser.leftVenus()).toBeGreaterThan(46);
});

});

