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
import { ShippingDetailsWhereInput } from "./ShippingDetailsWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ShippingDetailsOrderByInput } from "./ShippingDetailsOrderByInput";

@ArgsType()
class ShippingDetailsFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ShippingDetailsWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ShippingDetailsWhereInput, { nullable: true })
  @Type(() => ShippingDetailsWhereInput)
  where?: ShippingDetailsWhereInput;

  @ApiProperty({
    required: false,
    type: [ShippingDetailsOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ShippingDetailsOrderByInput], { nullable: true })
  @Type(() => ShippingDetailsOrderByInput)
  orderBy?: Array<ShippingDetailsOrderByInput>;

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

export { ShippingDetailsFindManyArgs as ShippingDetailsFindManyArgs };
