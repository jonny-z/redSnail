<?php
namespace app\pc\controller;

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
