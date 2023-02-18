import { find } from "../dom/find";
import { generateUUID } from "./generateUUID";

const getComponentObject = (node) => {
  return window.document.componentsFunctions[node.dataset.jsComponent];
};

 const setCmpUUID = (elements) => {
  find(`[data-js-component]`).forEach((element) => {
    element.setAttribute('data-cmp-id', generateUUID())
  })
 }

const loadComponent = (cmp) => {
  const cmpFn = getComponentObject(cmp);
  const isLoaded = window.document.loadedComponentFunctions[cmp.dataset.cmpId];
  if (typeof cmpFn === "function" && !isLoaded) {
    cmpFn(cmp)
    window.document.loadedComponentFunctions[cmp.dataset.cmpId] = true;
  };
}

const scanComponents = (context = document) => {
  find(`[data-js-component]`, context).forEach((jsElement) => {
    const children = find(`[data-js-component]`, jsElement);
    const hasChildren = children.length > 0;
    if(hasChildren) {
      scanComponents(jsElement);
    } else if(!hasChildren) {
      loadComponent(jsElement);
    }
    loadComponent(jsElement)
  });
};

const register = (cmpFunctions) => {
  window.document.componentsFunctions = {
    ...window.document.componentsFunctions,
    ...cmpFunctions
  };
};

export const componentLoader = (components) => {
  let startTimer = new Date().getTime();

  window.document.loadedComponentFunctions = {}
  register(components);
  setCmpUUID(components);
  scanComponents();

  let elapsedTime =new Date().getTime() - startTimer;
  console.log("--> JavaScript components loaded in :", (elapsedTime / 60).toFixed(2), "sec <--")
};
