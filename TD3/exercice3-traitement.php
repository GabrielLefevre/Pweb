<?php
//-- Configuration Mysql
define('DB_TYPE', 'mysql');
define('DB_HOST', 'localhost');
define('DB_NAME', 'pweb-2'); // TODO A CHANGER
define('DB_USER', 'root'); // TODO A CHANGER
define('DB_PASS', ''); // TODO A CHANGER
define("DEBUG", true); // Affiche les message d'erreur en true
try {
$db = new PDO(DB_TYPE . ":host=" . DB_HOST . "; dbname=" . DB_NAME, DB_USER, DB_PASS);
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (Exception $e) {
if (DEBUG)
die('[Erreur - DEBUG MODE] ' . $e->getMessage());
else
die("Une erreur est survenue lors de la connexion à la base de données, veuillez s'il vous plait contactez un administrateur du site");
}
$codeP = $_POST['code'];
$q = $db->prepare("SELECT NOM FROM ville WHERE CP = :codePostal");
$q->execute(['codePostal' => $codeP]);
while ($row = $q->fetch()) {
print_r(utf8_encode($row[0].':'));
}
