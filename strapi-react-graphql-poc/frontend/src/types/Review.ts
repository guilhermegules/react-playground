import { Category } from "./Category";

export type Review = {
  data: ReviewData;
};

export type Reviews = {
  data: Array<ReviewData>;
};

export type ReviewsGQL = {
  reviews: Reviews;
};

export type ReviewGQL = {
  review: {
    data: ReviewData;
  };
};

type ReviewData = {
  id: number;
  attributes: {
    body: ReviewBody[];
    title: string;
    rating: number;
    categories: { data: Category[] };
  };
};

type ReviewBody = {
  type: string;
  children: Array<{ type: string; text: string }>;
};
