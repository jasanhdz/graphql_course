## ¿Qué es graphQL?

Es un nuevo paradigma aplicado a un problema antiguo que siempre han tenido los desarrolladores de tener que comunicar información entre diferentes aplicaciones, siempre se ha necesitado que una aplicación le envíe información a otra o que ejecute transformaciones en esa como tal, para ello se han creado diferentes tecnologías que han pasado de moda como por ejemplo: CORBA, SOAP, RPC que fueron remplazados de forma progresiva hasta llegar a la alternativa más reciente y más usada actualmente, **REST**.

Actualmente rest es la forma más usada para enviar y ejecutar transformaciones.

GraphQL se puede ver como una evolución a esté problema, fue creado por facebook en el 2015 por un problema que detectaron en su API Rest debido al volumen de información que ellos manejan, crearon una forma más flexible que les permitía con una sola consulta resolver lo que con muchas tenían que hacer en REST, entonces GraphQL se creó como un estandart que permite identificar de una forma más real como va ha ser usada una API, puede permitir una forma predicible de detectar todas las informaciones posibles con la información y viene con diferentes ventajas:

1. Lenguaje agóstico que me permite definir una forma clara y simple los objetos y acciones del API.
No importa del lenguaje al que quieras implementar tiene una base de lenguaje estandart diferente por si es Node.js, python, ruby.
2. una validación automática de la información al ingresar.
3. Control de errores de una manera uniforme y predectible.
- Documentación mínima autogenerada que permite saber exactamente cómo debe ser usada el API tanto a la hora de pedir y enviar información.
- Entorno de desarrollo amigable donde se puede probar todas las interacciones.

## Schema y types

La base de una api en graphQL es el Schema, el schema es un documento que escribe detalladamente todos los tipos de información que va ha tener el API, cada uno especificando que tipo de dato es.


## Queries y Resolvers

Una querie me permite ejecutar un request al API para obtener información como tál, tiene la caracteristica que yo debo pedir, cual es la consulta que deseo ejecutar y que campos de esa consulta deseo obtener.

Cuando envié lo siguiente en mi API va ha ir a ejecutar está consulta y va a devolver solamente esté campo
```json
{
  hero {
    name
  }
}
```

Esté es el formato en el que graphQl devuelve, siempre va ha ver un objeto que se llama data, que contiene la información que pedimos.

```json
{
  "data": {
    "hero": {
      "name": "R2-D2" 
    }
  }
}
```
Cuando yo quiera ejecutar una querie mágicamente no me va ha aparecer el resultado, necesitamos definir un objeto que se llama resolvers.

Importante notar que en los resolvers cada vez que yo defino una querie nueva necesito definir otro resolver para esa querie, y debe ser una función que me devuelva un valor.

## Custom Types

Ya que tenemos nuestra API en la web es hora de comenzar ha trabajar para tener una api funcional resolviendo un problema del mundo real en vez de tener un query que se está saludando, vamos a aprender ahora custom types y vamos a trabajar directamente en el código del schema.

## Argumentos

Vamos a usar argumentos para poder tener queries más especificas a la hora de consultar información, para ello primero vamos a ir al editor y vamos a instalar una nueva dependecia que nos va ha facilitar el trabajo con graphql, está dependecia es ``graphql-tools``.

Ahora ya no vamos a utilizar buildSchema, y vamos a usar makeExecuteSchema de graphql-tools que básicamente hace los mismo que buildSchema pero de una manera más especializada, aún vamos a seguir utilizando graphql porque graphql-tools la utiliza.

ahora vamos a separar la lectura del archivo de schemas en otra variable, despues está variable va a ir dentro de makeExecuteSchema dentro de un objeto que tiene 2 propiedades, que son los schemas y los resolvers.

```js
const typeDefs = readFileSync(join(__dirname, "lib", "schema.graphql"),
  'utf-8'
);
const schema = makeExecutableSchema({typeDefs, resolvers});
```
Ahora tenemos que configurar los resolvers de una forma diferente, ahora tenemos que especificar que las funciones son un Querie y iran dentro de una propiedad Query.

```js
module.exports = {
  Query: {
    Courses: () => courses,
    saludo: () => "Nuevo Saludo"
  }
};
```
### Mutations e inputs

En una api siempre necesito aveces insertar información, enviarla para que sea almacenada en graphql esto se hace con una especificación que se llama [mutation](https://graphql.org/learn/queries/#mutations) pero básicamente es un mecanismo como los queries que me permite insertar la información en la API, mutation siempre va ha transformar la información de la API.

##

En la clase pasada vimos como agregar mutation de un tipo, en está clase vamos a hacer esta clase general donde vamos a gregar un nuevo tipo, vamos a agregarle los resolvers a ese tipo, vamos a hacerle queries y vamos a hacerle mutations, vamos a definir el schema y definir el tipo.

## Nested Types

Una de las caracteristicas de graphql es que me permite a mi tener relaciones entre los tipos de una forma muy sencilla, como ya tenemos 2 tipos vamos a ver como se define una de estas:

Vamos al schema y vamos a añadir a nuestro schema un campo que en este ejemplo se llamará "people" y será un array del tipo stundet. Decimos que hay un nuevo campo que es un arreglo y que cada item de ese arreglo es de tipo student 