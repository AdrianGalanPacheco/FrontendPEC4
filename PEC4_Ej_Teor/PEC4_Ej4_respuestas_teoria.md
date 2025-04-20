# 1. Explica qué son y cuándo se deberían utilizar las siguientes variables locales de la directiva estructural `NgFor`:
* **`index`:** Corresponde al índice actual del elemento dentro del array y se usa cuando se necesite mostrar o usar la posición del elemento.
* **`even`:** Se convierte en `true` si el índice del elemento es par y se utiliza para aplicar estilos alternos a los elementos pares, como en tablas.
* **`odd`:** Se convierte `true`si el índice del elemento es impar y se utiliza para aplicar estilos alternos a los elementos impares, como en tablas.
* **`first`:** Se convierte `true` si es el primer elemento del array y se usa para tratar el primer elemento de forma diferente.
* **`last`:** Se convierte en `true` si es el último elemento del array y se usa para tratar el último elemento de forma diferente.

# 2. ¿Para qué sirve la opción `trackBy` de la directiva estructural `NgFor`? Pon ejemplos de uso.
La opción `trackBy` se usa para mejorar el rendimiento de Angular al usar listas. Sirve para identificar de forma única a acada elemento.
`trackBy` recibe una función con dos parámetros, `index` e `item`.

## Ejemplo de uso 1
Aprovechando el ejemplo de los artículos del ejercicio 3, en caso de que tengamos una lista con múltiples artículos y querramos mostrar su nombre y precio, podríamos usar trackBy para poder mostrar esta información.
Para facilitar el ejemplo, supongamos que `Article` está formado por `id`, `name` y `price`. Podríamos definir una función llamada `trackByID` que reciba el índice del producto y el producto. De esta manera, Angular identifica cada artículo por su `id`, entonces, si se actualiza solo uno, solo se tiene en cuenta ese elemento.

En el componente tendríamos lo siguiente:
```
export class ArticleList {
    articles = [
        {id: 1, name: 'Camiseta', price: 9.99},
        {id: 2, name: 'Pantalón', price: 24.99}
    ];

    trackByID(idx: number, article: any): number {
        return article.id;
    }
}
```

En la plantilla HTML tendríamos lo siguiente:
```
<ul>
    <li *ngFor="let article of articles; trackBy: trackByID">
        {{ article.name }} - {{ article.price }}€
    </li>
</ul>
```

## Ejemplo de uso 2
En el ejemplo anterior se usaba el `id` de los artículos. En este ejemplo, los elementos no tendrán un `id`, pero sabemos que el orden no cambiará. El ejemplo consistirá en obtener los días de la semana ordenados. Para ello, definiré una función `trackByIndex` que recorra todos los días de la semana y los muestre. De esta manera, si el contenido de la lista cambia pero la posición no, se evitará volver a renderizar.

En el componente tendríamos lo siguiente:
```
export class DayList {
    days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

    trackByIndex(idx: number, item: any): number {
        return idx;
    }
}
```

En la plantilla HTML tendríamos lo siguiente:
```
<ol>
    <li *ngFor="let day of days; trackBy: trackByIndex>
        {{ day }}
    </li>
</ol>
```

# 3. ¿Es posible ejecutar dos directivas estructurales simultáneamente? Explica la razón tanto si es posible como si no lo es.
No es posible ejecutar dos directivas a la vez. Esto se debe a que Angular internamente modifica la estructura del DOM. Al escribir dos directivas seguidas, ambas requieren controlar la creación del mismo elemento en el DOM.

En caso de querer usar dos directivas, se podrían anidar una dentro de otra, pero nunca simultáneamente.