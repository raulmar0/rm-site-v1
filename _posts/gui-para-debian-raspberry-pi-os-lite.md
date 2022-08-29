---
title: '🐧🛠️ GUI para Debian (Raspberry Pi OS lite)'
date: '2020-12-14'
tags: ['dev']
---

Originalmente publicado en [dev.to](https://dev.to/raulmar/armando-una-gui-para-debian-raspberry-pi-os-lite-4644)

# ¿Por qué no instalar una distro con GUI directamente?

Las distros populares por lo general tienen un **entorno de escritorio** por defecto, sea GNOME, KDE, XFCE etc. sin embargo si queremos **comenzar** en el mundo de la **personalización en linux** debemos de empezar desde cero ya que muchas veces los entornos por defecto están intrínsecamente unidos con el sistema operativo lo que hace que sea un poco más difícil la personalización

Recientemente adquirí una **Raspberry Pi 4** en su versión de 4GB de RAM para jugar con la configuración y personalización de linux. Así que lo primero que hice fue **crear los cimientos** de la personalización que es la GUI (Graphical User Interface)

# Un repaso de lo que vamos a instalar
- Escritorio: XFCE
- Window manager: XFWM (incluído con XFCE)
- Display server: Xorg
- Login manager: LightDM

Aunque también veremos otras opciones populares

Antes de comenzar debemos tener lista la **instalación limpia** de Raspberry Pi OS lite e ingresar con el usuario "pi" y contraseña "raspberry"

![RPi-cli](https://dev-to-uploads.s3.amazonaws.com/i/fbxrg2gpso8ezqzcn89p.jpg)
Instalación limpia de RPi OS lite (CLI)

# Configurando el Wi-Fi

Esto lo hacemos para poder actualizar paquetes y tener una conexión SSH sin tener que usar Ethernet ya que sin conexión a internet muchos de los comandos no funcionarían

1. Hacemos cd al directorio boot
2. Creamos un archivo llamado wpa_supplicant.conf 

    ```
    sudo nano wpa_supplicant.conf
    ```

3. Llenamos el archivo con la siguiente información

    ```
    ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
    update_config=1
    country=<Código ISO 3166-1 de nuestro país (MX en mi caso)>

    network={
     ssid="[Nombre de la red]"
     psk="[Constraseña de la red]"
    }
    ```

# Configurando la conexión SSH

Nos facilita el uso de la tarjeta para no tener que estar cambiando nuestros periféricos entre nuestra PC y la Raspberry Pi así como también poder copiar los siguientes comandos desde nuestra PC

1. Habilitamos la interfaz SSH
   - El comando que nos llevará al menú de configuración de Raspberry es:

        ```
        raspi-config
       ```

    * Hacemos el siguiente recorrido dentro del menú

        ```
        -Interface Options
        -SSH
        -Enable
        ```

2. Obtenemos la dirección IP de la Raspberry Pi dentro de nuestra red

    ```
    hostname -I
    ```

3. Desde el cliente (Linux/Mac) nos conectamos a la Raspberry Pi

    ```bash
    ssh [usuario]@[ip]
    # El usuario por lo general es "pi"
    # la ip fue generada en el paso anterior
    ```

    Para Windows podemos usar PuTTY

![RPi-ssh](https://dev-to-uploads.s3.amazonaws.com/i/10suldvocm599chpz58u.png)
Conexión SSH desde Ubuntu

# Expandir el sistema

Esto lo hacemos con la finalidad de poder usar la tarjeta SD en su totalidad

1. Entramos al menú de Raspberry

    ```
    raspi-config
    ```

2. Hacemos el siguiente recorrido

    ```
    -Advanced Options
    -Expand Filesystem
    ```

# Actualizar paquetes

1. Actualizamos los repositorios

    ```
    sudo apt-get update
    ```

2. Actualizamos los paquetes

    ```
    sudo apt-get upgrade
    ```

3. Agregamos actualizaciones importantes

    ```
    sudo apt-get dist-upgrade
    ```

4. Limpiamos paquetes que no usaremos

    ```
    sudo apt-get clean
    ```

# Ajustamos las configuraciones geográficas

1. Entramos al menú de Raspberry

    ```
    raspi-config
    ```

2. Entramos al menú "Localization Options"
3. Entramos al menú "Change Locale"
4. Seleccionamos nuestro locale y tipo de encoding
    - Por defecto tiene seleccionado

        ```
        en_GB.UTF-8 UTF8
       ```

    * Deseleccionamos con la barra espaciadora
    * Seleccionamos el nuestro, en mi caso es:

        ```
        es.MX.UTF-8 UTF8
        # idioma.país.tipo_de_encoding
        # UTF8 es lo más amigable
       ```

        - Seleccionamos la misma opción cuando nos pida "default locale"
5. Cambiamos nuestra zona horaria dentro del menú "Change Timezone"
6. Cambiamos el layout del teclado en el menú "Change Keyboard Layout" si es que algunas de tus teclas no funcionan correctamente 
    - Seleccionamos nuestro modelo de teclado (si no estás seguro elige "Generic 105-key (Intl) PC")
    - Entra a keyboard layout, en mi caso uso "Spanish Latin American"
    - Nos pregunta si nuestro teclado tiene la tecla Alt Gr, yo seleccioné "Right Alt Gr"
    - Nos pregunta si tenemos una compose key (Si no sabes que es, lo más seguro es que no la tengas)

# Instalar el display server

Basicamente un display server habilita el uso de una GUI coordinando los inputs y outputs con el sistema operativo

No confundir con entorno de escritorio. El entorno de escritorio usa el display server por debajo

![xorg-logo](https://dev-to-uploads.s3.amazonaws.com/i/xxw09j64zee5hmjeb5sq.png)
 
1. Instalamos Xorg por su estabilidad 

```bash
sudo apt-get install —no-install-recommends xserver-xorg
```

Si no usamos un login manager comenzaremos directo en la línea de comando. Así que para iniciar el entorno gráfico con un comando deberemos instalar xinit. Este paso no es necesario si tenemos planeado usar un login manager

# Desktop enviroment

## XFCE

![xfce-logo](https://dev-to-uploads.s3.amazonaws.com/i/4znyw0e8azm9a8k82pon.png) 

Personalmente prefiero usar este escritorio debido a que lo respalda una gran comunidad, es muy ligero y permite personalizar facilmente

Instalaremos el **XFCE GUI**, la **XFCE4 Terminal** y **LightDM login manager**. Vienen incluidos el **XFWM Window Manager**, **File Manager** y los **ajustes**

```bash
sudo apt-get install xfce xfce4-terminal
```

## Otros

Estos no los he probado pero pueden servir bien

### Raspberry Pi Desktop (RPD)

![RPi-logo](https://dev-to-uploads.s3.amazonaws.com/i/2un4wwvlcjldlb435e38.png)
 
Está basado en LXDE y está optimizado para la Raspberry Pi. 

Incluye terminal, file manager, configuración y window manager

- Instalamos RPD

    ```
    sudo apt-get install raspberrypi-ui-mods
    ```

### LXDE

![lxde-logo](https://dev-to-uploads.s3.amazonaws.com/i/3nhq1xxgind45i03lrqz.png)
 
Es un entorno que consume poca memoria, ideal para algunas Raspberries pi. 

Incluye, configuración, terminal, file manager y Openbox window manager.

- Instalamos LXDE y LXAppearance

    ```
    sudo apt-get install lxde-core lxappearance
    ```

### MATE

![mate-logo](https://dev-to-uploads.s3.amazonaws.com/i/39dzj3uzavhyc06xmylq.png)
 
Un fork de GNOME que activamente incluye nuevas tecnologías preservando la experiencia tradicional de un escritorio

Incluye configuración, terminal, file manager y Marco Window Manager

- Instalamos MATE

    ```
    sudo apt-get install mate-desktop-enviroment-core
    ```

# Login manager

Instalando XFCE se instala LightDM login manager pero si no se instala por defecto o instalamos otro entorno de escritorio podemos hacerlo con:

```
sudo apt-get install lightdm
```

Si no queremos login manager podemos usar el comando de xinit para iniciar el display server

```
startx
```

Por último, reiniciamos nuestra Raspberry Pi

```
sudo reboot
```

# Resultado

![RPi-xfce](https://dev-to-uploads.s3.amazonaws.com/i/40yyipw4iiyz0mogep7x.jpg)
 
RPi OS lite con XFCE

# Extras

## Conexión SSH con X11 Forwarding

Esto sirve para ejecutar aplicaciones en la Raspberry Pi pero que la GUI de estas se muestre en el cliente.

### En la Raspberry Pi

1. Abrimos el archivo "etc/ssh/ssh_config" con nano

    ```
    sudo nano etc/ssh/ssh_config
    ```

2. Agregamos lo siguiente al final para configurar X11 forwarding

    ```
    X11Forwarding yes
    X11DisplayOffset 10
    PrintMotd no
    PrintLastLog yes
    TCPKeepAlive yes
    ```

3. En consola reiniciamos el servicio ssh

    ```
    sudo service ssh restart
     ```


    `sudo systemctl restart ssh`

4. Hacemos un test con gvim

    ```
    sudo apt-get install vim-gtk
    ```

### En el cliente (Linux)

1. Nos conectamos vía ssh con X11 forwarding

    ```
    ssh -X [usuario]@[ip]
    ```

2. Creamos un archivo txt de prueba

    ```
    echo "Este es un archivo de prueba" > prueba.txt
    ```

3. Abrimos el archivo para verificar que la GUI de gvim nos aparece en el cliente

    ```
    gvim prueba.txt
    ```

## Recursos

[Foro Raspberry Pi](https://www.raspberrypi.org/forums/viewtopic.php?t=133691)

[Configuración del wpa_supplicant.conf](https://www.raspberrypi.org/documentation/configuration/wireless/wireless-cli.md)

[Conexión SSH](https://www.raspberrypi.org/documentation/remote-access/ssh/unix.md)

[Conexión SSH con X11 forwarding](https://fabianlee.org/2018/10/14/ubuntu-x11-forwarding-to-view-gui-applications-running-on-server-hosts/#:~:text=Open%20PuTTY%20and%20establish%20an,%2DMagic%2DCookie%E2%80%9D%20setting).

[Qué es un display server](https://itsfoss.com/display-server/)

[UTF vs ISO](https://www.dokry.com/8652#:~:text=UTF%2D8%20es%20una%20encoding,exactamente%20de%20la%20misma%20manera).

[XFCE vs LXDE](https://www.sololinux.es/xfce-vs-lxde-cual-es-mejor-para-mi/)