import { Category } from '../common/category';
import { Pagination } from '../common/pagination';
import { Product } from '../common/product';

export interface ProductList {
  sub_categories: Category[];
  products: Product[];
  sort_options: []; // TODO - Need to check if required or not
  facets: []; // TODO - Need to check if required or not
  metadata: Pagination;
  total_count: number;
}
