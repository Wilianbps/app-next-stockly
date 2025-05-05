import "server-only"
import { db } from "@/app/_lib/prisma";
import type { Product } from "@prisma/client";

export const getProducts = async ():Promise<Product[]> => {
 return db.product.findMany({});
}