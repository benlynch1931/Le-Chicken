const changeChickenGraphic = (direction, state) => {
  if (direction == 'up' && state == 'walk') {
    setChickenGraphic(chickenGraphic => chickenGraphic = 'walkUp')
  } else if (direction == 'up' && state == 'idle') {
    setChickenGraphic(chickenGraphic => chickenGraphic = 'walk')
  }
}

export default changeChickenGraphic;