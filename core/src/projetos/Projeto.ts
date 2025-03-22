import Tecnologia from "../tecnologias/Tecnologia";
import { Nivel } from "./Nivel";
import { Tipo } from "./Tipo";

export default interface Projeto {
  id: number;
  nome: string;
  descricao: string;
  imagens: string[];
  nivel: Nivel;
  tipo: Tipo;
  repositorio: string;
  destaque: boolean;
  tecnologias: Tecnologia[];
}