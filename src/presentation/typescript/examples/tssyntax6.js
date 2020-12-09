// You can use "type guards" to ensure that a value is
// the correct type in a particular code branch
function lower(x: string | string[]) {
  if (typeof x === "string") {
    // x is guaranteed to be a string
    return x.toLowerCase();
  } else {
    // definitely a string[], so we can use reduce
    return x.reduce((val: string, next: string) => {
      return (val += `, ${next.toLowerCase()}`);
    }, "");
  }
}

function clearElement(element: string | HTMLElement) {
  if (element instanceof HTMLElement) {
    // element is guaranteed to be an HTMLElement in here
    // so we can access its innerHTML property
    element.innerHTML = "";
  } else {
    // element is a string in here
    const el = document.querySelector(element);
    if (el !== null) {
      el.innerHTML = "";
    }
  }
}
