<?php

class User{

	public $name;
	public $age;

	public function __construct($name,$age){
		echo __CLASS__ . ' instantiated';
		$this->name =$name;
		$this->age = $age;
	}

	public function sayHello(){
		return $this->name . 'SayHello';
	}
	public function __destruct(){
		echo 'destracter run';
	} 
}

$user1 =new User('Koba',28);
echo $user1->name . ' is ' .  $user1->age  . 'yers old';
echo '<br>';
echo $user1->sayHello();

echo '<br>';

$user2 =new User('Kaede',26);
echo $user2->name . ' is ' .  $user2->age  . 'yers old';
echo '<br>';
echo $user2->sayHello();
