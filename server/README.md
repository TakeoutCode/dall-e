# Node Teslo App

Este proyecto es un backend para una aplicación web que funciona como un clon de DALL-E, el cual permite crear imágenes a partir de texto utilizando la API de OpenAI.

## Configurar las variables de entorno

Antes de poder ejecutar la aplicación, es necesario configurar las siguientes variables de entorno:

1. Renombra el archivo **.env.template** a **.env** y configura los siguientes valores:
   
    - API Key, API Secret y Cloud name de Cloudinary: estos valores se pueden obtener creando una cuenta en "https://cloudinary.com/".

    - Base de datos de MongoDB: necesitarás crear una cuenta en "https://www.mongodb.com/" y configurar tu conexión de base de datos.

    - API Key de OpenAI: para generar tus claves, debes crear una cuenta en "https://platform.openai.com/account/api-keys."

2. Después de configurar las variables de entorno, reconstruye los módulos de Node y levanta la aplicación utilizando los siguientes comandos:

```bash
  yarn install
  yarn dev
```
