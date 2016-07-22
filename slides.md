% Intro a JavaScript
% Andrea Jemmett
% S.O.S. + Coompany

# JavaScript

## Cos'è JS?

- lingua franca del Web
- consente di interagire con pagine HTML
- uno standard W3C (ECMAScript)
- (normalmente) vive all'interno di una pagina HTML


# Prerequisito: HTML

## Cos'è HTML?

- è un linguaggio di markup (e *non* di **programmazione**)
- uno standard W3C
    + ultima versione HTML5
- utile alla creazione della **struttura** di pagine Web

## Filosofia

- scinde la presentazione dalla struttura
    + anche se mette a disposizione **tag** come `<b></b>` o `<font></font>`
- questa scissione rende possibile sviluppare un layer di presentazione diverso
  in base al dispositivo di visualizzazione (mediante **CSS**)

## L'elemento fondamentale

- HTML mette a disposizione una collezione di **tag**
- un tag ha forma `<tag attr1="value1" attr2="value2">...</tag>`
    + `tag` ha solitamente un significato semantico (h1, p, a, head, body, nav, section, ...)
    + attributi agiscono da modificatori
    + alcuni tag non accettano contenuto `<tag attr1="val1" />`
    + consente tag annidati `<tag1>Hello, <tag2>World!</tag2></tag1>`

## Una pagina HTML

~~~~~{.html .numberLines}
<!DOCTYPE html>
<html>
  <head>
    <title>My HTML page title</title>
  </head>
  <body>
    <h1>Hello, HTML!</h1>
    <!-- I'm a comment -->
    <p>I'm a paragraph of this HTML page</p>
    <p><a href="http://google.com">This</a> is a link</p>
    <div align="right">
      <ul>
        <li>List item 1</li>
        <li>List item 2</li>
      </ul>
      <script type="text/javascript" src="js/script.js"></script>
    </div>
  </body>
</html>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

------------------

![Una pagina HTML](./media/ex1.png)

## Tag comuni (1)

- `<html>` racchiude l'intero documento HTML
- `<head>` e `<body>` racchiudono l'intestazione (e metadati) ed il corpo rispettivamente
- headings: `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`
- horizontal rule: `<hr />`
- paragraph: `<p>`
- line break: `<br />`
- text formatting: `<b>`, `<i>`, `<strong>`, `<em>`, `<sub>`, `<sup>`, ...
- quotations: `<abbr>`, `<address>`, `<blockquote>`, `<cite>`
- styling: `<style>`, `<link rel="css/stylesheet" />`
- graphics: `<canvas>`, `<svg>`

## Tag comuni (2)

- links: `<a>`
- media: `<img />`, `<video>`, `<embed>`, `<iframe>`
- tables: `<table>`, `<thead>`, `<tbody>`, `<tfoot>`, `<tr>`, `<td>`
- lists: `<ul>`, `<ol>`, `<li>`, `<dl>`, `<dd>`, `<dt>`
- block and inline: `<div>`, `<span>`
- layout: `<header>`, `<nav>`, `<section>`, `<article>`, `<aside>`, `<footer>`,
  `<details>`, `<summary>`
- forms and input: `<form>`, `<input />`, `<textarea>`, `<button>`, `<submit>`,
  `<select>`, `<option>`

## References

