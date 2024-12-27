import { cn } from '@/lib/utils';
import { integralCF } from '@/styles/fonts';
import React from 'react';
import TestimonialCard from './TestimonialCard';
import { Review } from '@/types/reviewcard.types';

// Mock data for testimonials
export const reviewsData: Review[] = [
    {
        id: 1,
        user: "Alex K.",
        content:
            '"Finding clothes that align with my personal style used to be a challenge until I discovered Taha Sidd. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”',
        rating: 5,
    },
    {
        id: 2,
        user: "Sarah M.",
        content:
            `"I'm blown away by the quality and style of the clothes I received from Taha Sidd. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`,
        rating: 5,
    },
    {
        id: 3,
        user: "Ethan R.",
        content:
            `"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."`,
        rating: 5,
    },
    {
        id: 4,
        user: "Olivia P.",
        content:
            `"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."`,
        rating: 5,
    },
    {
        id: 5,
        user: "Liam K.",
        content:
            `"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."`,
        rating: 5,
    },
    {
        id: 6,
        user: "Samantha D.",
        content:
            `"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."`,
        rating: 5,
    },
];

const Testimonials: React.FC = () => {
    return (
        <div className="max-w-[1240px] mx-auto px-4">
            <h1
                className={cn([
                    integralCF.className,
                    "text-[48px] font-bold uppercase sm:text-[36px] sm:text-center"
                ])}
            >
                Our Happy Customers
            </h1>
            <div className="grid grid-cols-3 sm:grid-cols-1 gap-5 mt-10 overflow-x-auto" id="testimonials">
                {reviewsData.map((review) => (
                    <TestimonialCard key={review.id} review={review} />
                ))}
            </div>
        </div>
    );
};

export default Testimonials;

