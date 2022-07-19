//Function that taking word that I clicked on it.
const takeWord = () => {
  const s = window.getSelection();
  const range = s.getRangeAt(0);
  const node = s.anchorNode;

  // Find starting point
  while (
    range.toString().indexOf(' ') != 0 &&
    range.toString().indexOf(',') != 0 &&
    range.toString().indexOf('.') != 0
  ) {
    range.setStart(node, range.startOffset - 1);
    if (node.data.indexOf(range.toString()[0]) === 0) {
      break;
    }
  }

  //Check if first letter of the string it is first letter of the paragraf
  if (node.data.indexOf(range.toString()[0]) !== 0) {
    range.setStart(node, range.startOffset + 1);
  }

  // Find ending point
  do {
    range.setEnd(node, range.endOffset + 1);
  } while (
    range.toString().indexOf(' ') == -1 &&
    range.toString().indexOf(',') == -1 &&
    range.toString().indexOf('.') == -1 &&
    range.toString().trim() != ''
  );

  return range
    .toString()
    .replace(/[^a-zA-Z0-9]/g, '')
    .trim();
};
module.exports = { takeWord };
