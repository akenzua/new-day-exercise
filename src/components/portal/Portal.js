import { useState, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';

function createPortalWrapper(portalId) {
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute('id', portalId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
}

function NewDayPortal({ children, portalId = 'modal-root' }) {
  const [wrapperElement, setWrapperElement] = useState(null);

  useLayoutEffect(() => {
    let element = document.getElementById(portalId);
    let portalCreated = false;
    // if element is not found with portalId or portalId is not provided,
    // create and append to body
    if (!element) {
      portalCreated = true;
      element = createPortalWrapper(portalId);
    }
    setWrapperElement(element);

    return () => {
      // delete the programatically created element
      if (portalCreated && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [portalId]);

  // wrapperElement state will be null on very first render.
  if (wrapperElement === null) return null;

  return createPortal(children, wrapperElement);
}

export default NewDayPortal;
