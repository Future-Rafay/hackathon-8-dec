import { client } from "@/sanity/lib/client";

export async function getProducts() {
  const query = `
    *[_type == "products"]{
      _id,
      name,
      description,
      price,
      "imageUrl": image.asset->url,
      category,
      discountPercent,
      isNew,
      colors,
      sizes
    }
  `;
  const products = await client.fetch(query);
  return products;
}
