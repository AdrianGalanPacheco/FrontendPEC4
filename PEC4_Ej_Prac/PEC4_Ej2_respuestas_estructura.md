# 1. ¿Qué comando debes utilizar para crear un nuevo proyecto Angular utilizando Angular CLI denominado ecommerce? Con Angular CLI crea el proyecto angular ecommerce y explica brevemente la estructura y ficheros que ha generado Angular CLI.

He utilizado el comando `ng new ecommerce` para crear un nuevo proyecto Angular llamado ecommerce.

## Directorio .vscode
* **extensions.json:** Lista de extensiones recomendadas.
* **launch.json:** Configura la ejecución y depuración del proyecto.
* **tasks.json:** Define tareas.

## Ficheros de configuración en la raíz del proyecto
* **.editorconfig:** Define configuración común para los editores de texto. 
* **.gitignore:** Lista de ficheros y directorios que Git debe ignorar.
* **angular.json:** Archivo de configuración principal de Angular CLI. Contiene cómo se hará el *build*, *serve* y *test* del proyecto.
* **package-lock.json:** Archivo que bloquea las versiones exactas de las dependencias instaladas.
* **package.json:** Lista de dependencias y scripts.
* **README.md:** Documento que muestra cómo ejecutar el proyecto.
* **tsconfig.app.json:** Configuración de TypeScript para el proyecto Angular.
* **tsconfig.json:** Configuración del compilador TypeScript.
* **tsconfig.spec.json:** Configuración de TypeScript para los tests.

## Directorio node_modules
Contiene todas las dependencias que el proyecto Angular necesita para funcionar.

## Directorio src
* **favicon.ico:** Icono que aparece en la pestaña del navegador.
* **index.html:** Archivo HTML utilizado como plantilla por Angular para cargar todo el proyecto en el navegador.
* **main.ts:** Inicia Angular.
* **styles.css:** Archivo CSS que contiene los estilos que se aplicarán al proyecto.

### Directorio app
* **app.component.css:** Contiene los estilos del componente `AppComponent`.
* **app.component.html:** Plantilla del componente `AppComponent`.
* **app.component.spec.ts:** Archivo de tests unitarios para `AppComponent`.
* **app.component.ts:** Define la lógica del componente `AppComponent`.
* **app.config.ts:** Contiene la configuración principal de la aplicación Angular.
* **app.routes.ts:** Define las rutas de navegación.

### Directorio assets
* **.gitkeep:** Garantiza que el directorio se incluya vacío en el repositorio.

# 2. Explica cada uno de los siguientes decoradores generados por Angular CLI, detallando cada una de las propiedades que se definen en app.module.ts y app.component.ts.

No he obtenido el archivo app.modules.ts en la instalación del proyecto. Según información de Internet, esto se debe a que el proyecto utiliza componentes *standalone*. Esto permite omitir el módulo principal.

## app.module.ts - @NgModule (declarations, imports, providers, bootstrap)
`@NgModule` se usa para configurar el módulo principal de la aplicación.
* **declarations:** Define todos los componentes, directivas y tuberías (pipes).
* **imports:** Contiene los módulos importados.
* **providers:** Servicios que deben ser proporcionados a los módulos.
* **bootstrap:** Especifica el componente principal que Angular debe usar para iniciar la aplicación.
  
## app.component.ts - @Component (selector, templateUrl, styleUrls)
`@Component` se usa para definir un componente Angular.
* **selector:** Nombre que Angular usa para identificar el componente en HTML.
* **templateUrl:** Especifica el HTML que se debe usar para el componente.
* **styleUrls:** Define los estilos que se deben aplicar al componente.

# 3. ¿Es posible poder inyectar el template y los estilos en línea de un componente sin necesidad de especificarlos en templateUrl, styleUrls? ¿Es recomendable hacer esto?
Sí. Angular permite definir tanto el HTML como los estilos dentro del decorador `@Component` con las propiedades `template` y `styles`.

Depende del proyecto se puede recomendar, pero por lo general no es una buena práctica. Si el proyecto es pequeño, esto simplifica la cantidad de archivos a crear. En cambio, si el proyecto es grande, se dificulta la reutilización de código, no habría escalabilidad en el proyecto y habría problemas de rendimiento, ya que Angular debe procesar más código directamente dentro de los componentes.
