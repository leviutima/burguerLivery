import { priceFormat } from "@/utils/priceFormat"
import { Plus } from "lucide-react"

interface CardFood {
    image: string,
    title: string,
    description?: string,
    price: number,
}

const CardFood = ({ image, title, description, price }: CardFood) => {
    return (
        <div className="flex flex-col gap-2 bg-white shadow-md rounded-md items-start w-[10vw] justify-center h-[25vh]">
            <img src={image} className="w-auto" />
            <div className="ml-[10px] flex flex-col gap-4 w-full">
                <div className="flex ">
                <h2 className="font-semibold text-center">{title}</h2>
                    <p>{description}</p>
                </div>
                <div className="flex items-center gap-[70px]">
                    <span className="flex items-start">{priceFormat({ price })}</span>
                    <Plus />
                </div>
            </div>
        </div>
    )
}

export default CardFood
