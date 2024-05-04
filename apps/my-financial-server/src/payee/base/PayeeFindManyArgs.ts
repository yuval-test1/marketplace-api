/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PayeeWhereInput } from "./PayeeWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PayeeOrderByInput } from "./PayeeOrderByInput";

@ArgsType()
class PayeeFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PayeeWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PayeeWhereInput, { nullable: true })
  @Type(() => PayeeWhereInput)
  where?: PayeeWhereInput;

  @ApiProperty({
    required: false,
    type: [PayeeOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PayeeOrderByInput], { nullable: true })
  @Type(() => PayeeOrderByInput)
  orderBy?: Array<PayeeOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { PayeeFindManyArgs as PayeeFindManyArgs };
