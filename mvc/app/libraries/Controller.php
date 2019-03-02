<?php

class Controller{
	// Load model
	public function model($model){
		//require model file
		require_once '../app/models/' . $model . '.php';

		// インスタンスモデル
		return new $model();
	}
	//Load view
	public function view($view,$data = []){
		//Viewファイルをチャック
		if(file_exists('../app/views/' . $view . '.php')){
			require_once '../app/views/' . $view .'.php';
		}else{
			die('View dose not exist');
		}
	}
}