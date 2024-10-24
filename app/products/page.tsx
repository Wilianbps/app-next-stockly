import { PlusIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { productTableColumn } from "./_components/table-columns";

async function ProductsPage() {
  const products = await db.product.findMany({});

  //consigo aqui chamar o banco de dados
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
      <DataTable columns={productTableColumn} data={products} />
    </div>
  );
}

export default ProductsPage;
