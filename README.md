# Rick and Morty - Creando con React App

## Descripción del ejercicio

Actividad propuesta por BootCamp, para crear componentes de React en Front-End - Rick & Morty App -
Después de una breve presentación por parte del programador, se describe en cada punto las actividades realizadas y tiempo promedio estimado en cada desarrollo. 
Realizado con `React` - `Componentes` - `JSX` - `Componentes funcionales y componentes de clase` - `Props`.

## Autor ✍️
**Edisson Prieto Garavito**
 
- [LinkedIn](https://www.linkedin.com/in/eprietog/)
- [Portafolio Web](https://www.linkedin.com/in/eprietog/)
<!-- - [Behance](https://www.linkedin.com/in/eprietog/) -->

## Ver ejemplo en vivo
- [Enlace Github Pages](https://eprieto85.github.io/rick_and_morty/) 🔗 *https://eprieto85.github.io/rick_and_morty/*

## Instalación 
No requiere instalación. Es un prototipo de muestra, solo clic en el enlace anterior.

## Contratación
Si quieres contratarme puedes escrbirme a [edissonprietog@gmail.com](edissonprietog@gmail.com) o para consultas.

<br />


---

# 1. Integración

## **Duración estimada** 🕒

90 minutos
<br />

---

## Crear una nueva App _CRA_ con React

---

Con lo anterior creado y testeado vamos a crear nuestra nueva app, a traves de la terminal.

```bash
npx create-react-app rick_and_morty
```

### **👩‍💻 Crear los componentes**

---

Inicialmente voy a crear 3 componentes, **Tarjetas**, **Filtro**, y **Barra de Búsqueda**.

- El componente `Tarjetas` permite a cada tarjeta mostrar el **nombre** de un personaje, su **especie**, **género**, **estado** e **imagen**, y además un botón para cerrar la tarjeta.

- El componente `Tarjetas` renderiza *varios* componentes de `Personaje`, logrando a través de un arreglo reusar dicho componente para mostrar cada personaje invocado.

- En principio el componente `Barra de Búsqueda` agrega un personaje a través del botón `Agregar`.

---


Listo! Primer app hecha con React 👏🏼🚀



### 2. Filtrado de personajes

Ya con el listado de personajes en pantalla, la segunda parte consiste en poder buscarlos por nombre. Para eso, añadimos un input a la interfaz, de forma que al ir escribiendo un nombre queden en la interfaz solo los personajes cuyo nombre contiene las letras escritas. En el pantallazo de arriba, al escribir 'Ric' aparecen personajes cuyo nombre completo contiene esas letras en ese orden.

### 3. Componentes del listado de personajes

El listado debe tener los siguientes componentes como mínimo:

- Filtros
- Listado
- tarjeta de personajes
- Detalle de cada personaje

### 4. Detalle de personajes

Se va a implementar una nueva funcionalidad: al hacer clic sobre la tarjeta de un personaje, su información aparecerá a pantalla completa. Para hacer esto usaremos rutas y React router. En la pantalla de detalle aparecerá además de la foto, nombre y especie, el planeta de origen, el número de episodios en los que aparece y si está vivo o muerto.

## 5. Detalles de calidad

1. Para ir resumiendo la cantidad de detalles, se ha creado un  `Login`, esto permite que el ingreso al área privada, sea casi seguro.
2. Al digitar cualquier ruta desde la barra de dirección, si no se encuentra logeado el usuario, no podrá acceder a dicha ruta, el Dashboard es la primera página que aparece al ingresar, y esta da una serie de instrucciones de que se encuentra en cada una de las páginas.
3. Algunas páginas disponen de publicidad, esto para atraer a generar compra al visitante, motivo por el cual estos proyectos, invitan al visitante a contratar los servicios de desarrollo o compra de los artículos que en estas puede hallar.
4. La `App` tiene el `Home` con algo de publicidad, esta parte de la página también explica en que consiste el proyecto, en este caso es solo una muestra de habilidades en desarrollo que juegan con diseños muy básicos, algo de animaciones y modelo responsivo para dispositivos móviles.
5. Al entrar en el detalle de un personaje y a continuación pulsar atrás, el campo de texto debe mostrar el texto que tenía anteriormente.

### 6. Bonus

1. Mejoras visuales:

- Mostrar la especie y si un personajes está muerto con un icono.
- Usar algún sistema de grid para pintar el listado de personajes.
- Que funcione bien el responsive en dispositivos pequeños.

2. Url compatible:

- Como ejercicio extra os proponemos que la URL del detalle de personaje sea compartible, es decir, que si visitamos esa URL directamente en el navegador se vea el detalle del personaje.
- Y en el caso de que el usuario navegue a una URL inexistente como por ejemplo http://localhost:3000/#/detail/12345 (el id 12345 no existe) debemos mostrar un mensaje del
  tipo "El personaje que buscas no existe".

3. Detalles adicionales:

- Hay muchos cambios que termine realizando, aunque me ha tomado más tiempo de lo esperado, por eso dejare hasta este punto. Deje pendiente el espacio `My Cards`, este espacio pretendía mostrar una barra de búsqueda adicional, en esta, el usuario busca el personaje que consulta y lo va agregando. Esto permite que se vallan acumulando las tarjetas y muestra una opción que permite también dar un like a cada tarjeta. Este fragmento requiere crear una parte adicional de componentes, pero quiero adelantar otros proyectos por lo cual dejare este proyecto hasta este punto para continuar.

## Casi Terminado!!

![Rick dancing](https://media2.giphy.com/media/35nU79vBbeOm4/giphy.gif?cid=ecf05e473155d3ac5d165524e2b17b11448c7f743f71c54a&rid=giphy.gif)
Footer