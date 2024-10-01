"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import courseData from "../data/music_courses.json"
import Link from "next/link";
import { div } from "framer-motion/client";


interface Course {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
}


export function FeaturedCourses() {

    const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured)

    return (
        <div className="py-12 bg-gray-800">
            <div>
                <div className="text-center">
                    <h2 className="text-base text-teal-500 font-semibold tracking-wide uppercase">Featured Course</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-white text-white sm:text-4xl">Learn with the best </p>

                </div>
            </div>
            <div className="mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {featuredCourses.map((course: Course) => (
                        <div key={course.id} className="flex justify-center">
                            <BackgroundGradient className=" flex flex-col rounded-[22px] bg-white max-w-sm p-4 sm:p-10 dark:bg-zinc-900 overflow-hidden h-full">
                                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                    <p className="text-lg sm:text-xl text-black mt-4 mb-2
                                    dark:text-neutral-200">{course.title}</p>
                                    <p>{course.description}</p>
                                    <Link href={`/courses/${course.slug}`}>
                                        Learn More
                                    </Link>
                                </div>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-20 text-center">
                <Link href={"/courses"} className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transistion duration-200">
                    View All Courses
                </Link>
            </div>
        </div>
    );
}
