export interface Iproduct {
    id: string;
    title: string;
    product_description: string[];
    rating: number;
    reviews_count: number;
    images: string[];
    tags: string[];
    product_details: string;
    return_policy: string | null;
    total_price: string;
    product_specifications: string | null;
    category: string;
    subcategory: string;
  }
  