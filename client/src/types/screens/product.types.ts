export interface StateTypes {
  flag: boolean;
  url: string;
}

export interface ProductsSessionProps {
  flag: boolean;
  windowPayOpenedFlag: boolean;
}

export interface ProductType {
  productId: number;
  productName: string;
  sales: number;
  description: string;
  category: string;
  photos: string[];
  productPrice: number;
  inStock: number;
}

export interface ProductProps {
  product: ProductType;
  openedPicture: any;
  setOpenedPicture: any;
  mappedPhotos: JSX.Element[];
  payWays: Array<string>;
  openedWindowPay: boolean;
  setOpenedWindowPay: any;
}

export interface Photo {
  url: string;
}
