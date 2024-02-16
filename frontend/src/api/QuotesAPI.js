import axios from "axios"

const BASE_URL = "http://localhost:8000"

export const getQuotes = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/quotes`)
    return response.data
  } catch (error) {
    console.error("Error fetching quotes:", error)
    return []
  }
}

export const getQuoteById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/quotes/${id}`)
    return response.data
  } catch (error) {
    console.error(`Error getting quote with ID ${id}:`, error)
    throw error
  }
}

export const createQuote = async (quoteData) => {
  try {
    const response = await axios.post(`${BASE_URL}/quotes`, quoteData)
    return response.data
  } catch (error) {
    console.error("Error creating quote:", error)
    return null
  }
}

export const updateQuote = async (quoteId, quoteData) => {
  try {
    const response = await axios.put(`${BASE_URL}/quotes/${quoteId}`, quoteData)
    return response.data
  } catch (error) {
    console.error("Error updating quote:", error)
    return null
  }
}

export const deleteQuote = async (quoteId) => {
  try {
    await axios.delete(`${BASE_URL}/quotes/${quoteId}`)
    return true
  } catch (error) {
    console.error("Error deleting quote:", error)
    return false
  }
}

export const searchQuotes = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/quotes/search?q=${query}`)
    return response.data
  } catch (error) {
    console.error("Error searching quotes:", error)
    return []
  }
}
