export const onDomReady = (toRun) => {
  const ready = document.readyState === "complete" || document.readyState === "interactive";
  if (!ready) {
    window.addEventListener("DOMContentLoaded", () => toRun());
  } else {
    toRun();
  }
};
