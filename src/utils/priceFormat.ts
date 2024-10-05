// Intl é um objeto JS para formatação de númerio, datas e string globais
// em diferentes idiomas e convenções culturais

interface priceFormatProps {
    price: number
}

export const priceFormat = ({price}: priceFormatProps) => {
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(price)
}