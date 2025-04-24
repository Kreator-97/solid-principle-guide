# Principios SOLID
Los principios son recomendaciones que te van a ayudar a escribir código siguiendo buenas prácticas. Cuando un principio no es seguido no significa que esté mal o que algo no va a funcionar, simplemente es un indicativo de que algo pudo hacerse de una mejor manera.

SOLID es el acrónimo de lo siguientes puntos:

- `Single responsability`: Responsabilidad única
- `Open and Close`: Abierto y cerrado
- `Liskov substitution`: Sustitución de Liskov
- `Interface Segregation`: Segregación de interfaz
- `Dependency inversión`: Inversión de dependencias

## Principio de responsibilidad única
    Una clase debe tener una única razón para cambiar.

Esta frase ejemplifica que tener más de una responsabilidad en nuestras clases o módulos hace que sea difícil de leer, testear y mantener.

Tener una sola responsabilidad no es lo mismo que hacer una sola cosa, es decir, que cuando cumplimos con el principio de resposabilidad única, tenemos clases y módulos que pueden tener varias funcionalidades pero que está estrechamente relacionadas entre sí.

Si tenemos mas de una responsabilidad, hay que dividirla en más clases.

### Ventajas
Sin implementamos este principio en nuestros proyectos, al momento de escalar y mantener el código encontraremos todo en un solo lugar, evitando la duplicidad de código.

## Principio abierto-cerrado
    Un módulo debe estar abierto para su extensión, pero cerrado para su modificación.

Esto significa que deberías poder agregar nueva funcionalidad sin tener que cambiar el código existente.

### Ventajas
Así evitas romper cosas que ya funcionan y mantienes tu código más estable y mantenible.

## Principio de sustitución de liskov
    Las clases derivadas deben poder ser utilizadas en lugar de sus clases base sin alterar el funcionamiento del programa.

Si una clase Hija hereda de una clase Padre, deberías poder usar la hija en cualquier lugar donde se espera la clase padre, sin que el sistema se rompa ni cambie su comportamiento esperado.

### Ventajas
Evita comportamiento inesperados en el sistema.

## Principio de la segregación (división) de interfaces
    Los clientes (módulo) no deberían ser forzados a depender de interfaces que no usan.

Para cumplir con este principio, debemos de crear interfaces más pequeñas en lugar de una interfaz enorme. Cuando una interfaz tiene demasiadas responsabilidades, fuerza a las clases a implementar cosas que no necesitan.

Es mejor tener interfaces especificas que interfaces enormes.

## Principio de inversión (intercambio) de dependencias.
    Los modulos de alto nivel no deben depender de los módulos de bajo nivel. Ambos deben depender de abstracciones.

En otras palabras, los modulos deben de depender de abstracciones y no de implementaciones concretas.

### Ventajas
Evita el alto acoplamiento de código.
