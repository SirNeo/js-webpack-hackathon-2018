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