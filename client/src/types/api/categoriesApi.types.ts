export interface GetCategory {
  categoryId: number;
}

export interface DeleteCategory {
  categoryId: number;
  token: string;
}

export interface AddCategory {
  categoryName: string;
  token: string;
}
