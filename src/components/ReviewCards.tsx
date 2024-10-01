"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { div } from "framer-motion/client";


export default function ReviewCards() {
    return (

        <div className="h-[40rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
            <h2 className="font-bold text-3xl text-center mb-8 z-10">Hear Our Harmony: Our voices of Success</h2>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl">
                    <InfiniteMovingCards
                        items={userReviews}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        </div>



    );
}

const userReviews = [
    {
        quote:
            "The Music Academy app has completely transformed the way I practice. The personalized lessons and progress tracking have made learning piano so much easier and more enjoyable. Highly recommended for anyone looking to improve their musical skills!",
        name: "Rajib Pokhrel",
        title: "Piano Student",
    },
    {
        quote:
            "As someone who started learning violin as a hobby, this app has been a game changer. The tutorials are easy to follow, and the feedback system helps me improve with every session!",
        name: "Shyam Raj",
        title: "Violin Enthusiast",
    },
    {
        quote:
            "I use the Music Academy app with my students, and it’s been a fantastic tool for tracking progress and setting goals. The interactive features make learning more engaging for them.",
        name: "Rachit Pokhrel",
        title: "Guitar Instructor",
    },
    {
        quote:
            "This app is incredible! The vocal exercises and tips have helped me refine my techniques and improve my range. I recommend it to all my students!",
        name: "Bibek Gairel",
        title: "Voice Coach",
    },
    {
        quote:
            "The rhythm practice tools in the Music Academy app are superb! It’s like having a metronome, teacher, and practice space all in one place. Perfect for drummers of all levels.",
        name: "Suraj Adhikari",
        title: "Drum Teacher",
    },
    {
        quote:
            "I was nervous about learning an instrument online, but this app makes it so easy! The step-by-step lessons are clear, and I can go at my own pace. Absolutely love it!",
        name: "Rupesh Pokhrel",
        title: "Beginner Flutist",
    },
    {
        quote:
            "I’ve struggled with music theory for years, but the app’s interactive quizzes and explanations made everything click. It’s a must-have for anyone serious about understanding music!",
        name: "Balkrishna Ghimire",
        title: "Music Theory Student",
    },
    {
        quote:
            "The sheet music library and practice tools in this app are unparalleled. It’s so convenient to have everything in one place, whether I’m practicing scales or learning new pieces.",
        name: "Sujit Shrestha",
        title: "Classical Guitarist",
    },
    {
        quote:
            "The app offers great exercises and tracks progress perfectly. I’ve improved so much in just a few months, and it’s become a daily part of my practice routine.",
        name: "Narayan Gopal",
        title: "Saxophone Player",
    },
    {
        quote:
            "I’ve always wanted to learn piano but didn’t know where to start. The Music Academy app made it easy, fun, and so rewarding. Now I can finally play my favorite songs!",
        name: "KK",
        title: "Music Lover",
    },
];
