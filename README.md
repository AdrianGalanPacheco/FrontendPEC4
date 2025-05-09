# PEC 4: Frameworks: Introducción a Angular
Login UOC: agalanpa

Alumno: Adrián Galán Pacheco

## Descripción de la práctica
Esta práctica se compone de siete ejercicios.

### Ejercicio 1: Instalación y configuración de Angular CLI
Este ejercicio consiste en instalar Angular CLI en el equipo y explicar la función de varias opciones de Angular CLI.

No me ha resultado complicado gracias a la documentación oficial de [Angular CLI](https://angular.dev/cli).

### Ejercicio 2: Hola Mundo con Angular
Este ejercicio se divide en 3 actividades. La primera consiste en la creación de un proyecto Angular llamado **ecommerce** y explicar su estructura y ficheros. La segunda actividad consiste en explicar los decoradores generados por Angular CLI. La última actividad consiste en responder una pregunta teórica sobre la inyección del template y estilos en línea de un componente.

No me ha resultado muy difícil de resolver este ejercicio. Toda la información necesaria se encuentra en la documentación de [Angular](https://v17.angular.io/docs) y en la de [TypeScript](https://www.typescriptlang.org/docs/).

### Ejercicio 3: Primer componente en Angular
Este ejercicio consiste en varias actividades para crear el componente `article-item` paso a paso.

He leído el [Capítulo 2 de Learning O'Reilly](https://learning.oreilly.com/library/view/angular-up-and/9781491999820/ch02.html) y he seguido sus explicaciones para realizar el ejercicio.

### Ejercicio 4: Directivas de atributo y directivas estructurales
Este ejercicio consiste en tres actividades. La primera consiste en la explicación de diferentes directivas estructurales `NgFor`. Las últimas actividades consisten en responder dos preguntas teóricas relacionadas con `trackBy` y la ejecución de dos directivas estructurales simultáneamente.

Como en los ejercicios previos, he consultado la documentación oficial de [Angular ngFor](https://blog.angular-university.io/angular-2-ngfor/) para resolver este ejercicio.


### Ejercicio 5: Directivas en nuestro proyecto
Este ejercicio consiste en dos actividades. La primera consiste en usar la directiva `ngClass` para cambiar estilos. La segunda consiste en usar la directiva de estructura `ngIf` para mostrar y ocultar elementos.

No me ha resultado complicado resolver este ejercicio. Viendo varios ejemplos de uso de estas directivas, he sido capaz de aplicarlas correctamente.

### Ejercicio 6: Teoría de componentes
Este ejercicio consiste en cinco actividades. La primera consiste en explicar los `style encapsulation` de los componentes. La segunda y la tercera actividad consisten en explicar `shadow DOM` y `changeDetection` respectivamente. La cuarta actividad consiste en explicar las ventajas y desventajas de `Default` y `OnPush`. La última actividad consiste en explicar el ciclo de vida de los componentes.

Para la realización de las dos primeras actividades, he consultado la documentación de [Angular view encapsulation](https://v17.angular.io/guide/view-encapsulation). Para la realización de la tercera actividad, he consultado la documentación de [Angular change detection](https://v17.angular.io/guide/change-detection). Para la realización de la cuarta actividad he consultado la documentación de [Angular OnPush](https://angular.dev/best-practices/skipping-subtrees). Para la realización del último ejercicio he consultado la documentación de [Angular Component Lifecycle](https://v17.angular.io/guide/lifecycle-hooks).

### Ejercicio 7: Componentes en nuestro proyecto
Este ejercicio consiste en la creación de un nuevo componente `article-list` que contenga 3 artículos basados en el componente `article-item`. Además, también se pide usar `templates` y estilos en línea, realizar modificaciones en la lógica y añadir la estrategia `ChangeDetection`.

Al principio me ha costado entender cómo relacionar los componentes, pero con paciencia e investigación de ejemplos por Internet, he sido capaz de vincularlos. También, me ha resultado un poco compleja la inserción de la estrategia `ChangeDetection` usando los emisores de eventos, pero gracias a un [ejemplo de uso](https://blog.angular-university.io/how-does-angular-2-change-detection-really-work/), he sido capaz de añadirla.