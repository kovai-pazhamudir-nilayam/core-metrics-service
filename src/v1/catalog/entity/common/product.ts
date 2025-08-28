import { Discounts } from './discount';
import { Media } from './media';
import { ListPrice } from './price';
import { Stock } from './stock';

interface Variant {
  variant_id: string;
  product_url: string;
  display_name: string;
  media: Media;
  prices: ListPrice[];
  discounts: Discounts;
  stock_details: Stock;
}

export interface Product {
  product_id: string;
  brand_id: string;
  brand_name: string;
  variants: Variant[];
}
