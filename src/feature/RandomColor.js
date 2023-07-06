const colors = [
  '#EECCCC',
  '#EED4CC',
  '#EEE5CC',
  '#EEEECC',
  '#E5EECC',
  '#D4EECC',
  '#CCEED4',
  '#CCEEDD',
  '#CCEEEE',
  '#CCDDEE',
  '#CCCCEE',
  '#DDCCEE',
  '#EECCEE',
  '#EECCD4',
];

const RandomColor = () => {
  const randomColor = colors[Math.floor(Math.random() * 14)];
  return randomColor;
};

export default RandomColor;
