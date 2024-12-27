import { Review } from '@/types/reviewcard.types';
import Image from 'next/image';
import React from 'react';

type TestimonialCardProps = {
    review: Review;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ review }) => {
    return (
        <div
            key={review.id}
            className="w-full h-[240px] sm:w-[300px] sm:h-[180px]  px-6 py-4 border border-[rgba(0,0,0,0.3)] rounded-[20px] shrink-0 flex flex-col justify-between"
        >
            <div>
                <div className="mb-[15px] sm:mb-[5px] flex">
                    {Array.from({ length: review.rating }).map((_, i) => (
                        <Image
                            key={i}
                            src="/svgs/staricon.svg"
                            alt="star icon"
                            height={22.58}
                            width={22.58}
                            aria-label="star icon"
                            className="sm:w-[14px] sm:h-[14px]"
                        />
                    ))}
                </div>
                <div className="flex gap-2 items-center mb-2">
                    <h3 className="font-semibold text-lg sm:text-sm">{review.user}</h3>
                    <Image
                        src="/svgs/tickicon.svg"
                        alt="verified tick icon"
                        height={24}
                        width={24}
                        aria-label="verified tick icon"
                        className="sm:w-[14px] sm:h-[14px]"
                    />
                </div>
                <p className="text-[16px] text-[rgba(0,0,0,0.6)] sm:text-[12px]">{review.content}</p>
            </div>
        </div>
    );
};

export default TestimonialCard;
