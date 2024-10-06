import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

interface propsCarrossel {
    children: React.ReactNode
}

const Carrossel = ({children}: propsCarrossel) => {
    return (
        <Carousel className="w-[80vw] ">
            <CarouselContent>
                <div className="flex">
                <CarouselItem>
                    {children}
                </CarouselItem>
                </div>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export default Carrossel