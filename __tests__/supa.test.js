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

test ('this should test life Expectancy calculation, should return a random number', () => {
  expect(newUser.lifeExpectancy()).toBeLessThan(100);
});

});
