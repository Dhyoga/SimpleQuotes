import {Quote, QuoteSchema} from "./quotes.model.js"

const setupModels = (sequelize) => {
  Quote.init(QuoteSchema, Quote.config(sequelize))
}

export default setupModels
