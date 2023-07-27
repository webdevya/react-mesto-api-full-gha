import React from "react";

export default function useClosing(isOpen, onClose) {

  function handleClickByOverlayClose(evt) {
    if (evt.currentTarget === evt.target && evt.button === 0)
      onClose();
  }

  function handleEscClose(evt) {
    if (evt.key === "Escape")
      onClose();
  }

  React.useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscClose);
    }

    return () => { document.removeEventListener('keydown', handleEscClose); }

  }, [isOpen]);


  return handleClickByOverlayClose;

}
