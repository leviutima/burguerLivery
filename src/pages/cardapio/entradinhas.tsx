import CardFood from "@/components/cardFoods/card"
import { propsEntradinhas } from "@/utils/propsBurguerLivery"
import axios from "axios"
import { useEffect, useState } from "react"

const Entradinhas = () => {
    const [entradinhas, setEntradinhas] = useState<propsEntradinhas[]>([])

    const getEntradinhas = async() => {
        try{
            const res = await axios.get('http://localhost:3000/starters')
            setEntradinhas(res.data)
        }
        catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getEntradinhas()
    })

    return(
        <>
            <div className="flex flex-col gap-8 items-start ml-48 mt-10">
                <h1 className="font-bold text-[30px] text-[#272a50]">Veja a lista completa de nossas entradinhas</h1>
                <div className="flex gap-8">
                    {entradinhas.map((item) => {
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
        </>
    )
}

export default Entradinhas