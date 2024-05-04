/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ProductCategoryService } from "../productCategory.service";
import { ProductCategoryCreateInput } from "./ProductCategoryCreateInput";
import { ProductCategory } from "./ProductCategory";
import { ProductCategoryFindManyArgs } from "./ProductCategoryFindManyArgs";
import { ProductCategoryWhereUniqueInput } from "./ProductCategoryWhereUniqueInput";
import { ProductCategoryUpdateInput } from "./ProductCategoryUpdateInput";

export class ProductCategoryControllerBase {
  constructor(protected readonly service: ProductCategoryService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ProductCategory })
  async createProductCategory(
    @common.Body() data: ProductCategoryCreateInput
  ): Promise<ProductCategory> {
    return await this.service.createProductCategory({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ProductCategory] })
  @ApiNestedQuery(ProductCategoryFindManyArgs)
  async productCategories(
    @common.Req() request: Request
  ): Promise<ProductCategory[]> {
    const args = plainToClass(ProductCategoryFindManyArgs, request.query);
    return this.service.productCategories({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ProductCategory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async productCategory(
    @common.Param() params: ProductCategoryWhereUniqueInput
  ): Promise<ProductCategory | null> {
    const result = await this.service.productCategory({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ProductCategory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateProductCategory(
    @common.Param() params: ProductCategoryWhereUniqueInput,
    @common.Body() data: ProductCategoryUpdateInput
  ): Promise<ProductCategory | null> {
    try {
      return await this.service.updateProductCategory({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: ProductCategory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteProductCategory(
    @common.Param() params: ProductCategoryWhereUniqueInput
  ): Promise<ProductCategory | null> {
    try {
      return await this.service.deleteProductCategory({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
