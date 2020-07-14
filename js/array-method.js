let book_title = "JavaScript";
let book_author = "Jonh";
let book_price = 50;

let book = ['JavaScript', 'Jonh', 50];

console.log( typeof( book ) );

console.log( book );

console.log( book[2] );

book.push( 'programming' );

console.log( book );

book.push( ['js for beginner', 2020] );

console.log( book );

console.log( book[4][1] );

console.log( book.length )

let book_metas = book.pop();

console.log( book_metas );

console.log( book );

book.unshift( '00101' );

console.log( book );

console.log( book.shift() );

console.log( book );

// book.forEach( function( value, index, self ) {

//   console.log( value, index, self );

// } );

console.log( book.indexOf( 50 ) );

let str_combined = book.join( '-' );

console.log( str_combined );

console.log( book );

let book_meta = ['2020', '9.5'];

console.log( book_meta );

console.log( book.concat( book_meta ) )

