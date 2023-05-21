export interface Recipe {
  id?: string;
  userId: string;
  name: string;
  shortDescription: string;
  timeInMinutes: number;
  products: Array<string>;
  picture: string;
  longDescription: string;
  tags: Array<Tag>;
  postedOn: Date;
  lastUpdatedDate: Date;
}

export type Tag =
  | "VEGETABLES"
  | "VEGAN"
  | "EASY"
  | "SALADS"
  | "PASTA"
  | "GLUTEN"
  | "MEDIUM"
  | "HARD"
  | "NEW"
  | "VEGETARIAN"
  | "EGGS"
  | "BREAKFAST"
  | "NO-FRY";
  
export const Tags: Array<Tag> = [
  "EASY",
  "EGGS",
  "GLUTEN",
  "HARD",
  "MEDIUM",
  "NEW",
  "PASTA",
  "SALADS",
  "VEGAN",
  "VEGETABLES",
  "VEGETARIAN",
  "BREAKFAST",
  "NO-FRY",
];
