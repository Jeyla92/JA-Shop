export interface Product {
    id: number;
    name: string;
    brand: string;
    price: number;
    image: string;
    url_slug: string; // för URL, t.ex. "svart-tshirt"
    description?: string; 
  }

