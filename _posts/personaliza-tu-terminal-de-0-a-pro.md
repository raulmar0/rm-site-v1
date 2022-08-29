---
title: 'Personaliza tu terminal de 0 a PRO 😎'
date: '2020-12-26'
tags: ['dev']
---

Originalmente publicado en [dev.to](https://dev.to/raulmar/personaliza-tu-terminal-de-0-a-pro-3map)

Ten por seguro que personalizar la terminal **no te hará un hacker ni mejor desarrollador** pero te prometo que vas a sentirte como uno. 

A todo desarrolladores nos gusta la **personalización de nuestras herramientas** y que mejor que empezar con la que probablemente más interactuamos, **la terminal**.

Esta guía puede servir para **Linux, MacOS y WSL** (Windows Subsystem for Linux) por lo tanto pueden usar cualquier terminal que tengan, ya sea la terminal por defecto de MacOS, iterm 2.0, GNOME terminal, Terminator, la nueva terminal de Windows etc.
<br>

# Comparación visual 👀

## Antes

![1](https://dev-to-uploads.s3.amazonaws.com/i/otvl86rpq132zrdtp76n.png) 

![2](https://dev-to-uploads.s3.amazonaws.com/i/sow7yfsslmejzyaja7xz.png) 

## Después

![new3](https://dev-to-uploads.s3.amazonaws.com/i/31gqqg0z3ai7k5jizwmr.png)
 
![new4](https://dev-to-uploads.s3.amazonaws.com/i/7oen0rriznrot9ep3vs1.png)

![new5](https://dev-to-uploads.s3.amazonaws.com/i/nh0p3vksgwgg6uqdz09w.png)

![new6](https://dev-to-uploads.s3.amazonaws.com/i/hcorzkw6io2m5upn5hb8.png)

![]()
<br>

# Lo que haremos 🧰

1. Cambiaremos la shell por defecto (BASH) por **ZSH** 
2. Instalaremos **GIT** para clonar repositorios desde la nube
3. Instalaremos **Oh My ZSH** que es un administrador de configuración para ZSH el cual nos hará la vida más fácil
4. Instalaremos algunos **plugins** sobre Oh My ZSH
5. Instalaremos el tema **powerlevel10k** con Oh My ZSH que permite una gran cantidad de combinaciones gracias a su configuration wizard
6. Agregaremos algunos **alias** que es como configurar comando personalizados
7. Cambiaremos el **prompt** por defecto de nuestra terminal

![]()
<br>

# Cambiar BASH por ZSH 💱

ZSH es una **mejor alternativa** al shell por defecto que es BASH, principalmente por sus addons que nos facilitan todo, desde plugins hasta un framework para temas.

1. Instalamos ZSH

    ```bash
    sudo apt install zsh
    ```

2. Seleccionamos ZSH como shell por defecto

    ```bash
    chsh -s $(which zsh)

    #Otra alternativa es:
    #chsh -s `which zsh`
    ```

3. Reiniciamos la consola
4. Revisamos que estemos usando ZSH, si nos sale un error hay que verficar la instalación

    ```bash
    echo $SHELL

    #nos debe responder con
    #/usr/bin/zsh
    ```

5. Si nos sale el siguiente menú seleccionamos (2) para desktop y (0) para conexiones SSH

    ![5](https://dev-to-uploads.s3.amazonaws.com/i/0o1ns46fqtc9vv1xzhit.jpg) 
<br>

# Instalamos git 💻

Además de ser una excelente herramienta para desarrollo también la usaremos para que **OhMyZSH se pueda instalar correctamente**

1. Instalamos los paquetes de git

    ```bash
    sudo apt-get install git
    ```

2. Comprobamos la instalación 

    ```bash
    git --version
    ```
![]()
<br>

# Instalamos Oh My ZSH 🔧

Este framework creado por la comunidad nos ayuda a **configurar nuestro ZSH**.
**No confundir ZSH y OhMyZSH**, OhMyZSH actúa sobre el archivo de configuración de ZSH (.zshrc) 

1. Instalamos Oh My ZSH

    ```bash
    sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
    ```

- Oh My ZSH nos modifica el archivo .zshrc y nos crea la carpeta  .oh-my-zsh donde encontraremos los plugins, temas, plantillas etc.

    ```bash
    nano ~/.zshrc
    #para ver la configuración de ZSH
    ```

- Por defecto nos selecciona el tema robbyrussell

    ![6](https://dev-to-uploads.s3.amazonaws.com/i/qbu6lidrvif1zq1ouza6.png) 
<br>

# Instalamos plugins 🔨

1. Los paquetes que vamos a instalar son:
    - **zsh-syntax-highlighting:** Si estas escribiendo los comando correctos en la terminal, les pone colores

        ![7](https://dev-to-uploads.s3.amazonaws.com/i/7rkg3n2uvi4pbzi5wtau.gif) 

        ```bash
        git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
       ```

    - **zsh-autosuggestions:** Para obtener sugerencias basadas en tu historial

        ![8](https://dev-to-uploads.s3.amazonaws.com/i/82fd3jh8bsqd3tjndx9t.gif) 
        
        ```bash
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
        ```
        
    - **fzf:** Con "ctrl + t" te da un explorador de carpeta, con "ctrl + r" te da un explorador de historial de comandos y con "ctrl + c" salimos
        
        ![9](https://dev-to-uploads.s3.amazonaws.com/i/82a9p753e0qtfrpvkxf3.gif) 
        
        ```bash
        git clone --depth 1 https://github.com/junegunn/fzf.git ~/.fzf && ~/.fzf/install
        ```

        **Aceptamos todo lo que nos pida**

2. Vamos a nuestro archivo de configuración ZSH

    ```bash
    nano ~/.zshrc
    ```

    Aquí nos vamos a la parte de abajo del archivo hasta donde veamos plugins (por defecto viene con el plugin de git) y agregamos lo siguiente

    ```bash
    plugins=(
    git
    zsh-syntax-highlighting
    zsh-autosuggestions
    )
    ```

3. Reiniciamos la consola y listo 😉

![]()
<br>

# Power level 10k 🖌️

## Fuente

**Fuente regular**
![10](https://dev-to-uploads.s3.amazonaws.com/i/9f17ofumpuq199rzwg5e.png)

**Fuente nerd**
![11](https://dev-to-uploads.s3.amazonaws.com/i/lhm015flg8geprwrpjd0.png)

1. Descargar una fuente con soporte para iconos. 
    - Mi recomendación es descargar la fuente de [https://www.nerdfonts.com/font-downloads](https://www.nerdfonts.com/font-downloads)
    - La fuente que uso es la de JetBrainsMono Nerd Font
2. Descomprimir el zip a la carpeta .fonts (~/.fonts o ~/.local/share/fonts) y movernos a ella

    ```bash
    # En caso de no tener la carpeta fonts
    # mkdir ~/.fonts && cd ~/.fonts
    unzip ~/Descargas/[fuente_descargada].zip
    ```

3. Cambiar la fuente de la terminal, normalmente es click derecho sobre el área de comandos > Preferencias > Apariencia/Perfiles > Fuente
    - Aquí elegimos la fuente que hayamos descargado

    ![12](https://dev-to-uploads.s3.amazonaws.com/i/u02gayq6omokzqk2ek1s.jpg) 

## Powerlevel10k

Nos da muchas opciones de personalización visual como las siguientes

![13](https://dev-to-uploads.s3.amazonaws.com/i/a13fj249vlyhcp85ocrk.png) 

1. Descargamos powelevel10k

    ```bash
    git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
    ```

2. Declaramos el tema en el archivo de configuración de zsh

    ```bash
    ZSH_THEME="powerleve10k/powerlevel10k"
    POWERLEVEL10K_MODE="nerdfont-complete"
    ```

    ![14](https://dev-to-uploads.s3.amazonaws.com/i/3vkmdzp2l8u708d26sci.png) 

3. Reiniciamos la terminal para que aparezca el configurador o en su defecto teclear `p10k configure`

    ![15](https://dev-to-uploads.s3.amazonaws.com/i/xy45ds4j1beypulwxsja.png) 

4. Terminando el instalador tendremos nuestra terminal totalmente personalizada

## Colores

- Para cambiar los colores damos **click derecho** sobre el **área de comandos > Preferencias > Apariencia/Perfiles > colores**

    ![16](https://dev-to-uploads.s3.amazonaws.com/i/l3hr0vlc5wta6mspyw1j.jpg) 

- Para paletas de colores random puedes visitar [coolors.co](http://coolors.co)
- Mis colores principales son:

    **Fondo:** #302F4D

    **Texto:** #FFFFFF

    **Morado de prompt:** #B816B8

    **Blanco de prompt:**  #FFFFFF

![]()
<br>

# Aliases 🕵️‍♂️

Los aliases son una herramienta para **crear atajos** para los comando que más usamos o para los que más nos equivocamos

1. Abrimos la configuración zsh y nos movemos a la parte de abajo

    ![17](https://dev-to-uploads.s3.amazonaws.com/i/jc3wl3rknow41z64mpqg.png) 

    Aquí en la configuración nos da unos ejemplos

2. La sintaxis para agregar alias es:

    ```bash
    alias atajo="comando regular para el atajo"
    ```

3. Los atajos que tengo configurados son 

    ```bash
    alias zshconfig="nano ~/.zshrc"
    alias ohmyzsh="cd ~/.oh-my-zsh"
    alias sl="ls" #por si lo escribo al revés XD
    ```

![]()
<br>

# Cambiando el prompt 👩‍💻

Personalmente prefiero que **solo me muestre el directorio actual** en lugar de todo el path. Queremos pasar de esto

![18](https://dev-to-uploads.s3.amazonaws.com/i/vw9wk8zg75kr5rwa25g6.png) 

A esto, con ayuda de una configuración del tema powerlevel10k

![19](https://dev-to-uploads.s3.amazonaws.com/i/wcrj4dggd52rjxlt2i9v.png) 

1. Primero tendremos que abrír el archivo de configuración con nuestro editor favorito, en mi caso utilizaré nano

    ```bash
    nano ~/.p10k.zsh
    ```

2. Después buscamos el parámetro (en nano podemos usar "Ctrl + w" para buscar)

    ```bash
    POWERLEVEL9K_SHORTEN_STRATEGY=truncate_to_unique
    ```

3. Sustituimos el valor por defecto 

    ```bash
    POWERLEVEL9K_SHORTEN_STRATEGY=truncate_to_last
    ```

4. Reiniciar la terminal 😃

![]()
<br>

#Gracias por leer!

No olvides compartir esta guía para que mas gente tenga terminales de otro mundo y compartir el conocimiento.
No dudes en mandarme un screenshot de tu terminal por twitter como [@__raulmar](https://twitter.com/__raulmar)
![]()
<br>

# Recursos 📔

[Instalación de Terminator terminal](https://dev.to/xeroxism/how-to-install-terminator-a-linux-terminal-emulator-on-steroids-1m3h)

[Utilidades Terminator terminal](https://www.atareao.es/software/utilidades/terminator-un-meta-terminal-ubuntu/)

[Your terminal can be much more productive](https://medium.com/@ivanaugustobd/your-terminal-can-be-much-much-more-productive-5256424658e8)

[OhMyZSH official repo](https://github.com/ohmyzsh/ohmyzsh)

[ZSH installation guide](https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH)

[Power level 10k & OhMyZSH](https://github.com/romkatv/powerlevel10k#oh-my-zsh)

[OhMyZSH plugins](https://github.com/ohmyzsh/ohmyzsh/wiki/Plugins)

[OhMyZSH website](https://ohmyz.sh/)