import { setWorldConstructor } from "cucumber";

export const World = function() {
  setWorldConstructor(World);
};