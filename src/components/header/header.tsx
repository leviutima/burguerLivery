import { LogIn, ShoppingCart, User } from "lucide-react"
import { Button } from "../ui/button"
import logo from '@/assets/hamburger-color.png'
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="py-4 mb-[56px]">
            <nav className=" sm: flex items-center gap-32 mx-[20px] xl: flex items-center justify-evenly">
                <Link to='/'>
                    <div className="flex items-center gap-2">
                        <img src={logo} className="w-8" />
                        <h1 className="font-semibold">Burguerlivery</h1>
                    </div>
                </Link>
                <ul className="hidden  lg:flex items-center gap-8 font-semibold text-[14px] md:dis">
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <li key="cardapio">
                        <Link to='/cardapio/principais'>Cardápio</Link>
                    </li>
                    <li>Sobre</li>
                    <li>Contato</li>
                </ul>
                <div className="hidden lg:flex gap-2 items-center">
                    <Button className="bg-[#FFC00C] text-[#3A3222] font-semibold rounded-full w-32 h-11">Cadastre-se</Button>
                    <Button variant='ghost' className="font-semibold text-[14px]">Login</Button>
                    <ShoppingCart />
                </div>
                <div className="flex lg:hidden gap-2 items-center">
                    <Button className="bg-[#FFC00C] text-[#3A3222] font-semibold rounded-full w-12 h-11"><User /></Button>
                    <Button variant='ghost' className="font-semibold text-[14px]"><LogIn /></Button>
                    <ShoppingCart />
                </div>
            </nav>
        </header>
    )
}

export default Header