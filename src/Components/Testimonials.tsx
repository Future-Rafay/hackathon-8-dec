import React from 'react'

type Review = {
    id: number;
    user: string;
    content: string;
    rating: number;
    date: string;
};

export const reviewsData: Review[] = [
    {
        id: 1,
        user: "Alex K.",
        content:
            '"Finding clothes that align with my personal style used to be a challenge until I discovered Taha Sidd. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”',
        rating: 5,
        date: "August 14, 2023",
    },
    {
        id: 2,
        user: "Sarah M.",
        content: `"I'm blown away by the quality and style of the clothes I received from Taha Sidd. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`,
        rating: 5,
        date: "August 15, 2023",
    },
    {
        id: 3,
        user: "Ethan R.",
        content: `"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."`,
        rating: 5,
        date: "August 16, 2023",
    },
    {
        id: 4,
        user: "Olivia P.",
        content: `"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."`,
        rating: 5,
        date: "August 17, 2023",
    },
    {
        id: 5,
        user: "Liam K.",
        content: `"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."`,
        rating: 5,
        date: "August 18, 2023",
    },
    {
        id: 6,
        user: "Samantha D.",
        content: `"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."`,
        rating: 5,
        date: "August 19, 2023",
    },
];

const Testimonials = () => {
    return (
        <div className="max-w-[1240px] mx-auto px-4">
            <h1 className="text-[48px] font-bold uppercase text-center">Our Happy Customers</h1>
            <div className="flex gap-5 mt-10 overflow-x-auto" id="testimonials">
                {reviewsData.map((review) => (
                    <div
                        key={review.id}
                        className="w-[400px] h-[240px] px-6 py-4 border border-[rgba(0,0,0,0.3)] rounded-[20px] shrink-0 flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex gap-2 items-center mb-2">
                                <h3 className="font-semibold text-lg">{review.user}</h3>
                                <div className="flex">
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="#01AB31"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 2.8291C10.0716 2.8291 8.18657 3.40093 6.58319 4.47227C4.97982 5.54362 3.73013 7.06636 2.99218 8.84794C2.25422 10.6295 2.06114 12.5899 2.43735 14.4812C2.81355 16.3725 3.74215 18.1098 5.10571 19.4734C6.46928 20.837 8.20656 21.7656 10.0979 22.1418C11.9892 22.518 13.9496 22.3249 15.7312 21.5869C17.5127 20.849 19.0355 19.5993 20.1068 17.9959C21.1782 16.3925 21.75 14.5075 21.75 12.5791C21.7473 9.99408 20.7192 7.51571 18.8913 5.68783C17.0634 3.85994 14.585 2.83183 12 2.8291ZM16.2806 10.8597L11.0306 16.1097C10.961 16.1795 10.8783 16.2348 10.7872 16.2725C10.6962 16.3103 10.5986 16.3297 10.5 16.3297C10.4014 16.3297 10.3038 16.3103 10.2128 16.2725C10.1218 16.2348 10.039 16.1795 9.96938 16.1097L7.71938 13.8597C7.57865 13.719 7.49959 13.5281 7.49959 13.3291C7.49959 13.1301 7.57865 12.9392 7.71938 12.7985C7.86011 12.6577 8.05098 12.5787 8.25 12.5787C8.44903 12.5787 8.6399 12.6577 8.78063 12.7985L10.5 14.5188L15.2194 9.79848C15.2891 9.72879 15.3718 9.67352 15.4628 9.63581C15.5539 9.59809 15.6515 9.57868 15.75 9.57868C15.8486 9.57868 15.9461 9.59809 16.0372 9.63581C16.1282 9.67352 16.2109 9.72879 16.2806 9.79848C16.3503 9.86816 16.4056 9.95088 16.4433 10.0419C16.481 10.133 16.5004 10.2306 16.5004 10.3291C16.5004 10.4276 16.481 10.5252 16.4433 10.6163C16.4056 10.7073 16.3503 10.79 16.2806 10.8597Z" />
                                    </svg>
                                </div>
                            </div>
                            <p className="text-[16px] text-[rgba(0,0,0,0.6)]">{review.content}</p>
                        </div>
                        <p className="text-sm text-[rgba(0,0,0,0.6)] mt-2">{review.date}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials;
