import React from 'react'

const AddCard = ({ dispatch, ADD_CARD }) => (
  <button className="add-card-btn" onClick={() => dispatch(ADD_CARD())}>
    Add Card
  </button>
)

export default AddCard
