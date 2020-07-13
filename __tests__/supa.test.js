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

test ('this should test life Expectancy on Mercury (mercury age + life expectancy)', () => {
  expect(newUser.estimatedMercury()).toEqual(195);
});

test ('this should test life Expectancy on Venus (venus age + life expectancy)', () => {
  expect(newUser.estimatedVenus()).toEqual(121);
});

test ('this should test life Expectancy on Mars (Mars age + life expectancy)', () => {
  expect(newUser.estimatedMars()).toEqual(90);
});

test ('this should test life Expectancy on Jupiter (Jupiter age + life expectancy)', () => {
  expect(newUser.estimatedJupiter()).toEqual(77);
});

test ('this should calculate the final years left on Mercury', () => {
  expect(newUser.leftMercury()).toEqual(120);
});

test ('this should calculate the final years left on Venus', () => {
  expect(newUser.leftVenus()).toEqual(46);
});

test ('this should calculate the final years left on Mars', () => {
  expect(newUser.leftMars()).toEqual(15);
});

test ('this should calculate the final years left on Jupiter', () => {
  expect(newUser.leftJupiter()).toEqual(2);
});

});

