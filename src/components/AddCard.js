import React from 'react'
import actions from '../actions'

const AddCard = ({ store: { dispatch } }) => (
  <button className="add-card-btn" onClick={() => dispatch(actions.ADD_CARD())}>
    Add Card
  </button>
)

export default AddCard
