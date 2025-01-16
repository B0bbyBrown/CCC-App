export const usePopupPosition = () => {
  const calculatePosition = (position, popupElement) => {
    if (!popupElement) return position;

    const rect = popupElement.getBoundingClientRect();
    const headerHeight = 80; // Adjust based on your header height
    const footerHeight = 60; // Adjust based on your footer height
    const padding = 20;

    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;

    // Calculate safe zone
    const safeTop = headerHeight + padding;
    const safeBottom = viewportHeight - footerHeight - padding;
    const safeLeft = padding;
    const safeRight = viewportWidth - padding;

    let { x, y } = position;
    let transform = "translate(-50%, -100%)";

    // Vertical positioning
    if (rect.top < safeTop) {
      y = safeTop + rect.height;
      transform = "translate(-50%, 0)";
    } else if (rect.bottom > safeBottom) {
      y = safeBottom;
    }

    // Horizontal positioning
    if (rect.left < safeLeft) {
      x = safeLeft + rect.width / 2;
    } else if (rect.right > safeRight) {
      x = safeRight - rect.width / 2;
    }

    return { x, y, transform };
  };

  return { calculatePosition };
};
