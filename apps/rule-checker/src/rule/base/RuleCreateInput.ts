/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, ValidateNested, IsOptional } from "class-validator";
import { RuleItemWhereUniqueInput } from "../../ruleItem/base/RuleItemWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class RuleCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  ruleDescription!: string;

  @ApiProperty({
    required: false,
    type: () => RuleItemWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RuleItemWhereUniqueInput)
  @IsOptional()
  @Field(() => RuleItemWhereUniqueInput, {
    nullable: true,
  })
  rulesRuleItems?: RuleItemWhereUniqueInput | null;
}

export { RuleCreateInput as RuleCreateInput };
