<?php 
$dbPath= __DIR__ . '/banco.sqlite';
$pdo = new PDO(dsn:"sqlite:$dbPath");



$sql = 'INSERT INTO videos (url, title) VALUES (?,?)';
$statement = $pdo->prepare($sql);
$statement->bindValue(1, $_POST['url']);
$statement->bindValue(2, $_POST['titulo']);

if ($statement->execute() === false) {
    header('location: /index.php?sucesso=0');
} else {
    header('location: /index.php?sucesso=1');
}


