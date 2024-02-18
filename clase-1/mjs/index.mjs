// .js -> por defecto utiliza CommonJS
// .mjs -> para utilizar ES Modules
// .cjs -> para utilizar CommonJS

import { sum } from './sum.mjs'
import { sub } from './subst.mjs'
import { mult } from './mult.mjs'

console.log(sum(1, 2))
console.log(sub(1, 2))
console.log(mult(1, 2))