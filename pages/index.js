import HeroBanner from "@/components/HeroBanner";
import Wrapper from "@/components/Wrapper";
import ProductCard from "@/components/ProductCard";

import { fetchDataFromApi } from "@/utils/api";

export default function Home({ products }) {
  return (
    <main>
      <HeroBanner />
      <Wrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:px-5 px-0 my-12 gap-5">
          {products?.data?.map((product) => (
            <ProductCard key={product?.id} data={product} />
          ))}
        </div>
      </Wrapper>
    </main>
  );
}

export async function getStaticProps() {
  const products = await fetchDataFromApi("/api/products?populate=*");
  return {
    props: { products: products },
  };
}
