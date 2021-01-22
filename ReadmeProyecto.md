# Social Network: "Beauty Tips"

link a la demo:

## Índice

* [1. Definición de producto](#2-Definición-de-producto)
* [2. Proceso de diseño](#3-Proceso-de-diseño)
* [3. Historias de usuario](#4-Historias-de-usuario)
* [4. Test de usabilidad](#5-Test-de-usabilidad)


***

* [1. Definición de producto](#1-Definición-de-producto)

En este proyecto nos enfocamos en crear una red social de maquillaje, el cual es un tema muy recurrente hoy, debido a su uso cotidiano en diferentes ámbitos como belleza, arte entre otros. 

### Definición del problema     

La problemática que nosotras vemos asociada a este tema es que muchas de las recomendaciones de los productos dentro de las redes sociales ya existentes son realizadas por personas que son previamente remuneradas para esto, lo que hace que no sea completamente creíble y aterrizada a las necesidades del usuario real. 

### Solución del problema

Nuestra propuesta para resolver este problema es la creación de una red social dedicada a esta temática, en donde las recomendaciones sean directamente de usuarios reales, lo que daría más seguridad respecto de qué productos comprar para cubrir una necesidad específica.

### Definición del usuario

Los usuarios a los que queremos apuntar, son personas de entre 20 y 40 años, que les guste el maquillaje y que lo usen por lo menos en ocasiones especiales. Personas a las que les gustaría ver y conocer más sobre maquillaje específico que se adapte a sus necesidades y que además quieran compartir experiencias sobre los productos que conocen.

* [2. Proceso de diseño](#3-Proceso-de-diseño)

Para definir nuestro prototipo, realizamos una encuesta con preguntas clave para definir el contenido de nuestra red social. Los resultados de esta encuesta nos ayudaron a determinar lo siguiente:
-Decubrimos que los usuarios desean que contenga recomendaciones de rutinas diarias de cuidado facial o maquillajes favoritos, poder ver publicaciones que incluyan imágenes de los productos, recomendaciones por tipo de maquillajes, etc.
-Logramos definir el logo de la red social. 
-Seleccionamos la paleta de colores.

### Prototipo de baja fidelidad

A continuación podrán ver las imágenes de nuestros primeros sketches.

![sketch 1](/src/img/Sketch1.jpeg)
![sketch 2](/src/img/Sketch2.jpeg)
![sketch 3](/src/img/Sketch3.jpeg)

Llegamos a un consenso acerca de las páginas que queríamos ver dentro de la red social y su diseño (era similar entre los sketches), por eso comenzamos a trabajar en los prototipos de figma.

### Prototipo de alta fidelidad

Plasmamos nuestros sketches en la plataforma figma, donde nos guiamos por los principios de diseño visual. 
Creamos dos prototipos:

**Blanco y negro:**
Este se hizo para enfocarnos en la funcionalidad del producto y así ver la posición de los botones y la estructura general del proyecto.

**Iteración:** 
Se aconsejó reemplazar el menú desplegable que contenía "ver perfil" por "reportar", para las publicaciones que son de otros usuarios. Se agregó el nombre del usuario al lado izquierdo del banner principal que direcciona directamente al perfil del usuario.

**Color:**
Una vez claro el concepto central del proyecto, empezamos a incluir la paleta de colores y el diseño visual final relacionado con el proyecto.

**Iteración:**
Disminuimos la cantidad de vistas para la página de bienvenida, dejando un diseño más intuitivo (nos basamos en los diseños de las páginas de bienvenida de las redes sociales más populares). También eliminamos las divisiones del menú para conservar un diseño minimalista.

![prototipo blanco y negro](/src/img/figmaprototipobyn.png)
![prototipo final](/src/img/figmaprototipofinal.png)
![prototipo logo app de play store](/src/img/Logotipoapp.png)

Dejamos aquí el enlace de [Figma](https://www.figma.com/file/6vWRfkAoUx1Jtb4ZvdKRxD/Red-Social?node-id=0%3A1) con el proyecto.

Finalmente, cuando terminamos nuestro diseño en figma, lo testeamos con dos posibles futuros usuarios. Los entrevistamos y su opinión nos ayudó mucho, ya que ambos coincidieron en que nuestro producto y/o solución sí resolvía la problemática. A ambos les gustó el prototipo de la aplicación tanto en funcionalidad como en su diseño visual. Además, afirmaron que sí usarían la aplicación, debido a que se veía útil y que les daría confianza usarla, porque las referencias vendrían de usuarios reales.


## 4. Historias de usuario

### Primera Historia:

- Definición de la Historia:
yo como: usuario
quiero: poder ingresar a la aplicación ya sea con usuario y contraseña y que se oculte la clave o por medio de google (FireBase)
para: ingresar a la red social

- Criterios de Aceptación:
* [ ] Crear usuario con nombre, correo y contraseña
* [ ] Poder iniciar sesión con google
* [ ] Registrarse (que el usuario reciba un correo de verificación)
* [ ] Restablecer la contraseña (que el usuario reciba correo para restablecer la contraseña)**

### Segunda Historia:

- Definición de la Historia:
yo: como usuario
quiero: ver el muro principal de la red social
para: ver las publicaciones de todos los usuarios

- Criterios de Aceptación:
* [ ] Creación del muro principal
* [ ] Creación de menú de navegación (inicio, publicar, buscar, mapa de tiendas)
* [ ] Poder desloguearse de la aplicación y volver a la página inicial
* [ ] Que aparezca el nombre del usuario que inició sesión en la página de bienvenida

### Tercera Historia:

- Definición de la Historia:
yo: como usuario
quiero: poder hacer publicaciones en la red social
para: expresar y mostrar mis experiencias con productos de maquillaje

- Criterios de Aceptación:
* [ ] Creación del muro principal
* [ ] Creación de menú de navegación (inicio, publicar, buscar, mapa de tiendas)
* [ ] Poder desloguearse de la aplicación y volver a la página inicial
* [ ] Que aparezca el nombre del usuario que inició sesión en la página de bienvenida

### Cuarta Historia:

- Definición de la Historia:
yo: como usuario
quiero: poder reaccionar a otras publicaciones de usuarios
para:- compartir opiniones y gustos por el maquillaje

- Criterios de Aceptación:
* [ ] Poder reportar publicaciones inapropiadas de otros
* [ ] Poder dar me gusta a publicaciones favoritas
* [ ] Poder comentar publicaciones de otros

### Quinta Historia:

- Definición de la Historia:
yo: como usuario
quiero: ver un mapa con las tiendas de maquillaje
para: comprar productos recomendados por los usuarios de la red social

- Criterios de Aceptación:
* [ ] Poder ver el mapa
* [ ] Que se muestren las tiendas en el mapa con un icono distintivo
* [ ] Que al hacer click te muestre información de la tienda (dirección)

### Sexta Historia:

- Definición de la Historia:
yo: como usuario
quiero: poder buscar dentro de las publicaciones
para: encontrar publicaciones que se relacionen con mi busqueda

Criterios de Aceptación:
* [ ] Poder buscar en una searchbar
* [ ] Que se muestren resultados asociados a las palabras claves
* [ ] Al hacer click en alguno de los resultados te direccione o muestre la publicación.

### Definición de Terminado para todas las historias:

* [ ] Debe ser una SPA.
* [ ] Debe ser responsive.
* [ ] Deben haber recibido code review de al menos una compañera de otro equipo.
* [ ] Hicieron los test unitarios
* [ ] Testearon manualmente buscando errores e imperfecciones simples.
* [ ] Hicieron pruebas de usabilidad e incorporaron el feedback de los usuarios como mejoras.
* [ ] Desplegaron su aplicación y etiquetaron la versión (git tag).

## 5. Test de usabilidad

### Test usabilidad con aplicación web:
