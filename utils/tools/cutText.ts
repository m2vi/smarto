const textElements = document.querySelectorAll(".cut-text");

textElements.forEach((element: Element) => {
  createNewText(element, getLineHeight(element, "26px"), "[...]");
});

function getLineHeight(element: Element, basicFontSize: string) {
  const lineHeight = window.getComputedStyle(element)["line-height"];
  return parseFloat(lineHeight !== "normal" ? lineHeight : basicFontSize);
}

function getTextWidth(text: string, style: string, size: string, font: string) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  ctx.font = `${style} ${size} ${font}`;
  let metrics = ctx.measureText(text);
  return Math.round(metrics.width);
}

function createNewText(element: Element, lineHeight: number, fill: string) {
  const originalText = element.innerHTML;
  const originalTextParts = originalText.split(" ");
  const fontSize = window.getComputedStyle(element)["font-size"];
  const font = window.getComputedStyle(element)["font-family"];
  const fontStyle = window.getComputedStyle(element)["font-style"];
  const maxLines = element.clientHeight / lineHeight;
  const maxLineLength = element.clientWidth;

  let lines = [];
  let i = 0;

  originalTextParts.forEach((word) => {
    if (!lines[i]) {
      lines[i] = [];
    }

    if (getTextWidth(`${lines[i].join(" ")} ${word} ${fill}`, fontStyle, fontSize, font) < maxLineLength) {
      lines[i].push(word);
    } else {
      i++;
      lines[i] = [];
      lines[i].push(word);
    }
  });

  let finalLines = "";

  lines.slice(0, maxLines).forEach((line) => {
    finalLines = `${finalLines} ${line.join(" ")}`;
  });

  element.innerHTML = `${finalLines} ${fill}`;
}

export default void 0;

// TODO: optimize for React
