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
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { RuleWhereUniqueInput } from "../../rule/base/RuleWhereUniqueInput";

@InputType()
class RuleItemWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

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
  ruleId?: RuleWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  ruleText?: StringFilter;
}

export { RuleItemWhereInput as RuleItemWhereInput };