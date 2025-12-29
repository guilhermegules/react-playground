import { CategoryType } from "../enums/Category";
import { Reviews } from "./Review";

export type Category = {
  id: string;
  attributes: {
    name: CategoryType;
  };
};

export type CategoryWithReview = {
  category: {
    data: {
      id: string;
      attributes: {
        name: CategoryType;
        reviews: Reviews;
      };
    };
  };
};

export type Categories = {
  categories: {
    data: Category[];
  };
};
