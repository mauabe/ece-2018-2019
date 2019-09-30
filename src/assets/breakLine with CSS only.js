
// CSS:

h4 {
  display: inline;
}
h4::after {
  content: "";
  display: block;
}

//html
<ul>
  <li>
    Text, text, text, text, text. <h4>Sub header</h4>
    Text, text, text, text, text.
  </li>
</ul>

//result:

Text, text, text, text, text. Sub header
Sub headerText, text, text, text, text.