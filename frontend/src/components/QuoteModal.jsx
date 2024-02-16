import React, { useState } from "react"
import { randomSize, randomBoxColor } from "../utils/Helpers"

const QuoteModal = ({
  quote,
  isEditing,
  onClose,
  onEdit,
  onDelete,
  onSave,
}) => {
  const [text, setText] = useState(quote?.quote || "")
  const [author, setAuthor] = useState(quote?.author || "")
  
  const handleSubmit = (e) => {
    e.preventDefault()

    const newQuote = {
      id: quote?.id || "",
      quote: text.trim(),
      author: author.trim(),
    }

    onSave(newQuote)
  }
  const handleEdit = () => {
    onEdit(quote)
  }

  const handleDelete = () => {
    onDelete(quote.id)
  }

  const renderContent = () => {
    if (isEditing) {
      return (
        <form onSubmit={handleSubmit}>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Quote"
            rows={5}
            required
          />
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Author"
            required
          />
          <button className="text" type="submit">
            Save
          </button>
        </form>
      )
    } else {
      return (
        <>
          <p className={`text quote-text ${randomSize()}`}>{quote.quote}</p>
          <p className="text quote-author">{quote.author}</p>
        </>
      )
    }
  }

  return (
    <div className="modal">
      <div
        className="modal-content"
        style={{ backgroundColor: randomBoxColor() }}
      >
        <span className="close text" onClick={onClose}>
          &times;
        </span>
        {renderContent()}
        {isEditing ? (
          <button className="text" onClick={handleDelete}>
            Delete
          </button>
        ) : (
          <button className="text" onClick={handleEdit}>
            Edit
          </button>
        )}
      </div>
    </div>
  )
}

export default QuoteModal
