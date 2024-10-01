"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
        title: "Expert Instructors",
        description:
            "Our music academy features a team of highly qualified, experienced musicians and educators who are passionate about teaching. Whether you're a beginner or looking to hone advanced skills, our instructors are dedicated to helping you reach your full potential.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                Expert Instructors
            </div>
        ),
    },
    {
        title: "Comprehensive Course Offerings",
        description:
            "We offer a wide range of courses across multiple instruments and music disciplines. From piano, guitar, and violin to music theory, composition, and digital production, we have something for every aspiring musician.",
        content: (
            <div className="h-[300px] w-[300px] flex items-center justify-center text-white">
                <Image
                    src="/images/musicteacher.jpg"
                    layout="responsive"
                    width={300}
                    height={300}
                    className="object-cover"
                    alt="Music Teacher"
                />
            </div>
        ),
    },
    {
        title: "Flexible Learning Options",
        description:
            "We understand that life can be busy. That's why our academy offers flexible learning options, including live classes, pre-recorded sessions, and 1-on-1 lessons, so you can learn at your own pace and convenience.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
                Flexible Learning Options
            </div>
        ),
    },
    {
        title: "Personalized Learning Path",
        description:
            "Every student is unique, and so is their journey in music. Our platform provides tailored learning paths based on your goals, skill level, and interests, ensuring a personalized experience that suits your needs.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                Personalized Learning Path
            </div>
        ),
    },
];
export function WhyChoseUs() {
    return (
        <div className="p-10">
            <StickyScroll content={content} />
        </div>
    );
}
