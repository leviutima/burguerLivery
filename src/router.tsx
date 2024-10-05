import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layout/defaultLayout/defaultLayout";
import { Home } from "./pages/Home/Home";
import HamburguerPage from "./pages/cardapio/hamburguer";
import { CardapioLayout } from "./layout/cardapioLayout/cardapioLayout";
import Entradinhas from "./pages/cardapio/entradinhas";
import AllFoods from "./pages/cardapio/cardapio";

export function Router() {
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route path="/" element={<Home />}/>
            </Route>

            <Route path="/cardapio" element={<CardapioLayout />}>
                 <Route path="teste" element={<AllFoods />}/> *
                <Route path="hamburguer" element={<HamburguerPage />}/>
                <Route path="entradinhas" element={<Entradinhas />}/>
            </Route>
        </Routes>
    )
}