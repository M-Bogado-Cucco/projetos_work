import { Projeto, Tipo } from '@core';
import { Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class ProjetoPrisma {
  constructor(private readonly prisma: PrismaProvider) {}
  async obterTodos(): Promise<Projeto[]> {
    const projetos = await this.prisma.projeto.findMany({
      include: { tecnologias: true },
    });

    return projetos.map((projeto) => ({
      ...projeto,
      tecnologias: projeto.tecnologias || [],
    })) as Projeto[];
  }

  async obterPorId(id: number): Promise<Projeto | null> {
    const projeto = await this.prisma.projeto.findUnique({
      where: { id },
      include: { tecnologias: true },
    });

    if (!projeto) return null;

    return {
      ...projeto,
      tipo: (projeto.tipo as Tipo) || 'defaultTipo', // Replace 'defaultTipo' with a valid default value if needed
    } as Projeto;
  }
}
