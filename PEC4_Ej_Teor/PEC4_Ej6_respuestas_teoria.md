# 1. ¿Cuáles son los `style encapusaltion` de los componentes? Pon un ejemplo de uso de cada uno de ellos.
* **`Shadow DOM`:** Utiliza la interfaz integrada del navegador.
```
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-shadowdom',
    template: `<p>Emulated text</p>`;
    styles: [`
        p {
            color: green;
        }
    `],
    encapsulation: ViewEncapsulation.ShadowDom
})
```
De esta manera, solo el componente `app-shadowdom` tendrá `<p>` de color verde. Esto no se podrá sobrescribir ni con CSS.

* **`Emulated`:** Modifica los selectores CSS del componente para que solo se apliquen a la vista del componente y no afecten a otros elementos.
```
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-emulate',
    template: `<p>Emulated text</p>`;
    styles: [`
        p {
            color: green;
        }
    `],
    encapsulation: ViewEncapsulation.Emulated
})
```
De esta manera, solo `<p>` dentro de `app-emulate` se verá de color verde. Los `<p>` de otros componentes no cambiarán.

* **`None`:** No se aplica ningún tipo de encapsulación de vistas.
```
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-none',
    template: `<p>None text</p>`;
    styles: [`
        p {
            color: green;
        }
    `],
    encapsulation: ViewEncapsulation.None
})
```
De esta manera, cualquier `<p>` se verá verde, independientemente de si `<p>` se encuentra en este componente o en otro.

# 2. ¿Qué es el `shadow DOM`?
Es un estándar web que encapsula estilos, permitiendo a los componentes web tener su propio árbol DOM, aislado del resto del documento. Permite encapsular HTML, CSS y JavaScript de un componente evitando que los estilos externos le afecten.

# 3. ¿Qué es el `changeDetection`?
Es el mecanismo que usa Angular para mantener sincronizado el modelo de datos con la vista. Es decir, detecta cuándo cambian los datos y actualiza la interfaz automáticamente.

# 4. ¿Qué diferencias existen entre las estrategias `Default` y `OnPush`? ¿Cuándo debes usar una y otras? Ventajas e inconvenientes.
* **`Default`:** Comprueba todos los componentes descendientes cada vez que ocurre cualquier cambio. Se suele usar en proyectos pequeños o medianos cuando los datos cambian frecuentemente.
    - **Ventajas:**
        1. Es más simple de usar ya que todo se actualiza automáticamente.
        2. Menos probabilidad de errores.
        3. No hay preocupación por cómo se modifican los datos.
    - **Inconvenientes:**
        1. Menor rendimiento para aplicaciones grandes.
        2. Puede haber renderizados innecesarios si se actualizan muchos componentes.
* **`OnPush`:** Actualiza la vista solo si cambia alguna propiedad marcada con `@Input()` o si se lanza manualmente la detección con `ChangeDetectorRef`. Se suele usar en proyectos grandes, con arquitecturas reactivas o cuando se requiera optimizar el rendimiento.
    - **Ventajas:**
        1. Tiene mejor rendimiento ya que hace menos comprobaciones de cambio.
        2. Evita renderizados innecesarios.
    - **Inconvenientes:**
        1. Es más complejo, ya que el desarrollador debe controlar cuándo y cómo se actualiza la vista.
        2. Los datos deben ser inmutables o gestionados con `ChangeDetectorRef` o `async pipe`.

# 5. Explica con detalles el ciclo de vida de los componentes. Haz hincapié en cuándo se disparan los `hooks` `OnChanges`, `OnInit`, `AfterViewInit` y `OnDestroy`, puesto que son los más utilizados.
* **`OnChanges`:** Se ejecuta siempre que se establecen o cambian propiedades de entrada enlazadas a datos. Se dispara antes de `OnInit` y cada vez que alguna propiedad de entrada enlazada a datos cambia.
* **`OnInit`:** Se ejecuta una sola vez justo después de que Angular haya inicializado todas las propiedades de entrada. Se dispara una única vez en todo el ciclo de vida del componente después de inicializarse las propiedades de este.
* **`AfterViewInit`:** Se ejecuta después de que la vista del componente y sus elementos se hayan renderizado. Se dispara una única vez tras renderizar el HTML del componente y sus hijos.
* **`OnDestroy`:** Se ejecuta justo antes de que se destruya el componente. Se dispara cuando se elimina el componente de la vista.