import { Controller, Get, Param } from '@nestjs/common';
import { ProjetoPrisma } from './projeto.prisma';
import { Projeto } from '@core';

@Controller('projetos')
export class ProjetoController {
  constructor(private readonly repo: ProjetoPrisma) {}

  @Get()
  async obterTodos(): Promise<Projeto[]> {
    return await Promise.resolve(this.repo.obterTodos());
  }

  @Get(':id')
  async obterPorId(@Param('id') id: string): Promise<Projeto | null> {
    return await Promise.resolve(this.repo.obterPorId(Number(id)));
  }
}
