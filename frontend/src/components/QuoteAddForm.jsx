import React, { useState } from "react"
import QuoteModal from "./QuoteModal"
import { createQuote } from "../api/QuotesAPI"

const QuoteForm = ({ onAddQuote }) => {
  const [quoteText, setQuoteText] = useState("")
  const [quoteAuthor, setQuoteAuthor] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    if (name === "quoteText") {
      setQuoteText(value)
    } else if (name === "quoteAuthor") {
      setQuoteAuthor(value)
    }
  }

  const handleAddQuote = async () => {
    const quoteData = { text: quoteText, author: quoteAuthor }
    const createdQuote = await createQuote(quoteData)
    if (createdQuote) {
      onAddQuote(createdQuote)
      setQuoteText("")
      setQuoteAuthor("")
      setIsModalOpen(false)
    }
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div>
      <button onClick={openModal}>Tambah Quote</button>

      {isModalOpen && (
        <QuoteModal
          quote={{ text: quoteText, author: quoteAuthor }}
          onClose={closeModal}
        >
          <div className="quote-form">
            <input
              type="text"
              name="quoteText"
              value={quoteText}
              onChange={handleInputChange}
              placeholder="Quote"
            />
            <input
              type="text"
              name="quoteAuthor"
              value={quoteAuthor}
              onChange={handleInputChange}
              placeholder="Author"
            />
            <button onClick={handleAddQuote}>Submit</button>
          </div>
        </QuoteModal>
      )}
    </div>
  )
}

export default QuoteForm