> - [http://www.w3schools.com/html/default.asp](http://www.w3schools.com/html/default.asp)
> - [https://www.w3.org/html/](https://www.w3.org/html/)



# JavaScript in dettaglio

## Caratteristiche
- case sensitive (someName <span>&ne;</span> somename)
- è un linguaggio di scripting
- tipizzazione dinamica
- basato su oggetti (*non classi!*)

## Eseguire JS
`<script type="text/javascript"> codice JavaScript </script>`

- normalmente prima del tag di chiusura `</body>`
- raramente prima del tag di chiusura `</head>`

## Tipi di dato
- non è tipizzato ma comunque esistono i tipi di dato
    * primitivi
        + numerico (`int` o `float`)
        + booleano (`true`, `false`)
        + stringa (`"hello"` o `'hello'`)
    * strutture dati
        + array
        + oggetti
    * speciali
        + `undefined`
        + `null`

## Variabili
- è una *scatola* che può contenere un istanza di un qualsiasi tipo di dato
- il valore contenuto può cambiare durante l'esecuzione del programma
- dichiarata tramite la keyword `var`
- assegnamento con `=` o `op=` (dove *op* è un operatore aritmetico)

## Variabili: esempio
~~~~~~{.js .numberLines}
var myVariable = "this is a string";
var myInteger = (10 * 2) / 3;   // usuali op. numerici

myVariable = 42;
myVariable += 3;
myInteger = myVariable;

console.log("myVariable ha valore", myVariable);
console.log("myInteger ha valore " + myInteger);
~~~~~~~~~~~~~~~~~~~~~~~~~~~
[https://jsfiddle.net/acidghost/bw9vr0en/](https://jsfiddle.net/acidghost/bw9vr0en/)

## Tipi numerici
- interi dichiarati come `var x = 42;`
- reali dichiarati come `var x = 4.2;` o `var x = 10e3;`
- operatori binari `+`, `-`, `*`, `/`, `%`
- operatori unari: `++`, `--`

## Array
- è una collezione di valori (anche non omogenei)
- accessibili tramite un indice (da `0` ad `n`)
- dimensione dinamica

## Array: esempio
~~~~~~{.js .numberLines}
var myArray = [1, 2, 3, 4],
    matrix = [[1, '2', 3.2],
              [true, 'array', 'stringa'],
              [true, false, null]];

console.log(myArray[0]);     // primo elemento -> 1
console.log(myArray[2]);     // terzo elemento -> 3
console.log(matrix[2][2]);   // terza riga, terza colonna -> null

myArray[0] = 0;              // setta il valore
~~~~~~~~~~~
[https://jsfiddle.net/acidghost/sq9v3tu8/](https://jsfiddle.net/acidghost/sq9v3tu8/)

## Array: metodi
- modifica: `map(fn)`, `concat(array)`, `push(x)`, `pop()`, `reverse()`, `sort()`
- ricerca: `lastIndexOf(x)`, `indexOf(x)`, `find(fn)`
- altri: `join(x)`, `forEach(fn)`, `isArray()`

## Oggetti
- principale tipo di dato in JS
- una struttura con:
    + proprietà
    + metodi

## Oggetti: esempio
~~~~~~{.js .numberLines}
var array = new Array(1, '123');

console.log(array.length);    // proprietà
array.push(10);               // metodo
~~~~~~~~~
[https://jsfiddle.net/acidghost/9op4jxfs/](https://jsfiddle.net/acidghost/9op4jxfs/)

## Oggetti: esempio
~~~~~~{.js .numberLines}
var myObj = new Object();
myObj.myProp = 42;
myObj.myMethod = function() {
  return 'I\'m a method!';
};
console.log(myObj);
console.log(myObj.myMethod());

var myObj2 = {
  myProp: 42,
  myMethod: function() {
    return 'I\'m a method!';
  }
};
console.log(myObj2);
console.log(myObj2.myMethod());
~~~~~~~~
[https://jsfiddle.net/acidghost/4rz25y74/](https://jsfiddle.net/acidghost/4rz25y74/)

## Ereditarietà prototipale   {.smaller}
- JS non è basato su classi, ma su oggetti e prototipi
- oggetti sono accumunati da un sotto-oggetto `prototype`
- quando creiamo un oggetto, usando `new`, questo *eredita* proprietà e metodi

## Ereditarietà prototipale   {.smaller}
~~~~~~{.js .numberLines}
var Cane = function(colore) {
  this.colore = colore;
};
Cane.prototype.abbaia = function () {
  console.log('Un cane ' + this.colore + ' sta abbaiando');
};

var cane1 = new Cane('nero');
cane1.abbaia();
var cane2 = new Cane('bianco');
cane2.abbaia();
~~~~~~
[https://jsfiddle.net/acidghost/kn3v4f3q/](https://jsfiddle.net/acidghost/kn3v4f3q/)

## `Math` object
- operazioni e costanti matematiche
- `abs(x)`, `min(x1, x2, x3, ...)`, `cos(x)`, `sin(x)`, `exp(x)`, `floor(x)`, `random()`, ...

## `Date` object
- utilità per gestire date ed ora
- oggetti `Date` vengono creati con `var d = new Date();`

## Funzioni
- consentono il riuso del codice
- hanno uno scope
- sono cittadini di primo livello
    + JS supporta funzioni di ordine superiore

## Funzioni: esempio
~~~~~~{.js .numberLines}
var greet = function(name) {
  var nameArr = name.split('');
  nameArr[name.length - 1] = 'z';
  name = nameArr.join('');
  return 'Hello, ' + name + '!';
};
console.log(greet('Andrea'));

function greet2(name) {
  return 'Hello, ' + name + '!';
};
console.log(greet2('Andrea'));
~~~~~~~~~
[https://jsfiddle.net/acidghost/axbgbm0t/](https://jsfiddle.net/acidghost/axbgbm0t/)

## Funzioni: ord. superiore
~~~~~~{.js .numberLines}
var fn = function(x) { return x * 2; };
var array = [1, 2, 3, 4, 5].map(fn);
console.log(array.toString());
~~~~~~
[https://jsfiddle.net/acidghost/1d7636yx/](https://jsfiddle.net/acidghost/1d7636yx/)

## Funzioni: ord. superiore
~~~~~~{.js .numberLines}
var fn = function(x) {
  return function() {
    return x * 2;
  };
};
var fn3 = fn(3);
for (var i = 0; i < 5; i++)
  console.log(fn3());
~~~~~~

<!-- ## Funzioni: scoping
~~~~~~{.js .numberLines}
var fn = function(x) {
  var xc = x;
  return function() {
    return xc * 2;
  };
};
var fn3 = fn(3);
for (var i = 0; i < 5; i++)
  console.log(fn3());
~~~~~~
[https://jsfiddle.net/acidghost/wxegr406/](https://jsfiddle.net/acidghost/wxegr406/) -->

## Funzioni: scoping
~~~~~~{.js .numberLines}
var integer = 3;
var square = function() {
  integer *= integer;
};
square();
console.log(integer);		// 9
var square2 = function(integer) {
  return integer *= integer;
};
square();
console.log(integer);		// 81

integer = square2(3);
console.log(integer);		// 9
~~~~~~~~~
[https://jsfiddle.net/acidghost/91ezf1bu/](https://jsfiddle.net/acidghost/91ezf1bu/)

## Condizioni
- blocco if-else
- comparazione (`!=`, `==`, `>`, `<`, `>=`, `<=`)
- operatori booleani (`&&`, `||`, `!`)

## Tavole di verità
A    B    A `&&` B
---  ---  ---
0    0      0
0    1      0
1    0      0
1    1      1

## Tavole di verità
A    B    A `||` B
---  ---  ---
0    0      0
0    1      1
1    0      1
1    1      1

## Tavole di verità
A    `!`A
---  ---
0    1
1    0

## Condizioni: esempio
~~~~~~{.js .numberLines}
var n = 42;
if (n == 42) {
  console.log('n ha valore 42');
} else {
  console.log('n non ha valore 42');
}

var k = 'stringa';
if (n == k || n >= 42) {
  console.log('blocco if');
} else {
  console.log('blocco else');
}
~~~~~~~~~
[https://jsfiddle.net/acidghost/L093mcnv/](https://jsfiddle.net/acidghost/L093mcnv/)

## Beware!
- l'operatore `===` esegue uguaglianza su valore + tipo!
- `5 == '5'` -> `true`
- `5 === '5'` -> `false`
- preferibile, ma con attenzione

## Condizioni: op. ternario
~~~~~~{.js .numberLines}
var n = 42;
var k = n == 42 ? 'n = 42' : 'n != 42';
console.log(k);
~~~~~~~~~
[https://jsfiddle.net/acidghost/hhtwqg7k/](https://jsfiddle.net/acidghost/hhtwqg7k/)

## If-else multipli
~~~~~~{.js .numberLines}
if (n == 1) {
  // something
} else if (n == 2) {
  // something else
} else if (n == 3) {
  // .....
} else {
  // otherwise
}
~~~~~~~~~

## Switch
~~~~~~{.js .numberLines}
var n = 42;
switch (n) {
  case 1:
    console.log('n == 1');
    break;
  case 42:
    console.log('n == 42');
    break;
  // .....
  default:
    console.log('n ==' + n);
}
~~~~~~~~~
[https://jsfiddle.net/acidghost/ktu5juLf/](https://jsfiddle.net/acidghost/ktu5juLf/)

## Loops: for
~~~~~~{.js .numberLines}
for (var i = 0; i < 10; i++) {
  console.log(i);
}
~~~~~~~~~
[https://jsfiddle.net/acidghost/ydyqqshy/](https://jsfiddle.net/acidghost/ydyqqshy/)

## Loops: for-in
~~~~~~{.js .numberLines}
var person = {fname: "John", lname: "Doe", age: 25};

var text = "";
for (var x in person) {
  text += person[x];
}
console.log(text);
~~~~~~~~~~~~
[https://jsfiddle.net/acidghost/0hp9mpvj/](https://jsfiddle.net/acidghost/0hp9mpvj/)

## Loops: while
~~~~~~{.js .numberLines}
var i = 0;
while (i < 10) {
  console.log(i);
}
~~~~~~~~~~~~

## Loops: do-while
~~~~~~{.js .numberLines}
var i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);
~~~~~~~~~~~~

## Loops: break & continue
- `break` esce dal loop corrente
- `continue` interrompe il loop e torna alla condizione

## `break` esempio
~~~~~~{.js .numberLines}
for (var i = 0; i < 10; i++) {
  if (i === 5)
    break;
  console.log(i);
}
~~~~~~~~~~~~
[https://jsfiddle.net/acidghost/0rsepx0j/](https://jsfiddle.net/acidghost/0rsepx0j/)

## `continue` esempio
~~~~~~{.js .numberLines}
for (var i = 0; i < 10; i++) {
  if (i === 5)
    continue;
  console.log(i);
}
~~~~~~~~~~~~
[https://jsfiddle.net/acidghost/8m4k9zpp/](https://jsfiddle.net/acidghost/8m4k9zpp/)

## Gestione errori: `try ... catch`   {.smaller}
~~~~~~{.js .numberLines}
try {
  console.log(something());
} catch (err) {
  console.log(err.message);
} finally {
  console.log('...infine');
}
~~~~~~
[https://jsfiddle.net/acidghost/pa7ub68L/](https://jsfiddle.net/acidghost/pa7ub68L/)

# Practice time!

## First-Class Function Factory
- funzione principale ha argomento `x`
- ritorna una nuova funzione che accetta un array
- moltiplica ogni elemento dell'array per `x`
- [https://www.codewars.com/kata/first-class-function-factory/javascript](https://www.codewars.com/kata/first-class-function-factory/javascript)
- metodi utili: `map(fn)`, for loop(s)

## Jaden Smith -ifyer
- trasformare `'SOS rocks the World!'` in `'SOS Rocks The World!'`
- [https://www.codewars.com/kata/jaden-casing-strings/javascript](https://www.codewars.com/kata/jaden-casing-strings/javascript)
- metodi utili: `map(fn)`, `split(s)`, `join(s)`, for loop(s), `slice(n)`, `charAt(n)`
- hints:
    + trasformare ogni parola `'rocks'` in `'Rocks'`
    + trasformare la prima lettera di ogni parola




# JS, HTML, DOM, BOM

## Cos'è il DOM?
- un modello per descrivere pagine Web
- standard W3C
- indipendente da browser
- interagire con una pagina Web ed i suoi componenti

------------------

![Document Object Model](./media/DOM.png)

## The `document` object
- JS implementa una API per il DOM
- l'oggetto `document` è quest'interfaccia

## Metodi utili: trovare      {.smaller}
+ `document.getElementById(id)`, `.getElementsByTagName(name)`, `.getElementsByClassName(name)`
+ `document.querySelectorAll(css_selector)`

## Metodi utili: cambiare     {.smaller}
+ `element.innerHTML =  new html content` o `element.textContent = 'some text'`
+ `element.attribute = new value` o `element.setAttribute(attribute, value)`
+ `element.style.property = new style`

## Metodi utili: add / rm     {.smaller}
+ `document.createElement(element)`
+ `document.removeChild(element)`, `.appendChild(element)`, `.replaceChild(element)`

## Esempio DOM
~~~~~~{.js .numberLines}
var elm = document.getElementById('my-element');
elm.textContent = 'New pirate text!';
elm.style.color = 'whitesmoke';
elm.style['background-color'] = 'black';

var newElm = document.createElement('span');
newElm.style.color = 'yellow';
newElm.textContent = 'some text';
elm.appendChild(newElm);
~~~~~~~~~~~
[https://jsfiddle.net/acidghost/8een3gz5/](https://jsfiddle.net/acidghost/8een3gz5/)

## Eventi     {.smaller .all}
- JS può rispondere a diversi eventi
    + mouse related: `onclick`, `onmouseover`, `onmouseout`, `onmouseup`, `onmousedown`
    + keyboard related: `onkeydown`, `onkeyup`
    + altri: `onload` / `onunload`, `onchange`, `onfocus`, ...
- programmatore dichiara **handlers**
    + in JS: `element.onclick = function(evt) { ... }`
        * **beware!** sovrascrive altri handlers
    + in JS: `element.addEventListener('click', function(evt) { ... })` o `element.addEventListener('click', myFunc)`
        * **beware!** omettere prefisso `on` -> `click`
    + in HTML: `<a href="..." onclick="javascript:myFunction()">...</a>`

## Eventi: esempio
~~~~~~{.js .numberLines}
var btn = document.getElementsByTagName('button')[0];
var myHandler = function(evt) {
  document.write('Bottone cliccato!');
};
btn.addEventListener('click', myHandler);
~~~~~~~~~
[https://jsfiddle.net/acidghost/cup7runb/](https://jsfiddle.net/acidghost/cup7runb/)

## BOM: the `window` object   {.smaller .all}
- API per interagire con la finestra
- variabili e funzioni globali sono proprietà e metodi di `window`
    + quindi `document.getElementById === window.document.getElementById`
- proprietà comuni:
    + `innerHeight`, `innerWidth`, `outerHeight`, `outerWidth`, `screenX`, `screenY`, `scrollX`, `scrollY`, ...
- metodi comuni:
    + `alert()`, `confirm()`, `prompt()`, `close()`, `open()`, `setInterval()`, `setTimeout()`, `scrollTo()`, `scrollBy()`, ...

## BOM: esempio
~~~~~~~{.js .numberLines}
var nome = window.prompt('Inserisci il tuo nome:');
window.alert('Hai inserito ' + nome);
window.setInterval(function() { console.log(nome) }, 1000);
~~~~~~~
[https://jsfiddle.net/acidghost/txe3xodf/](https://jsfiddle.net/acidghost/txe3xodf/)

## References
> - [w3schools JS guide](http://www.w3schools.com/js/default.asp)
> - [w3schools JS reference](http://www.w3schools.com/jsref/default.asp)
> - [JavaScript: The Good Parts](http://shop.oreilly.com/product/9780596517748.do)



# jQuery\
  the write less, do more, JS lib   {#jquery}

## jQuery: esempio
~~~~~{.js .numberLines}
$(document).ready(function() {
  $('p').click(function(){
    $(this).hide();
    console.log('Paragrafo nascosto');
  });
});
~~~~~
[https://jsfiddle.net/acidghost/mLvdfnvh/](https://jsfiddle.net/acidghost/mLvdfnvh/)

## jQuery: usage
- caricare lib nella pagina
    + `<script type="text/javascript" src="jquery-3.1.0.min.js"></script>`
- selezionare elementi con `$('css selector')`
- azioni su elementi con `$('css selector').action()`

## jQuery: CSS selectors
- via `id`: `$('#my-element')`
- via `class`: `$('.to-hide')`
- via modificatori: `$(':first')`, `$(':nth-of-type(10)')`, `$(':even')`, `$(':odd')`, ...
- via attributi: `$('[href="www.google.com"]')`, ...
- child selector `>`: `$('p > span')`

## jQuery: CSS selectors example    {.smaller}
~~~~~{.js .numberLines}
$(document).ready(function() {
  $('ul li:first').text('new text');
  $('.my-par > span').css({
  	color: 'yellow',
    'background-color': 'black'
  });
});
~~~~~
[https://jsfiddle.net/acidghost/uh2trcbs/](https://jsfiddle.net/acidghost/uh2trcbs/)

## jQuery effects
- `hide()`, `show()`, `toggle()`, `fadeIn()`, `fadeOut()`, `fadeToggle()`
- argomenti opzionali:
    + `speed`: `'fast'`, `'slow'`, in milliseconds
    + `callback`: funzione eseguita al termine dell'azione

## jQuery effects
- `animate()` per animazioni custom
- `$(selector).animate({params}, speed, callback);`

## jQuery effects
~~~~{.js .numberLines}
$(document).ready(function(){
  $("button").click(function(){
    $("div").animate({
      left: '250px',
      opacity: '0.5',
      height: '150px',
      width: '150px'
    }, function() {
    	$('div').animate({
      	left: '0px',
        opacity: '1',
        height: '50px'
      }, 2000);
    });
  });
});
~~~~
[https://jsfiddle.net/acidghost/fy85jh8f/](https://jsfiddle.net/acidghost/fy85jh8f/)

## jQuery DOM modification    {.smaller}
- content: `text()`, `html()`
- attributes: `attr()`, `val()`
- utilizzati sia in *get* che *set*
- aggiungere: `append()`, `prepend()`, `after()`, `before()`
- rimuovere: `remove()`, `empty()`

## jQuery DOM traversing
- navigare gli elementi del DOM
- ancestors: `parent()`, `parents()`
- descendants: `children()`, `find()`
- siblings: `siblings()`, `next()`, `prev()`
- accettano CSS selector
- filtering: `first()`, `last()`, `eq(n)`, `not(selector)`

## References
> - [jQuery.com](http://jquery.com/)
> - [w3schools jQuery tutorial](http://www.w3schools.com/jquery/default.asp)
> - [w3schools jQuery reference](http://www.w3schools.com/jquery/jquery_ref_selectors.asp)



# Practice time!
## Generatore di nomi pirata
- trasformare un nome e cognome in nome **pirata**
- creare due elementi `<input type="text" />`
- trasformare il nome (...)
- includere un soprannome (casualmente)
- sostituire il cognome con un nome pirata con la stessa iniziale (casualmente)
- visualizzare il risultato in un elemento HTML (`<div>`, `<p>`, `<input />`, ...)
- [https://jsfiddle.net/acidghost/dw5jLc3r/](https://jsfiddle.net/acidghost/dw5jLc3r/)


## JS wat!?
<video width="700" height="525" preload="none" controls=""><source src="./media/wat.mov"></source></video>
[source: https://www.destroyallsoftware.com/talks/wat](https://www.destroyallsoftware.com/talks/wat)
