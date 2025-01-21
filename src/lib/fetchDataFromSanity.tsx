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

export async function getProductById(productId: string) {
  const query = `
    *[_type == "products" && _id == $productId]{
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

  const productData = await client.fetch(query, { productId });
  return productData.length ? productData[0] : null;
}

export async function getNewArrivalProducts() {
  const query = 
  ` *[_type == "products"][0..3]{
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
    } `;

  const products = await client.fetch(query);
  return products;
}

export async function getTopSellingProducts() {
  const query = 
  ` *[_type == "products"][4..7]{
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
    } `;

  const products = await client.fetch(query);
  return products;
}
