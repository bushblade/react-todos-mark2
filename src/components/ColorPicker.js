import React, { Component } from 'react'

export default class ColorPicker extends Component {
  state = {
    showMenu: false
  }

  toggleMenu = () =>
    this.setState(({ showMenu }) => {
      return { showMenu: !showMenu }
    })

  closeDropdown = e => {
    if (!e.target.classList.contains('color-pick')) {
      this.setState({ showMenu: false })
      document.removeEventListener('click', this.closeDropdown)
    }
  }

  render() {
    const { card, context } = this.props
    const { state: { showMenu }, toggleMenu, closeDropdown } = this // prettier-ignore
    return (
      <span
        className={`icon color-pick ${showMenu ? 'active' : ''}`}
        onClick={() => {
          toggleMenu()
          document.addEventListener('click', closeDropdown)
        }}>
        <i className="fas fa-chevron-down" />
        <div className="color-picker" style={{ backgroundColor: card.color }}>
          some colours
        </div>
      </span>
    )
  }
}
