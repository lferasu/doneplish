export default defineBackground(() => {
  console.log('Hello Achiver', { id: browser.runtime.id });
  try {
    chrome.sidePanel
      .setPanelBehavior({ openPanelOnActionClick: true })
      .catch((error) => console.error(error));

    chrome.tabs.onUpdated.addListener(async (tabId, info, tab) => {
      await chrome.sidePanel.setOptions({
        tabId,
        path: 'popup.html',
        enabled: true,
      })
    })
  } catch (e) {
    console.log("error is :", e)
  }
});
