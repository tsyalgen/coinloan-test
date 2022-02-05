import { rest } from 'msw'
import { generatePairs, generateRates } from "@/utils/generators";

export default [
    rest.get('/pairs', (req, res,ctx ) => {
        return res(
            ctx.json(generatePairs())
        )
    }),
    rest.get('/rates', (req, res,ctx ) => {
        return res(
            ctx.json(generateRates())
        )
    })
]
