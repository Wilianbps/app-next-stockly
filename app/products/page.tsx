import { PlusIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import { DataTable } from "../_components/ui/data-table";
import { productTableColumn } from "./_components/table-columns";
import { getProducts } from "../_data_access/product/get-products";

async function ProductsPage() {
const products = await getProducts();
/* const response = await fetch("http://localhost:3000/api/products")
const products = await response.json() */

  return (
    <div className="m-8 w-full space-y-8 bg-white p-8">
      <div className="flex w-full items-center justify-between">
        <div className="space-y-1">
          <span className="text-xs font-semibold text-slate-500">
            Gestão de Produtos
          </span>
          <h2 className="text-xl font-semibold">Produtos</h2>
        </div>
        <Button className="gap-2">
          <PlusIcon size={20} /> Novo Produto
        </Button>
      </div>
      <DataTable columns={productTableColumn} data={JSON.parse(JSON.stringify(products))} />
    </div>
  );
}

export default ProductsPage;
