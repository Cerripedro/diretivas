import { Component } from '@angular/core';
import { Tarefa } from 'src/app/models/tarefa';

@Component({
  selector: 'app-lista-tarefas',
  template: `
    <ul>
      <li *ngFor="let tarefa of tarefas"
          [ngStyle]="{'text-decoration': tarefa.concluida ? 'line-through' : 'none'}">
        {{ tarefa.descricao }}
        <button (click)="toggleConclusao(tarefa)">Concluir</button>
      </li>
    </ul>
  `
})
export class ListaTarefasComponent {
  tarefas: Tarefa[] = [
    new Tarefa('Tarefa 1', false),
    new Tarefa('Tarefa 2', true),
    new Tarefa('Tarefa 3', false),
    new Tarefa('Tarefa 4', true),
    new Tarefa('Tarefa 5', false)
  ];

  toggleConclusao(tarefa: Tarefa) {
    tarefa.concluida = !tarefa.concluida;
  }
}
