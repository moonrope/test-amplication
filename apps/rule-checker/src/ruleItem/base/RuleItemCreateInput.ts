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
import { RuleWhereUniqueInput } from "../../rule/base/RuleWhereUniqueInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class RuleItemCreateInput {
  @ApiProperty({
    required: false,
    type: () => RuleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RuleWhereUniqueInput)
  @IsOptional()
  @Field(() => RuleWhereUniqueInput, {
    nullable: true,
  })
  ruleId?: RuleWhereUniqueInput | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  ruleText!: string;
}

export { RuleItemCreateInput as RuleItemCreateInput };