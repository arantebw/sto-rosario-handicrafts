import { retrieveAllProducts } from "@/actions";
import { Product } from "@/types";
import { Table } from "@radix-ui/themes";

export default async function InventoryDetails() {
  const productsList = await retrieveAllProducts();

  return (
    <div className="flex-grow p-4 rounded-md border">
      <h3 className="text-xl">Inventory</h3>
      <hr className="my-4" />
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Product Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Stocks</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>SKU</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {productsList.map((p: Product) => (
            <Table.Row key={p.productId}>
              <Table.RowHeaderCell>{p.productName}</Table.RowHeaderCell>
              <Table.Cell>{p.stocks}</Table.Cell>
              <Table.Cell>{p.sku}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
}
