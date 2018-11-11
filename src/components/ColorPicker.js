import React, { Component } from 'react'
import posed, { PoseGroup } from 'react-pose'

import actions from '../actions'

import ColorMenu from './ColorMenu'

const ColorPickerMenu = posed.div({
  exit: { opacity: 0, scale: 0, y: 0, x: 0, transition: { duration: 200 } },
  enter: { opacity: 1, scale: 1, y: 55, x: -50, transition: { duration: 200 } }
})

export default class ColorPicker extends Component {
  state = {
    showMenu: false,
    colors: ['Thistle', 'PaleTurquoise', 'LemonChiffon', 'NavajoWhite', 'WhiteSmoke', 'LightGreen']
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
    const { card } = this.props
    const { dispatch } = this.props.store
    const { CHANGE_COLOR } = actions
    const { state: { showMenu, colors }, toggleMenu, closeDropdown } = this // prettier-ignore

    return (
      <span
        className={'icon color-pick has-tooltip'}
        onClick={() => {
          toggleMenu()
          document.addEventListener('click', closeDropdown)
        }}>
        <i className="fas fa-chevron-down" />
        <PoseGroup>
          {showMenu ? (
            <ColorPickerMenu
              className="color-picker"
              style={{ backgroundColor: card.color }}
              key={`colormenu${card.id}`}
              animateOnMount={true}>
              <ColorMenu
                colors={colors}
                card={card}
                dispatch={dispatch}
                CHANGE_COLOR={CHANGE_COLOR}
              />
            </ColorPickerMenu>
          ) : null}
        </PoseGroup>
        <span className="tooltip">Change Colour</span>
      </span>
    )
  }
}
