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

const colors2 = [
  '#FF9100',
  '#D2691E',
  '#FF5675',
  // '#EEEECC',
  '#FF46C5',
  '#228B22',
  '#0078FF',
  '#660000',
  '#FFC000',
  '#4D0088',
  '#0F3067',
  '#182605',
  '#4B4B4B',
  '#9D71BD',
];

const RandomColor = () => {
  const randomColor = colors[Math.floor(Math.random() * 14)];
  return randomColor;
};

export default RandomColor;
