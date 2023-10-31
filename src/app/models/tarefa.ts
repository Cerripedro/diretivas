export class Tarefa {
  descricao: string;
  concluida: boolean;

  constructor(descricao: string, concluida: boolean = false) {
    this.descricao = descricao;
    this.concluida = concluida;
  }
}
