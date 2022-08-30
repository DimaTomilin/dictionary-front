/**
 * takeWord
 *
 * Function that get word that I clicked with using of window.getSelection. And update start and end point.
 * @returns Word that I clicked without symbols.
 */
export const takeWord = (): string => {
  const s = window.getSelection() as any;
  const range = s.getRangeAt(0);
  const node = s.anchorNode;

  // Find starting point
  while (
    range.toString().indexOf(' ') !== 0 &&
    range.toString().indexOf(',') !== 0 &&
    range.toString().indexOf('.') !== 0
  ) {
    range.setStart(node, range.startOffset - 1);
    if (node.data.indexOf(range.toString()[0]) === 0) {
      break;
    }
  }

  //Check if first letter of the string it is first letter of the paragraph
  if (node.data.indexOf(range.toString()[0]) !== 0) {
    range.setStart(node, range.startOffset + 1);
  }

  // Find ending point
  do {
    range.setEnd(node, range.endOffset + 1);
  } while (
    range.toString().indexOf(' ') === -1 &&
    range.toString().indexOf(',') === -1 &&
    range.toString().indexOf('.') === -1 &&
    range.toString().trim() !== ''
  );

  return range
    .toString()
    .replace(/[^a-zA-Z0-9]/g, '')
    .trim();
};
