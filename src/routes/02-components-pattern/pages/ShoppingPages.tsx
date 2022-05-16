import { ProductCard } from "../components";
import { products } from "../data/products";

const product = products[0];

export default function ShoppingPages() {
    return (
        <>
            <div>
                <h1>ShoppingPages</h1>
                <hr />
                <ProductCard product={product} key={product.id} initialValues={{ count: 0, maxCount: 12 }}>
                    {
                        ({ reset, count, changeCount, maxCount }) => (
                            <>
                                <ProductCard.Image />
                                <ProductCard.Title />
                                <ProductCard.Buttons />
                            </>
                        )
                    }
                </ProductCard>

            </div>
        </>
    )
}
