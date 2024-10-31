export enum ButtonType {
  MOBILE,
  TABLET,
  DESKTOP,
}

export enum Category {
  BANIG = "Banig",
  BAYONG = "Bayong",
  WALLET = "Wallet",
}

export enum Gender {
  MALE = "Male",
  FEMALE = "Female",
  OTHER = "Other",
}

export enum PageType {
  SHOPPING_CART,
  CHECKOUT,
}

export type Account = {
  email: string;
  accessToken?: string;
};

export type Address = {
  addressLine1: string;
  addressLine2?: string;
  barangay: string;
  cityOrMunicipality: string;
  province: string;
  zipCode: string;
  isDefault: false;
  contactPerson: string;
  contactNumber: string;
};

export type FullName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type Price = {
  decimal: number;
  fraction: number;
};

export type Product = {
  productId: string;
  cloudinaryPublicId: string;
  productName: string;
  price: {
    decimal: number;
    fraction: number;
  };
  stocks: number;
  sku: string;
};

export type User = {
  name: FullName;
  email: string;
  gender?: Gender;
  birthday?: Date;
  shippingAddress?: Address[];
  billingAddress?: Address[];
};
