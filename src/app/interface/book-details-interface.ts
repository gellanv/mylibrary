import { ReviewInterface } from '../interface/review-interface';

export interface BookDetailsInterface {
    id?: number,    
    title?: string,
    author?: string,
    genre?: string,
    cover?: string,
    content?: string,
    rating?: number,
    reviewsNumber?: number,
    reviews?: ReviewInterface[]
 }