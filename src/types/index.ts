// API
export enum IBaseResponseStatus {
  OK = 'OK',
  ERROR = 'ERROR',
}

export interface IBaseResponse<T> {
  status: IBaseResponseStatus;
  data: T;
}

// User
export enum IUserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  role: IUserRole;
}

export interface IUserProfile extends IUser {
  favorites: {
    id: string;
    name: string;
    price: number;
    image: string;
    slug: string;
    category: {
      name: string;
    };
  }[];
}

// Models
export interface IModel {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  createdAt?: Date;
  updatedAt?: Date;
  slug: string;
  category: ICategory | string;
  categoryId?: string;
  userId?: string;
}

// Category
export interface ICategory {
  id: string;
  name: string;
  image: string;
  slug: string;
  createdAt?: Date;
  updatedAt?: Date;
}
