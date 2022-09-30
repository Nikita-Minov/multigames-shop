export interface CreateProductDto {
  readonly productName: string;
  readonly productPrice: number;
  readonly data: string[];
  readonly category?: string;
  readonly description?: string;
  readonly photos?: string[];
  readonly categoryId: number;
}
