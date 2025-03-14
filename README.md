# change-base

`change-base` es una librería simple y eficiente para convertir números representados como arreglos de dígitos de una base a otra. Es ideal para aplicaciones que requieren manipulación de números en diferentes bases, como en sistemas de numeración no estándar, criptografía, y más.

## Instalación

Puedes instalar `change-base` usando npm:

```bash
npm install change-base
```

## Uso

La librería exporta una función llamada `changeBase` que toma tres argumentos:

- `digits`: Un arreglo de números representando los dígitos del número en la base original.

- `base`: La base original del número.

- `newBase`: La base a la que se desea convertir el número.

La función devuelve un arreglo de números representando los dígitos del número en la nueva base.

## Ejemplo

```typescript
import { changeBase } from "change-base";

// Convertir [1, 0, 1, 0] de base 2 a base 10
const digits = [1, 0, 1, 0];
const base = 2;
const newBase = 10;
const result = changeBase(digits, base, newBase);

console.log(result); // [1, 0]
```
