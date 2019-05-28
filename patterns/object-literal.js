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
            console.log ( `el resultado de sumar ${valor_a} + ${valor_b} es: ${privateFunction(result)}` )
        };

        publicFunctions.resta = ( valor_a , valor_b ) => {
            let result = valor_a + valor_b;
            console.log ( `el resultado de restar ${valor_a} - ${valor_b} es: ${privateFunction(result)}` )
        }

        // devuelvo solamente los métodos públicos
        return publicFunctions;

    })();

    MyModule.suma( 43,234)
    MyModule.resta( 343,34)
    MyModule._privateFunction(34); // -->> ERROR no puede acceder al método privado, ya que no está dentro del return.

    console.log(MyModule);

})();
