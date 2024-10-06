import CardFood from "@/components/cardFoods/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { propsHamburguer } from "@/utils/propsBurguerLivery"
import axios from "axios"
import Autoplay from "embla-carousel-autoplay"
import { useEffect, useState } from "react"

const HamburguerPage = () => {
    const [hamburguers, setHamburguers] = useState<propsHamburguer[]>([])

    const getHambuguer = async () => {
        try {
            const res = await axios.get('http://localhost:3000/hamburgers')
            setHamburguers(res.data)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getHambuguer()
    }, [])

    return (
        <div className="flex flex-col gap-6 items-start ml-48 mt-10">
            <div>
                <h1 className="font-bold text-[30px] text-[#272a50]">Veja a lista completa dos nossos hamburguers</h1>
            </div>
        <Carousel className="w-[80vw]"
        opts={{
            loop:true
        }}>
            <CarouselContent className="">
            {hamburguers.map((item) => (
                <CarouselItem className="md:basis-1/3 lg:basis-56 flex items-center justify-center">
                        <CardFood 
                            image={item.image}
                            title={item.name}
                            price={item.price}
                        />
                </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>

        </div>
    )
}

export default HamburguerPage