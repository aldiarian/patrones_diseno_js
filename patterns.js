(()=>{
    // object literal
    // Tal cual su nombre lo dice este patrón se conforma con la creación de un objeto que prácticamente es un JSON. Una de las bondades de este patrón es que nos permite escribir el código de una manera organizada y no se corrompe el scope(alcance) global con nombres innecesarios, lo cual es una muy buena práctica sobre todo para los proyectos muy grandes.
    // Como se comenta al principio la notación de este patrón es muy similar a la construcción de un JSON, ya que cuenta con identificadores que permite el acceso al contenido de cada uno de ellos.
    
console.log ( `
    *************
    Objeto Literal
    *************`
)
    let MiObjetoLiteral = {
        suma : ( valor_a , valor_b ) => {
            let result = valor_a + valor_b;
            console.log ( `el resultado de sumar ${valor_a} + ${valor_b} es: ${result}` )
        },
        resta : ( valor_a , valor_b ) => {
            let result = valor_a - valor_b;
            console.log ( `el resultado de restar ${valor_a} - ${valor_b} es: ${result}` )
        }
        
       
    }
    
    MiObjetoLiteral.suma(12, 32);
    MiObjetoLiteral.resta(12, 32);

})();

(()=>{
// Patrón Module
// Ese tipo de declaración se conoce como IIFE (Immediately-Invoked-Function-Expressions), y como su nombre dice es una función que se ejecuta de manera inmediata. Esta función crea un nuevo scope y genera “privacidad”, sin embargo JavaScript no maneja el concepto de “privacidad”, pero al generar un nuevo scope podemos simularlo, esto se logra envolviendo toda la lógica del aplicativo dentro de un contenedor. La idea es solo retornar las partes que nosotros necesitamos, y dejar las otras partes del código fuera del scope global.

// Después de crear el nuevo scope, necesitaremos un namespace para tener acceso al código que el modulo anónimo retorne.

// Como se muestra en el ejemplo generamos un módulo, el cual nos permite realizar una suma, sin embargo, lo interesante es que ya se está manejando el concepto de “privacidad”, y no podemos tener acceso al método privateFunction, pero si al método suma. Esto se debe a que solo estamos retornando todo lo que contenga la variable publicFunction y lo que no se encuentre dentro de ésta será privado y solo se tendrá acceso dentro del scope de nuestro modulo :).

// Al crear una función autoejecutada, esta solo contendrá aquello que hayamos devuelto expresamente

console.log ( `
    *************
    Patrón Module
    *************`
)

    let MyModule = ( ()=> {

        // genero un objeto que contendrá los métodos que vamos a hacer públicos
        let publicFunctions = {};

        _privateFunction = ( number ) => {
            return number + "$";
        }

        publicFunctions.suma = ( valor_a , valor_b ) => {
            let result = valor_a + valor_b;
            console.log ( `el resultado de sumar ${valor_a} + ${valor_b} es: ${_privateFunction(result)}` )
        };

        publicFunctions.resta = ( valor_a , valor_b ) => {
            let result = valor_a + valor_b;
            console.log ( `el resultado de restar ${valor_a} - ${valor_b} es: ${_privateFunction(result)}` )
        }

        // devuelvo solamente los métodos públicos
        return publicFunctions;

    })();

    MyModule.suma( 43,234)
    MyModule.resta( 343,34)
    //MyModule._privateFunction(34);  -->> ERROR no puede acceder al método privado, ya que no está dentro del return.

    console.log(MyModule);

})();


(()=>{
    console.log ( `
    *************
    Patrón Prototype
    *************`
)
    // Patrón Prototype
    // Este patrón de diseño tiene como finalidad crear nuevos objetos duplicándolos, clonando una instancia creada previamente, en resumen se podría decir que el uso de este patrón es lo más cercano a POO (Programación Orientada a Objetos), con los nuevas funciones de EmacScript 2016 esto puede armarce usando class, extends, etc.
    
    // Otra de las características es que todos los objetos en JavaScript cuentan con la propiedad proto, lo cual facilita crear nuevas funciones para clases ya existentes, prácticamente este patrón es la onda jejeje.
    
    // Para poder comprender mejor este patrón vamos a crear un ejemplo usando prototype y otro utilizando las nuevas funciones de emacScritpt.
    
    // Paso 1 : Creamos la clase Persona.

    class Persona {
        constructor( nombre, apellido ){
            this.nombre = nombre,
            this.apellido = apellido
        }

        getNombre(){
            console.log( "Nombre: ",  this.nombre )
        }
        getApellido(){
            console.log( "Apellido: ",  this.apellido )
        }
    }

    let andres = new Persona( 'andres', 'sanchez');
    andres.getNombre();
    andres.getApellido();

    console.log ( `
    *************
    class extends
    *************`
)

    // Paso 2 : Extendiendo la clase Persona a una nueva podremos usar sus métodos y propiedades, además de incluir nuevas.

    class Superlopez extends Persona {
        constructor( nombre, apellido, superpoder ){ // tenemos que declarar las propiedades de Persona, y las nuevas que queramos tener
            super( nombre, apellido ); // se llama al constructor de la clase Persona con sus propiedades ya declaradas
            this.superpoder = superpoder;
        }
        getSuperlopez(){
            this.getNombre()
            this.getApellido();
            console.log( 'tiene el superpoder :' , this.superpoder );
        }
    }

    let heroe = new Superlopez ( 'Andrés', 'López', 'volar');
    heroe.getSuperlopez();

})();