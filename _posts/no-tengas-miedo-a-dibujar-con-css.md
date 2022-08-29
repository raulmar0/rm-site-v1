---
title: '🎃 No tengas miedo a dibujar con CSS'
date: '2020-10-04' 
tags: ['dev']
---

Originalmente publicado en [dev.to](https://dev.to/raulmar/no-tengas-miedo-a-dibujar-con-css-1ck)


La temporada de **Halloween** está a la vuelta de la esquina es por eso que dibujaremos una decoración escalofríante a tu página web con CSS. 

![1](https://dev-to-uploads.s3.amazonaws.com/i/2vwau719fl596smlavyx.gif)
 
Este dibujo está compuesto por solo tres < div >
```html
<div class="stem"></div>
<div class="face"></div>
<div class="pumpkin"></div>
```

Sin embargo, se usarán los pseudo-elementos 

- ::before
- ::after

Así como también la propiedad "box-shadow" para dibujar más figuras de la calabaza sin crear más < div >

![2](https://dev-to-uploads.s3.amazonaws.com/i/z4ls301hkd01u1xxyayc.png)
 
 

Otras propiedades importantes que vamos a utilizar son:

- border-radius
- clip-path
- animaciones
- position
- transform
- variables nativas de CSS

# Paso inicial, variables y preparativos

---

Con CSS vanilla podemos usar **variables** para que si en un futuro queremos cambiar algo no tengamos que ir buscando que cambiar a lo largo de todo el código

Cuando las declaramos en :root lo que estamos haciendo que es estén disponibles de **manera global** 

```css
:root {
  --main-bg-color: #422261;
  --face: #422261;
}
```

Otra cosa que podemos hacer antes de comenzar es poner **márgenes y padding a 0** para que no nos molesten dibujando así como también definimos un **borde rojo** que nos ayudará a ver el tamaño y forma de los < div >

```css
* {
  border: 5px solid red;
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
```

Por último antes de comenzar usaremos **CSS flexbox para alinear** nuestro elementos sin importar el tamaño de pantalla

```css
body {
  display: flex; 
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--main-bg-color);
}
```

# Paso 1, dibujar la calabaza

---

Puede que te preguntes como a partir de un "<div" que tiene forma de caja pudimos crear un **óvalo irregular**. Con "clip-path" tendría que salir un óvalo perfecto lo que haría que  el dibujo perdiera la esencia. Es por eso que usamos **"border-radius"**.

No te preocupes si no conoces la sintaxis que usa "/" para definir base y altura de las esquinas ya que existe [fancy-border-radius](https://9elements.github.io/fancy-border-radius/#100.0.0.100--) que es una herramienta que nos ayuda a generar el código para formar figuras irregulares.

```css
.pumpkin {
  position: relative;
  height: 300px;
  width: 170px;
  background-color: #f8931f;
  border-radius: 28% 72% 33% 67% / 21% 83% 17% 79% ;
  transform: rotate(13deg);
  box-shadow:
    -80px 5px 0px -2px #f8931f,   /*BS 1*/
    -40px 4px 0px -1px #fbb03b,   /*BS 2*/
    40px -15px 0px  0px #f87700,  /*BS 3*/
    80px -35px 0px -2px #f8931f;  /*BS 4*/
    
}
```

Por otro lado, usamos **"box-shadow"** para crear **copias identicas** del elemento ya que nuestra calabaza esta formada por cinco elementos identicos. 

Con box-shadow podemos modificar la **posición en X y Y** con respecto al elemento original, el **desenfoque**, la **escala** y el **color**

El resultado sería el siguiente (BS se refiere a box-shadow)

![3](https://dev-to-uploads.s3.amazonaws.com/i/9awknei31ulssvjqjj28.png)
 

# Paso 2, dibujar el tallo

---

Aquí usamos position: relative para colocar el tallo en relación a la calabaza.

```css
.stem {
  position: relative;
  bottom: 180px;
  background-color: #8cc63e;
  left: 210px;
  z-index: -1;
  width: 75px;
  height: 150px;
  transform: rotate(30deg);
  border-radius: 58% 42% 69% 31% / 44% 100% 0% 56% ;
}
```

![4](https://dev-to-uploads.s3.amazonaws.com/i/w7pitdqwaeyrgzwwxs03.png)
 
 

## Position relative vs position absolute

La diferencia más importante a la hora de dibujar es que position relative respeta la posición del elemento dentro del flujo de la página mientras que position absolute no.

- position: relative

![6](https://dev-to-uploads.s3.amazonaws.com/i/jk4j520bztc65k8qqh8l.png)


- position: absolute

![5](https://dev-to-uploads.s3.amazonaws.com/i/3zc955o57q33k57rjls9.png)
 

# Paso 2.1, crear máscara para el tallo

---

Para que el tallo tenga curvatura tenemos que usar una **técnica que es usar máscaras** **para esconder** ciertas partes de los elementos, en este caso usaremos una máscara circular. 

Esta máscara circular pudo haber sido dibujada con "border-radius: 50%" pero para practicar otra propiedad preferí usar "clip-path: circle(50% at 50% 50%)"

```css
.stem::before {
  content: '';
  border: 20px solid red;
  position: absolute;
  top: 0px;
  left: 50px;
  width: 100px;
  height: 100px;
  background-color: var(--main-bg-color);
  clip-path: circle(50% at 50% 50%);
}
```
![11](https://dev-to-uploads.s3.amazonaws.com/i/1o2jw3imqohkmpzdwhce.png) 

Aquí fue utilizado un pseudo-elemento de tallo ya que la máscara que vamos a usar forma parte del mismo tallo y así nos ahorramos un < div >

También por primera vez usamos una variable de CSS

# Paso 3, dibujar la cara

---

Para dibujar la cara usamos un elemento y sus dos pseudo-elementos

## Dibujando los ojos

### Ojo izquierdo

Vemos el uso de la varible "—face" que es de especial utilidad aquí por si queremos usar otro color no tener que cambiarlo en cada ojo y boca.

```css
.face {
  width: 75px;
  height: 30px;
  background-color: var(--face);
  position: relative;
  left: 60px;
  bottom: 40px;
  transform: rotate(10deg);
  z-index: 1;
  border-radius: 
	100% 0% 50% 50% / 0% 0% 100% 100%;
}
```

![7](https://dev-to-uploads.s3.amazonaws.com/i/18neuai1eg0shqdsn5vk.png) 

### Ojo derecho

Aquí se uso una rotación de -20deg, que son -10deg para compensar los del ojo izquiero que fuero heredamos por usar el pseudo-elemento y -10deg para girarlo a la posición que buscamos

```css
.face::after {
  content: '';
  position: absolute;
  background-color: var(--face);
  top: -25px;
  left: 120px;
  width: 75px;
  height: 30px;
  transform: rotate(-20deg);
  border-radius: 
	100% 0% 50% 50% / 0% 0% 100% 100%;
}
```

![8](https://dev-to-uploads.s3.amazonaws.com/i/wcpp9fkziuk0iyzxl4zv.png) 

## Dibujando la boca

Aquí usamos específicamente **"clip-path"** gracias a su opción de crear **polígonos personalizados** para nuestras necesidades que en esta ocasión era crear la boca más tenebrosa posible

```css
.face::before {
  content: '';
  position: absolute;
  top: 75px;
  left: 15px;
  background-color: var(--face);
  transform: rotate(-10deg);
  width: 200px;
  height: 50px;
  clip-path: polygon(0% 35%, 17% 2%, 21% 37%, 31% 17%, 36% 32%, 49% 6%, 63% 34%, 86% 8%, 85% 30%, 100% 30%, 94% 60%, 79% 98%, 66% 62%, 63% 94%, 53% 76%, 42% 100%, 31% 62%, 17% 96%, 14% 66%);
}
```

Se usan pares ordenados de coordenadas de cada punto del polígono lo cual es muy complicado sin embargo, gracias a la herramienta [clippy](https://bennettfeely.com/clippy/) podemos generar el código automáticamente

![9](https://dev-to-uploads.s3.amazonaws.com/i/c9y0qg2dxonhtnz4tjli.png) 

# ¡Listo!

---

Una vez terminado podemos eliminar el borde rojo

```css
* {
border: 1px solid red;
}
```

![10](https://dev-to-uploads.s3.amazonaws.com/i/scjs69hesfwbn12l36wr.png) 

# Bonus, animación

---

Dentro del elemento .face::before definimos los **parámetros iniciales** de la animación  que son: el **nombre** de la animación, la **duración** (que es como la velocidad) y el **número de veces** que queremos que se repita la animación además de los que ya teníamos

```css
.face::before {
  animation-name: pulse;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
}
```

Luego creamos los **keyframes** de la animación que son las **guías** para que CSS interprete lo que queremos hacer

```css
@keyframes pulse {
  0% {transform: scale(1) rotate(-10deg);}
  50% {transform: scale(1.1) rotate(-10deg);}
  100% {transform: scale(1) rotate(-10deg);}
}
```

Se mantuvo una rotación de -10deg para que se quedara recta la sonrisa 

![1](https://dev-to-uploads.s3.amazonaws.com/i/zmttexyu7zlycuplfofq.gif) 

# Recursos

---

[**Repo de github**](https://github.com/realraulmar/spookyCSS)

[**Pen**](https://codepen.io/_raulmar/pen/mdPgVeB)

[**Animaciones CSS**](https://twitter.com/mariwrios/status/1303039101730463744?s=20)

[**Clip-path**](https://twitter.com/mariwrios/status/1297730106908188673?s=20)