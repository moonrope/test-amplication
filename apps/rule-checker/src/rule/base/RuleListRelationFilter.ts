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
import { RuleWhereInput } from "./RuleWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class RuleListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => RuleWhereInput,
  })
  @ValidateNested()
  @Type(() => RuleWhereInput)
  @IsOptional()
  @Field(() => RuleWhereInput, {
    nullable: true,
  })
  every?: RuleWhereInput;

  @ApiProperty({
    required: false,
    type: () => RuleWhereInput,
  })
  @ValidateNested()
  @Type(() => RuleWhereInput)
  @IsOptional()
  @Field(() => RuleWhereInput, {
    nullable: true,
  })
  some?: RuleWhereInput;

  @ApiProperty({
    required: false,
    type: () => RuleWhereInput,
  })
  @ValidateNested()
  @Type(() => RuleWhereInput)
  @IsOptional()
  @Field(() => RuleWhereInput, {
    nullable: true,
  })
  none?: RuleWhereInput;
}
export { RuleListRelationFilter as RuleListRelationFilter };
