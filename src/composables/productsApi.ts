import { computed, ref } from "vue";
import type { Ref } from "vue";
import type { Product } from "@/types";
import { productService } from "@/services/products";

export default async function useProductsApi() {
  const products: Ref<Product[]> = ref([]);
  products.value = await productService.get();

  const totalProducts = computed(() => products.value.length);

  return { products, totalProducts };
}
