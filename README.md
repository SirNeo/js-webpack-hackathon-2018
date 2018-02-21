## Hackathon 2018: Devops + NodeJS + Webpack

#### Instalación de dependencias
```
npm install
```

#### Construcción de la aplicación en desarrollo
```
npm run build
```

#### Ejecución de ESlint
Cuando se construye la aplicación con ```npm run build``` se ejecuta eslint con la configuración definida en webpack.

También, se puede lanzar ESlint manualmente.

El siguiente comando genera un informe en formato html con el resultado de la ejecución de ESlint.
```
npm run lint:html
```

El siguiente comando genera un informe en formato xml.
```
npm run lint:xml
```

El siguiente comando lanza los 2 comandos anteriores.
```
npm run lint
```

#### Ejecución de pruebas con karma
```
npm run test
npm run test:phantom
npm run test:watch
```

#### Construcción de la aplicación en producción
```
npm run build:prod
```

#### Despliegue en local
```
npm start
```

### Dockerizando la aplicación (Pendiente)

#### Descargar Imagen Docker de Node
```
docker pull node
```

#### Crear fichero Dockerfile en el directorio raíz
```
# specify the node base image with your desired version node:<version>
FROM node:8.9.4
# replace this with your application's default port
EXPOSE 8080
```

#### You can then build and run the Docker image:
```
$ docker build -t my-nodejs-app .
$ docker run -it --rm --name my-running-app my-nodejs-app
```

#### Otros comandos de docker
```
docker images
docker run -p 49160:8080 -d my-nodejs-app
# Get container ID
docker ps

# Print app output
docker logs <container id>

# Example
Running on http://localhost:8080

# Enter the container
docker exec -it <container id> /bin/bash
```