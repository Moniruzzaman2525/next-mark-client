import ManageProducts from "@/components/modules/shop/product";
import { getAllProducts } from "@/services/Product";

const ManageProductsPage = async ({ searchParams }: { searchParams : Promise<{page: string}>}) => {
    const {page} = await searchParams
    const { data, meta } = await getAllProducts(page, "1");
    return (
        <div>
            <ManageProducts meta={meta} products={data} />
        </div>
    );
};

export default ManageProductsPage;
