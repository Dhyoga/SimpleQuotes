import React, { useEffect, useState } from "react"
import Masonry from "react-masonry-css"
import { randomBoxColor, randomSize, shuffled } from "../utils/Helpers"
import {
  getQuotes,
  createQuote,
  updateQuote,
  deleteQuote,
  searchQuotes
} from "../api/QuotesAPI"
import QuoteModal from "./QuoteModal"

const Gallery = () => {
  const breakpointColumnsObj = {
    default: 5,
    1100: 4,
    700: 3,
    500: 2,
  }

  const [quotes, setQuotes] = useState([])
  const [selectedQuote, setSelectedQuote] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchQuotes()
  }, [searchTerm])

  const fetchQuotes = async () => {
    try {
      let quotesData = await getQuotes()
      if (searchTerm) {
        quotesData = await searchQuotes(searchTerm);
      } else {
        quotesData = await getQuotes();
      }
      const shuffledQuotes = shuffled(quotesData)
      setQuotes(shuffledQuotes)
    } catch (error) {
      console.error("Error fetching quotes:", error)
    }
  }

  const openModal = (quote) => {
    setSelectedQuote(quote)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setIsEditing(false)
  }

  const handleEdit = (quote) => {
    setSelectedQuote(quote)
    setIsEditing(true)
  }

  const handleDelete = async (quoteId) => {
    try {
      await deleteQuote(quoteId)
      fetchQuotes()
      closeModal()
      window.alert("Quote Deleted Successfully.")
    } catch (error) {
      console.error(`Error deleting quote with ID ${quoteId}:`, error)
    }
  }

  const handleSave = async (quote) => {
    try {
      if (quote.id != quotes.length + 1) {
        await updateQuote(quote.id, quote)
        window.alert("Quote Updated Successfully.")
      } else {
        await createQuote(quote)
        console.log(quote)
        window.alert("Quote Added Successfully.")
      }
      fetchQuotes()
      closeModal()
    } catch (error) {
      console.error(error)
    }
  }

  const handleAddQuote = () => {
    setSelectedQuote({
      id: quotes.length + 1,
      text: "",
      author: "",
    })
    setIsEditing(true)
    setIsModalOpen(true)
  }

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      {/* Navbar */}
      <div style={{ backgroundColor: randomBoxColor() }} className="header">
        <a href="/">
          <h1 className="text">Quotes Gallery</h1>
        </a>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
          className="search-bar"
        />
        <button className="text" onClick={handleAddQuote}>
          Add Quote
        </button>
      </div>
      {/* Navbar */}
      
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {quotes.length ? (
          quotes.map((quote) => (
            <div
              key={quote.id}
              style={{ backgroundColor: randomBoxColor() }}
              onClick={() => openModal(quote)}
            >
              <p className={`text quote-text ${randomSize()}`}>{quote.quote}</p>
              <p className="text quote-author">{quote.author}</p>
            </div>
          ))
        ) : (
          <div style={{ backgroundColor: randomBoxColor() }}>
            <h1 className="text quote-text">There is no Quotes for you.</h1>
          </div>
        )}
      </Masonry>

      {isModalOpen && (
        <QuoteModal
          quote={selectedQuote}
          isEditing={isEditing}
          onClose={closeModal}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onSave={handleSave}
        />
      )}
    </div>
  )
}

export default Gallery
