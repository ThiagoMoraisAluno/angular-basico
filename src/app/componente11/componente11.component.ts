import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../modelo/Pessoa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-componente11',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './componente11.component.html',
  styleUrl: './componente11.component.css'
})
export class Componente11Component {
  //Objeto de formulário
  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required,Validators.minLength(3)]),
    idade: new FormControl(null,[Validators.required,Validators.min(0), Validators.max(120)]),
    cidade: new FormControl('',[Validators.required,Validators.minLength(3)])
  })

  //visibilidade dos botões
  btnCadastrar:boolean = true;

  //Vetor
  vetor:Pessoa[] = [];

  //Armazenar indice da pessoa selecionada
  indice:number = -1;

  //Função de cadastro
  cadastrar(){
    this.vetor.push(this.formulario.value as Pessoa)

    //Limpeza dos inputs
    this.formulario.reset()

    //Visualização via console
    // console.table(this.vetor)
  }

  //Função de seleção
  selecionar(indice:number){
      //atribuir o indice da pessoa
      this.indice = indice

      //atribuir os dados da pessoa no formulário
      this.formulario.setValue({
        nome:this.vetor[indice].nome,
        idade:this.vetor[indice].idade,
        cidade:this.vetor[indice].cidade
      })

      //visibilidade dos botoes
      this.btnCadastrar = false;
  }

  //Função de alterar
  alterar(){
    this.vetor[this.indice] = this.formulario.value as Pessoa;

    //limpar inputs
    this.formulario.reset();

    //Visibilidade dos botões
    this.btnCadastrar = true
  }

  //Função de Remover
  remover(){
    this.vetor.splice(this.indice, 1);

    //limpeza dos inputs
    this.formulario.reset();
    this.btnCadastrar = true;
    
  }

  //Função de cancelamento
  cancelar(){
    //limpeza do inputs
    this.formulario.reset();

    //Visibilidade dos botões
    this.btnCadastrar = true;
  }
  
}
