import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente07',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente07.component.html',
  styleUrl: './componente07.component.css'
})
export class Componente07Component {
  //variável lógica
  condicao: boolean = false;

  //lista dos APROVADOS E REPROVADOS
  lista:string[] = [
    'APROVADO',
    'APROVADO',
    'REPROVADO'
  ]
}
