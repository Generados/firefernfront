import Usuario from "./Usuario";

export default interface Denuncia {
    id: number;
    email: string;
    local: string
    descricao: string;
    usuario: Usuario;
   
  }