import { Tecnologia } from '@core';
import { Controller, Get } from '@nestjs/common';
import { TecnologiaPrisma } from './tecnologia.prisma';

@Controller('tecnologias')
export class TecnologiaController {
  constructor(private readonly repo: TecnologiaPrisma) {}
  @Get()
  async obterTodas(): Promise<Tecnologia[]> {
    return await Promise.resolve(this.repo.obterTodas());
  }

  @Get('destaques')
  async obterDestaques(): Promise<Tecnologia[]> {
    return await Promise.resolve(this.repo.obterDestaques());
  }
}
