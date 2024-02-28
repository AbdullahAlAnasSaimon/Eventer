"use server";

import { CheckoutOrderParams } from "@/types";
import { handleError } from "../utils";

export const checkoutOrder = async (order: CheckoutOrderParams) => {
  try {
  } catch (error) {
    handleError(error);
  }
};
