<?php

class Funcionario extends Pessoa 
{
    private string $cargo;

    public function __construct($nome, CPF $cpf, $cargo)
    {
        $this->validaNomeTitular($nome);
        $this->nome = $nome;
        $this->cpf = $cpf;
        $this->cargo = $cargo;
    }

    public function recuperaNomeFuncionario(): string
    {
        return $this->nome;
    }

    public function recuperaCpfFuncionario(): string
    {
        return $this->cpf;
    }

    public function recuperaCargoFuncionario(): string
    {
        return $this->cargo;
    }
}