import ButtonCardapio from "@/components/buttonCardapio/buttonCardapio";
import Header from "@/components/header/header";
import Cardapio from "@/pages/cardapio/cardapio";
import { Outlet } from "react-router-dom";

export function CardapioLayout() {
    return(
        <div className="flex flex-col ">
            <Header />
            <div className="flex flex-col items-center ">
                <ButtonCardapio />
            </div> 
            <Cardapio />
        </div>
    )
}