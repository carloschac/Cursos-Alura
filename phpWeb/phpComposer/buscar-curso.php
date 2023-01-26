<?php
use GuzzleHttp\Client;

$client = new Client();

$resposta = $client->request(method: 'GET', uri: 'http://alura.com.br/cursos-online.com.br/php');