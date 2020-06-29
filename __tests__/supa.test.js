import { User } from "../src/supa.js";

describe ('User', () => {
  let newUser = new User(29);
  test ('this should test that the users age is 29', () => {
    expect(newUser.age).toEqual(29);
  });

test ('this should test Mercury age calculation', () => {
  expect(newUser.mercuryAge()).toEqual(120);
  });
});