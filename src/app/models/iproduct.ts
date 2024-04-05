import { ICategory } from "./icategory";

export interface IProduct {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    category: ICategory,
    images: string[],
    sold: number
    insteadOf: number,
}
