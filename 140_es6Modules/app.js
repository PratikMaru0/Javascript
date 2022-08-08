import {fName as f} from "./utils/fName.js";
import {age} from "./utils/age.js";
import Person , {Person2} from "./utils/person.js";

// TODO: FIXME: Humae type="module" karna padega html script file linkage mai warna error aa jayega humae.
// Jabhi hum type="module" karte hai tabhi humae defer likne ki jarurat nhi hai.

console.log(f,age);  // Boom humae chije mil rhi hai ache se. 😉🤟

const person = new Person("John","Doe");
const person2 = new Person2("John","Doe");

person.info();
person2.info();