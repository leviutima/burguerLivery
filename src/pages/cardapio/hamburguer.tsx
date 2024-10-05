import CardFood from "@/components/cardFoods/card"
import { propsHamburguer } from "@/utils/propsBurguerLivery"
import axios from "axios"
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
        <div className="flex flex-col gap-8 items-start ml-48 mt-10">
            <div>
                <h1 className="font-bold text-[30px] text-[#272a50]">Veja a lista completa dos nossos hamburguers</h1>
            </div>
            <div className="flex gap-8">
                {hamburguers.map((item) => {
                    return(
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

export default HamburguerPage