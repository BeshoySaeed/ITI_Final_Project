export interface Item {
    id: string;
    name: string;
    image: string;
    price: number;
    discount: number;
    description: string;
    category_id: string;
    active: boolean;
    created_at?: string | Date;
    updated_at?: string;
  }
