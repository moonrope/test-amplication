/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  RuleItem, // @ts-ignore
  Rule,
} from "@prisma/client";

export class RuleItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.RuleItemCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.RuleItemCountArgs>
  ): Promise<number> {
    return this.prisma.ruleItem.count(args);
  }

  async ruleItems<T extends Prisma.RuleItemFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.RuleItemFindManyArgs>
  ): Promise<RuleItem[]> {
    return this.prisma.ruleItem.findMany(args);
  }
  async ruleItem<T extends Prisma.RuleItemFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.RuleItemFindUniqueArgs>
  ): Promise<RuleItem | null> {
    return this.prisma.ruleItem.findUnique(args);
  }
  async createRuleItem<T extends Prisma.RuleItemCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RuleItemCreateArgs>
  ): Promise<RuleItem> {
    return this.prisma.ruleItem.create<T>(args);
  }
  async updateRuleItem<T extends Prisma.RuleItemUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RuleItemUpdateArgs>
  ): Promise<RuleItem> {
    return this.prisma.ruleItem.update<T>(args);
  }
  async deleteRuleItem<T extends Prisma.RuleItemDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.RuleItemDeleteArgs>
  ): Promise<RuleItem> {
    return this.prisma.ruleItem.delete(args);
  }

  async getRuleId(parentId: string): Promise<Rule | null> {
    return this.prisma.ruleItem
      .findUnique({
        where: { id: parentId },
      })
      .ruleId();
  }
}