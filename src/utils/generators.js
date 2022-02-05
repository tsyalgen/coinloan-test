const currencyList = [
    "EUR",
    "USD",
    "XCD",
    "AOA",
    "LOL",
    "RUB",
    "BSD",
    "BHD",
    "CAD",
    "MAD"
]

//commissifeon - опечатка? использовал название из ТЗ, не стал менять на comission
const commissifeonValue = [
    "1.00",
    "2.00",
    "3.00",
    "4.00",
    "5.00"
]

const randomCommissifeon = function () {
    return commissifeonValue[Math.floor(Math.random()*commissifeonValue.length)];
}

const createPairsArray = function () {
    return currencyList.map( (firstEl, i) => {
        return currencyList.slice(i + 1).map(nextEl => [firstEl, nextEl])
    }).flat()
}


export const generatePairs = function () {

    const pairs = createPairsArray().map((el) => {
        return (
            {
                base_currency: el[0],
                quote_currency: el[1],
                commissifeon: randomCommissifeon()
            }
        )
    })

    return pairs
}

export const generateRates = function () {

    const rates = createPairsArray().map((el) => {
        return (
            {
                pair: `${el[0]}/${el[1]}`,
                rate: String(Math.ceil(Math.random()*110))
            }
        )
    })

    return rates
}

