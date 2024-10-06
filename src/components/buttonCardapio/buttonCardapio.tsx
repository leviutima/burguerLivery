import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { Sandwich } from "lucide-react"
import { GiCakeSlice, GiFrenchFries, GiHamburger } from "react-icons/gi"
import { BiDrink } from "react-icons/bi"

const ButtonCardapio = () => {
    return(
        <div className="flex items-center lg:gap-20 sm:gap-20 gap-8">
            <Link to='hamburguer'>
                <Button className="bg-[#FFC00C] w-[8vw] h-[5vh] shadow-md hidden sm:block">Hamburguer</Button>
                <Button className="bg-[#FFC00C] w-[15vw] flex items-center  justify-center h-[5vh] shadow-md  sm:hidden "><GiHamburger /></Button>
            </Link>
            <Link to='entradinhas'>
                <Button className="bg-[#FFC00C] w-[8vw] h-[5vh] shadow-md hidden sm:block">Entradinhas</Button>
                <Button className="bg-[#FFC00C] w-[15vw] flex items-center  justify-center h-[5vh] shadow-md  sm:hidden "><GiFrenchFries /></Button>
            </Link>
            <Link to='bebidas'>
                <Button className="bg-[#FFC00C] w-[8vw] h-[5vh] shadow-md hidden sm:block">Bebidas</Button>
                <Button className="bg-[#FFC00C] w-[15vw] flex items-center  justify-center h-[5vh] shadow-md  sm:hidden "><BiDrink /></Button>
            </Link>
            <Link to='sobremesas'>
                <Button className="bg-[#FFC00C] w-[8vw] h-[5vh] shadow-md hidden sm:block">Sobremesas</Button>
                <Button className="bg-[#FFC00C] w-[15vw] flex items-center  justify-center h-[5vh] shadow-md  sm:hidden "><GiCakeSlice /></Button>
            </Link>
        </div>
    )
}

export default ButtonCardapio