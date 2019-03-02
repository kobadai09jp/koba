<?php
//Load config
require_once 'config/config.php';

//Autoload Core librelies
spl_autoload_register(function($className){
require_once 'libraries/' . $className . '.php';
});