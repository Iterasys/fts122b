$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Pesquisa.feature");
formatter.feature({
  "line": 1,
  "name": "Pesquisa no Google",
  "description": "",
  "id": "pesquisa-no-google",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4834451305,
  "status": "passed"
});
formatter.scenario({
  "line": 2,
  "name": "Com Sucesso",
  "description": "",
  "id": "pesquisa-no-google;com-sucesso",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "que acesso o Google",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "digito \"chocolate\" e aperto Enter",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "exibe uma pagina com links e o titulo \"chocolate - Pesquisa Google\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Pesquisa.que_acesso_o_Google()"
});
formatter.result({
  "duration": 6855172837,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "chocolate",
      "offset": 8
    }
  ],
  "location": "Pesquisa.digito_e_aperto_Enter(String)"
});
formatter.result({
  "duration": 8290134238,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "chocolate - Pesquisa Google",
      "offset": 39
    }
  ],
  "location": "Pesquisa.exibe_uma_pagina_com_links_e_o_titulo(String)"
});
formatter.result({
  "duration": 15983418,
  "status": "passed"
});
formatter.after({
  "duration": 1004885860,
  "status": "passed"
});
});