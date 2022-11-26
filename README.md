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

Vamos a crear 3 componenetes, **Personaje**, **Tarjetas** y **Barra de Busqueda**.

- El componente `Personaje` permite a cada tarjeta mostrar el **nombre** de un personaje, su **especie**, **género** e **imagen**, y ademas un botón para cerrar la tarjeta.

- El componente `Tarjetas` renderiza *varios* componentes de `Personaje`, logrando a traves de un arreglo reusar dicho componente para mostrar cada personaje invocado.

- En principio el componente `Barra de Busqueda` agrega un personaje a traves del boton `Agregar`.

---


Listo! Primer app hecha con React 👏🏼🚀

<!-- 

### 2. Filtrado de personajes

Ahora que ya tenemos el listado de personajes en pantalla, la segunda parte consiste en poder buscarlos por nombre. Para eso, añadimos un input a la interfaz, de forma que al ir escribiendo un nombre queden en la interfaz solo los personajes cuyo nombre contiene las letras escritas. En el pantallazo de arriba, al escribir 'Ric' aparecen personajes cuyo nombre completo contiene esas letras en ese orden.

### 3. Componentes del listado de personajes

El listado debe tener los siguientes componentes como mínimo:

- Filtros
- Listado
- tarjeta de personajes
- Detalle de cada personaje

### 4. Detalle de personajes

Vamos a implementar una nueva funcionalidad: al hacer clic sobre la tarjeta de un personaje, su información aparecerá a pantalla completa. Para hacer esto usaremos rutas y React router. En la pantalla de detalle aparecerá además de la foto, nombre y especie, el planeta de origen, el número de episodios en los que aparece y si está vivo o muerto.

## 5. Detallitos de calidad

1. Como nos gusta cuidar la semántica, el campo de texto debe estar recubierto por una etiqueta `<form/>`.
2. Si estando en el campo de filtrado pulsamos intro debéis impedir que el navegador navegue o cambie la ruta sin querer.
3. El filtro debe filtrar independientemente de que la usuaria introduzca el texto en mayúsuclas o minúsculas.
4. Si se busca por un texto por ejemplo **"XXX"** y no hay ningún personaje que coincida con dicho texto se debe mostrar un mensaje del tipo **"No hay ningún personaje que coincida con la palabra XXX"**.
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

3. Ordenación: Un extra interesante sería que ordenáseis el listado de personajes alfabéticamente por nombre.

## Espero que os guste!!

![Rick dancing](https://media2.giphy.com/media/35nU79vBbeOm4/giphy.gif?cid=ecf05e473155d3ac5d165524e2b17b11448c7f743f71c54a&rid=giphy.gif)
Footer -->