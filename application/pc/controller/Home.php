<?php
namespace app\pc\controller;
use think\Controller;

class Home extends Controller
{
    public function index()
    {
        return $this -> fetch('home');
    }

    public function hello($name = 'ThinkPHP5')
    {
        return 'hello,' . $name;
    }
}
