import changeChickenGraphic from './ChangeChickenGraphic.js'

const move = (direction, distance, callback = (() => { })) => {
  changeChickenGraphic(direction, 'walk');

  let chickenWalk = setInterval(() => {
    if (distance <= 0) {
      _finishMovement(direction, callback)
      return
    }
    _moveIncrement();
    distance--;
  }, 30)
}

const _moveIncrement = (direction) => {
  let { chickenPositionY } = context;
  chickenPositionY = chickenPositionY - 5;
  changeChickenPositionY(chickenPositionY)
}

const _finishMovement = (direction, callback) => {
  clearInterval(chickenWalk)
  changeChickenGraphic(direction, 'idle');
  callback;
}

export default move;