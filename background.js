let tabId;

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({
    leftCount: 5,
  });
});

const injectSummarizeZip = async tab => {
  tabId = tab.id;

  await chrome.scripting.executeScript(
    {
      target: { tabId },
      files: ['summarizeZip.js'],
    }
    // showSummarizeZip
  );

  await chrome.scripting.insertCSS({
    target: { tabId },
    files: ['summarizeZip.css'],
  });
};

chrome.action.onClicked.addListener(injectSummarizeZip);
console.log('hi');

// const showSummarizeZip = () => {
//   console.log('hi');
//   sendActionToSummarizeZip();
// };

// const sendActionToSummarizeZip = () => {
//   chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
//     chrome.tabs.sendMessage(tabs[0].id, { text: 'test' });
//   });
// };
