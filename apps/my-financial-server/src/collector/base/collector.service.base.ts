/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Collector as PrismaCollector } from "@prisma/client";

export class CollectorServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.CollectorCountArgs, "select">
  ): Promise<number> {
    return this.prisma.collector.count(args);
  }

  async collectors<T extends Prisma.CollectorFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CollectorFindManyArgs>
  ): Promise<PrismaCollector[]> {
    return this.prisma.collector.findMany<Prisma.CollectorFindManyArgs>(args);
  }
  async collector<T extends Prisma.CollectorFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CollectorFindUniqueArgs>
  ): Promise<PrismaCollector | null> {
    return this.prisma.collector.findUnique(args);
  }
  async createCollector<T extends Prisma.CollectorCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CollectorCreateArgs>
  ): Promise<PrismaCollector> {
    return this.prisma.collector.create<T>(args);
  }
  async updateCollector<T extends Prisma.CollectorUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CollectorUpdateArgs>
  ): Promise<PrismaCollector> {
    return this.prisma.collector.update<T>(args);
  }
  async deleteCollector<T extends Prisma.CollectorDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CollectorDeleteArgs>
  ): Promise<PrismaCollector> {
    return this.prisma.collector.delete(args);
  }
}
