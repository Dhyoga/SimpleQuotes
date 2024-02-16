import { Op } from "sequelize"
import "../libs/sequelize.js"
import { Quote } from '../models/quotes.model.js'

class QuotesService {
  constructor() {}

  async find() {
    const res = await Quote.findAll()
    return res
  }

  async findOne(id) {
    const res = await Quote.findByPk(id)
    return res
  }

  async create(data) {
    const res = await Quote.create(data)
    return res
  }

  async update(id, data) {
    const model = await this.findOne(id)
    const res = await model.update(data)
    return res
  }

  async delete(id) {
    const model = await this.findOne(id)
    await model.destroy()
    return { deleted: true }
  }

  async search(query) {
    const res = await Quote.findAll({
      where: {
        [Op.or]: [
          {
            author: {
              [Op.like]: `%${query}%`,
            },
          },
          {
            quote: {
              [Op.like]: `%${query}%`,
            },
          },
        ],
      },
    })
    return res
  }
  
}

export {QuotesService}
