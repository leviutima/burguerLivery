import { Link } from "react-router-dom"
import { Button } from "../ui/button"

const ButtonCardapio = () => {
    return(
        <div className="flex items-center gap-20">
            <Link to='hamburguer'>
                <Button className="bg-[#FFC00C] w-[8vw] h-[5vh] shadow-md">Hamburguer</Button>
            </Link>
            <Link to='entradinhas'>
                <Button className="bg-[#FFC00C] w-[8vw] h-[5vh] shadow-md">Entradinhas</Button>
            </Link>
            <Link to='bebidas'>
                <Button className="bg-[#FFC00C] w-[8vw] h-[5vh] shadow-md">Bebidas</Button>
            </Link>
            <Link to='sobremesas'>
                <Button className="bg-[#FFC00C] w-[8vw] h-[5vh] shadow-md">Sobremesas</Button>
            </Link>
        </div>
    )
}

export default ButtonCardapio