% Intro a JavaScript
% Andrea Jemmett
% S.O.S. + Coompany

# JavaScript

## Pillole

- lingua franca del Web
- consente di interagire con pagine HTML
- uno standard W3C (ECMAScript)
- vive all'interno di una pagina HTML

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
      <script type="javascript" src="js/script.js"></script>
    </div>
  </body>
</html>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

------------------

![Una pagina HTML](./img/ex1.png)

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


# Document Object Model (DOM)   {#dom}

## Cos'è il DOM?

- un modello per descrivere pagine Web
- standard W3C
- indipendente da browser
- fornisce un API per interagire con una pagina Web ed i suoi componenti

------------------

![Document Object Model](./img/DOM.png)

# JavaScript in dettaglio

## Eseguire JS

`<script type="javascript"> codice JavaScript </script>`

## Tipi di dato

- JS è un linguaggio di scripting, dinamico, basato su oggetti.
- non è tipizzato ma comunque esistono i tipi di dato
    + numerico (intero o reale)
    + booleano (`true`, `false`)
    + stringa
    + array
