export interface GetProduct {
  productId: number;
}

export interface DeleteProduct {
  productId: number;
  token: string;
}

export interface CreateProduct {
  productName: string;
  productPrice: number;
  data: {
    accounts: Array<string>;
  }
  description: string;
  photos: {
    arr: Array<string>;
  }
  categoryId: number;
  token: string;
}

export interface AddData {
  productId: number;
  data: string;
  token: string;
}
