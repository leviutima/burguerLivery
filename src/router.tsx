import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layout/defaultLayout/defaultLayout";
import { Home } from "./pages/Home/Home";
import { CardapioLayout } from "./layout/cardapioLayout/cardapioLayout";
import Entradinhas from "./pages/cardapio/entradinhas";
import Cardapio from "./pages/cardapio/cardapio";
import HamburguerPage from "./pages/hamburguer/hamburguer";


export function Router() {
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route path="/" element={<Home />}/>
            </Route>

            <Route path="/cardapio" element={<CardapioLayout />}>
                <Route path="principais" element={<Cardapio />} />
                <Route path="hamburguer" element={<HamburguerPage />}/>
                <Route path="entradinhas" element={<Entradinhas />}/>
            </Route>
        </Routes>
    )
}