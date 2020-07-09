let strTen = '10.5';

console.log( strTen - 5 );

console.log( strTen * 10 );

console.log( strTen + 5 );

console.log( strTen / 2 );

console.log( Number( strTen ) + 5 );

console.log( +strTen + 20 );

console.log( Number.parseInt( strTen ) + 10 );

console.log( Number.parseFloat( 10 ) );

console.log( Number.isInteger( 1 ) );

console.log( Number.isInteger( -1 ) );

console.log( Number.isFinite( -1 ) );

console.log( Number.MAX_VALUE );

console.log( Number.MAX_VALUE );

console.log( Number.MAX_SAFE_INTEGER );

var max_safe = Number.MAX_SAFE_INTEGER;

console.log( max_safe.toString().length );

let unsafe = max_safe + 1000;

console.log( Number.isSafeInteger( unsafe ) );

let nan = 'a' / 2;

console.log( typeof( nan ) );

console.log( Number.isNaN( nan ) );

let fixInt = 5.5;

console.log( fixInt.toFixed( 4 ) );

console.log( typeof( fixInt.toFixed() ) );


// Math

let neg = -10;

console.log( Math.abs( neg ) );

console.log( Math.pow( 5, 3 ) );

console.log( 5 ** 3 );

console.log( Math.round( 5.4 ) );

console.log( Math.floor( Math.random() * Math.floor( 10 ) ) );

