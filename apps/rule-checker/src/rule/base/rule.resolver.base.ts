/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Rule } from "./Rule";
import { RuleCountArgs } from "./RuleCountArgs";
import { RuleFindManyArgs } from "./RuleFindManyArgs";
import { RuleFindUniqueArgs } from "./RuleFindUniqueArgs";
import { CreateRuleArgs } from "./CreateRuleArgs";
import { UpdateRuleArgs } from "./UpdateRuleArgs";
import { DeleteRuleArgs } from "./DeleteRuleArgs";
import { RuleItem } from "../../ruleItem/base/RuleItem";
import { RuleService } from "../rule.service";
@graphql.Resolver(() => Rule)
export class RuleResolverBase {
  constructor(protected readonly service: RuleService) {}

  async _rulesMeta(
    @graphql.Args() args: RuleCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Rule])
  async rules(@graphql.Args() args: RuleFindManyArgs): Promise<Rule[]> {
    return this.service.rules(args);
  }

  @graphql.Query(() => Rule, { nullable: true })
  async rule(@graphql.Args() args: RuleFindUniqueArgs): Promise<Rule | null> {
    const result = await this.service.rule(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Rule)
  async createRule(@graphql.Args() args: CreateRuleArgs): Promise<Rule> {
    return await this.service.createRule({
      ...args,
      data: {
        ...args.data,

        rulesRuleItems: args.data.rulesRuleItems
          ? {
              connect: args.data.rulesRuleItems,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Rule)
  async updateRule(@graphql.Args() args: UpdateRuleArgs): Promise<Rule | null> {
    try {
      return await this.service.updateRule({
        ...args,
        data: {
          ...args.data,

          rulesRuleItems: args.data.rulesRuleItems
            ? {
                connect: args.data.rulesRuleItems,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Rule)
  async deleteRule(@graphql.Args() args: DeleteRuleArgs): Promise<Rule | null> {
    try {
      return await this.service.deleteRule(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => RuleItem, {
    nullable: true,
    name: "rulesRuleItems",
  })
  async getRulesRuleItems(
    @graphql.Parent() parent: Rule
  ): Promise<RuleItem | null> {
    const result = await this.service.getRulesRuleItems(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
