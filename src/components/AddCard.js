import React from 'react'
import actions from '../actions'

const AddCard = ({ store }) => (
  <button className="add-card-btn" onClick={() => store.dispatch(actions.ADD_CARD())}>
    Add Card
  </button>
)

export default AddCard
