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
import { Customer } from "./Customer";
import { CustomerService } from "../../customerService/base/CustomerService";
import { CustomerCountArgs } from "./CustomerCountArgs";
import { CustomerFindManyArgs } from "./CustomerFindManyArgs";
import { CustomerFindUniqueArgs } from "./CustomerFindUniqueArgs";
import { CreateCustomerArgs } from "./CreateCustomerArgs";
import { UpdateCustomerArgs } from "./UpdateCustomerArgs";
import { DeleteCustomerArgs } from "./DeleteCustomerArgs";
import { ComplaintFindManyArgs } from "../../complaint/base/ComplaintFindManyArgs";
import { Complaint } from "../../complaint/base/Complaint";
import { CustomerServiceFindManyArgs } from "../../customerService/base/CustomerServiceFindManyArgs";
import { RentalFindManyArgs } from "../../rental/base/RentalFindManyArgs";
import { Rental } from "../../rental/base/Rental";
import { CustomerService } from "../customer.service";
@graphql.Resolver(() => Customer)
export class CustomerResolverBase {
  constructor(protected readonly service: CustomerService) {}

  async _customersMeta(
    @graphql.Args() args: CustomerCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Customer])
  async customers(
    @graphql.Args() args: CustomerFindManyArgs
  ): Promise<Customer[]> {
    return this.service.customers(args);
  }

  @graphql.Query(() => Customer, { nullable: true })
  async customer(
    @graphql.Args() args: CustomerFindUniqueArgs
  ): Promise<Customer | null> {
    const result = await this.service.customer(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Customer)
  async createCustomer(
    @graphql.Args() args: CreateCustomerArgs
  ): Promise<Customer> {
    return await this.service.createCustomer({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Customer)
  async updateCustomer(
    @graphql.Args() args: UpdateCustomerArgs
  ): Promise<Customer | null> {
    try {
      return await this.service.updateCustomer({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => Customer)
  async deleteCustomer(
    @graphql.Args() args: DeleteCustomerArgs
  ): Promise<Customer | null> {
    try {
      return await this.service.deleteCustomer(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Complaint], { name: "complaints" })
  async findComplaints(
    @graphql.Parent() parent: Customer,
    @graphql.Args() args: ComplaintFindManyArgs
  ): Promise<Complaint[]> {
    const results = await this.service.findComplaints(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [CustomerService], { name: "customerServices" })
  async findCustomerServices(
    @graphql.Parent() parent: Customer,
    @graphql.Args() args: CustomerServiceFindManyArgs
  ): Promise<CustomerService[]> {
    const results = await this.service.findCustomerServices(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Rental], { name: "rentals" })
  async findRentals(
    @graphql.Parent() parent: Customer,
    @graphql.Args() args: RentalFindManyArgs
  ): Promise<Rental[]> {
    const results = await this.service.findRentals(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
