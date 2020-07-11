let name = 'Jonh';
let message = "Hello!"

let greeting = message + ' ' + name;

console.log( greeting );

console.log( 'How are doing? ' + name );

console.log( 'Hello Jonh!\nHow are you today');

let greeting1 = 'Hello ' + name +'\nHow are you today?\nAnd what about your sister';

console.log( greeting1 );

let greeting2 = `
Hello! ${name}
How are you doing today?
How about your sister?
`;

console.log( greeting1 );

let escape = 'I\\m';

console.log( escape );

let str1 = String('4 + 4');

let str2 = '4 + 4';

console.log( str1, str2 );

let str_hello = new String('Hello');

console.log( str_hello );

console.log( eval(str1) );

console.log( eval( str2 ) );

let str_new = 'Hello! how are you'

console.log( str_new.length );

console.log( str_new.toUpperCase() );

console.log( str_new.toLowerCase() );

console.log(str_hello.concat( ' Jonh' ) );

console.log( message.concat( name ) );

console.log( str_new.replace('Hello', `Hello ${name}`) );

let str3 = 'a';

console.log( str3.charCodeAt() )

console.log( String.fromCharCode( 97 ) );

let str4 = 'Hello! How are you doing today?';

console.log( str4.slice(0, 6 ) );

console.log( str4.split(' ') );

console.log( str4.substr(str4.length - 6, 6) );

console.log( str4.substring(0, 6 ) );

let str5 = 'Hello ';
let str6 = '   Jonh';

console.log( str_concat = str5.concat( str6 ) );

console.log( str5 );

let new_str5 = str5.trim();

console.log( new_str5.concat( str6.trim() ) );
