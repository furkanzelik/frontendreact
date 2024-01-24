import React from "react";
import civilizations from "../assets/images/civilizations.jpg";

function IntroPost(){
    return (
        <div
            className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row mt-24 ml-4 mr-4 grow-[9]">
            <img
                className="h-96 w-full  rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src= {civilizations}
                alt=""/>
            <div className="flex flex-col justify-start p-6">
                <h5
                    className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                    Information about your favorite empire ?
                </h5>
                <p className="mb-4 text-base text-neutral-700 dark:text-neutral-200">

                    Embark on a journey through time and discover the civilizations that shaped the world of Age of Empires.
                    Venture into a virtual museum of empires, where you'll encounter the diverse cultures, unique strategies, and enduring legacies that have captivated players for generations. Immerse yourself in the rich histories and captivating stories of the civilizations that have graced the battlefields of Age of Empires, each with its distinctive strengths and playstyles.
                    From the mighty Romans to the agile Mongols, from the resourceful Britons to the enigmatic Japanese, each civilization offers a unique blend of military prowess, economic might, and cultural innovation.
                    Delve into their origins, explore their technological advancements, and discover the strategies that have made them formidable contenders on the world stage. Engage in interactive simulations to put your strategic skills to the test and experience the thrill of commanding these legendary civilizations.
                    Uncover the hidden depths of these empires, from their revered leaders to their fascinating traditions, and uncover the secrets that have made them enduring icons of Age of Empires.
                    As you navigate through this virtual museum, you'll gain a deeper understanding of the civilizations that have shaped the game's rich history and inspired countless players worldwide.
                    Welcome to the Age of Empires Empires Museum, where history comes alive and strategy takes center stage.
                    Embrace the legacy of these empires and embark on your own grand conquests!
                </p>

            </div>
        </div>
    )
}

export default IntroPost