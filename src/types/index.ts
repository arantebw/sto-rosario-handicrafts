export type Account = {
  email: string;
  accessToken?: string;
};

export type Product = {
  productId: string;
  cloudinaryPublicId: string;
  productName: string;
  price: {
    decimal: number;
    fraction: number;
  };
};
