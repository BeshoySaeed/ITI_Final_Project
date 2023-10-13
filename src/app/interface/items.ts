export interface Item {
    id: string;
    title: string;
    description: string;
    genre: string;
    released?: string | Date;
    ageRating: string;
    price: number;
    discountedPrice: number;
    onSale: boolean;
    image: string;
    tags: Array<string>;
    favorite: boolean;
  }
  