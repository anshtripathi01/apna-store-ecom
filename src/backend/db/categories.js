import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

 export const categories = [
  {
    _id: uuid(),
    categoryName: "Shirts",
      Image:"data:image/jpeg;base64,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",
  },
  {
    _id: uuid(),
    categoryName: "T-Shirts",
      Image:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/6719002/2019/2/20/83f31b93-0593-4605-97e7-4b52c19db2fb1550666324121-Roadster-Men-Blue-Solid-Polo-Collar-T-shirt-3911550666322734-1.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Jeans",
    Image:"data:image/jpeg;base64,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",
  },
  {
    _id: uuid(),
    categoryName: "Casual Shoes",
      Image:"data:image/jpeg;base64,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",
  },
];