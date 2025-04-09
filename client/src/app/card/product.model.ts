export interface Product {
    id: number;
    name: string;
    brand: string;
    price: number;
    imageUrl: string;
    slug: string; // för URL, t.ex. "svart-tshirt"
    description?: string; 
  }

