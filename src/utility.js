const createElement = (element, content, idName, className, src) => {
    const newElement = document.createElement(element);
    if (content) newElement.textContent = content;
    if (idName) newElement.id = idName;
    if (className) newElement.className = className;
    if (src) newElement.src = src;
    return newElement;
}

export default createElement;