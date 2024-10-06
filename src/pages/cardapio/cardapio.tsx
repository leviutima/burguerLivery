import CardFood from "@/components/cardFoods/card"
import axios from "axios"
import React, { useEffect, useState } from "react"
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay";

interface FoodItem {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
}

const Cardapio = () => {
    const [foods, setFoods] = useState<FoodItem[]>([])

    const getFoods = async () => {
        try {
            const res = await axios.get('http://localhost:3000/menu')
            const { hamburgers, desserts, drinks, starters } = res.data;
            const allFoods = [
                ...hamburgers.map((food: FoodItem) => ({
                    ...food, category: 'Hamburgers'
                })),

                ...desserts.map((food: FoodItem) => ({
                    ...food, category: 'Desserts'
                })),

                ...drinks.map((food: FoodItem) => ({
                    ...food, category: 'Drinks'
                })),

                ...starters.map((food: FoodItem) => ({
                    ...food, category: 'Starters'
                })),
            ]

            setFoods(allFoods)
        }
        catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        getFoods()
    }, [])

    const hamburgers = foods.filter(food => food.category === 'Hamburgers');
    const desserts = foods.filter(food => food.category === 'Desserts');
    const drinks = foods.filter(food => food.category === 'Drinks');
    const starters = foods.filter(food => food.category === 'Starters');

    return (
        <div className="flex flex-col gap-8 items-start ml-48 mt-10">
            <div>
                <h1 className="font-bold text-[30px] text-[#272a50]">Veja nosso cardápio</h1>
            </div>
            <span>Nossos lanches</span>
            <Carousel className="w-[80vw]">
                <CarouselContent >
                    {hamburgers.map((item, index) => (
                        <CarouselItem key={index} className=" md:basis-1/3 lg:basis-56 flex items-center justify-center">
                            <div className="flex gap-8">
                                <CardFood
                                    image={item.image}
                                    title={item.name}
                                    price={item.price}
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            <div>
                <span>Nossas sobremesas</span>
            </div>
            <div className="flex gap-8">
                {desserts.map((item) => {
                    return (
                        <CardFood
                            image={item.image}
                            title={item.name}
                            price={item.price}
                        />
                    )
                })}
            </div>
            <div>
                <span>Nossas bebidas</span>
            </div>
            <div className="flex gap-8">
                {drinks.map((item) => {
                    return (
                        <CardFood
                            image={item.image}
                            title={item.name}
                            price={item.price}
                        />
                    )
                })}
            </div>
            <div>
                <span>Nossas sobremesas</span>
            </div>
            <div className="flex gap-8">
                {starters.map((item) => {
                    return (
                        <CardFood
                            image={item.image}
                            title={item.name}
                            price={item.price}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Cardapio