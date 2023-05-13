# Backend DALL-E

##### _DALL-E Clone es una aplicación web que permite a los usuarios crear imágenes a partir de texto, compartirlas y descargarlas. La aplicación está basada en la tecnología DALL-E desarrollada por OpenAI y utiliza una combinación de React, Node y Typescript.Con DALL-E Clone, los usuarios pueden introducir una descripción de la imagen que desean crear y la aplicación generará una imagen que coincida con la descripción. Las imágenes generadas pueden compartirse fácilmente en redes sociales o descargarse para uso personal._

##### Visita la página web oficial de [DALL-E](https://dall-e.takeoutcode.com/)

### Tecnologías usadas

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

# Requisitos
- Node.js
- yarn
> Para este proyecto se utilizó yarn como administrador de paquetes.
> En caso de no tener yarn, puedes instalarlo con el siguiente comando:

```
npm install --global yarn
```

#### _Instalación de dependencias_

```
yarn install
```
# _Renombra el archivo para las variables de entonrno_
En la raiz del proyecto, renombra el archivo **.env.template** a **.env.local**

Después del símbolo =, debes agregar lo valores de tus variables de entorno. A continuación, te comparto dónde encontrarás las claves:

| Variable de entorno | Ejemplo | Descripcion |
| --- | --- | ---|
OPENAI_API_KEY= | API-OpenAI | API Key que nos proporciona [OpenAI](https://openai.com/blog/openai-api)
MONGO_URL= | Url-database | Password de la base de datos de [Mongo](https://www.mongodb.com/)
CLOUDINARY_CLOUD_NAME= | Cloud-Name-Cloudinary | Cloud Name que nos proporciona [Cloudinary](https://cloudinary.com/)
CLOUDINARY_API_KEY= | API-Key-Cloudinary | API Key que nos proporciona [Cloudinary](https://cloudinary.com/)
CLOUDINARY_API_SECRET== | Secret-Cloudinary | Secret que nos proporciona [Cloudinary](https://cloudinary.com/)

Una vez que tengas las claves, agrega cada una a su respectivo campo sin agregar espacios ni comillas de ningún tipo.

#### _Inicializar app_
```
  yarn dev
```
