<?php
namespace app\home\controller;

class Home
{
    public function index()
    {
        return $this -> fetch();
    }

    public function hello($name = 'ThinkPHP5')
    {
        return 'hello,' . $name;
    }
}
