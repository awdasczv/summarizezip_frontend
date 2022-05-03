// const state = 'paragraphSummarize';
// const lang = 'ko';
(() => {
  const $summarizeZipWrapper = document.getElementById('summarizeZipWrapper');

  const isWrapperExisted = selector => selector !== null;

  const getWidget = () => {
    const $html = document.documentElement;
    $html.setAttribute('data-summarizeZip-active', 'true');

    const $div = document.createElement('div');
    $div.setAttribute('id', 'summarizeZipWrapper');

    document.body.insertAdjacentElement('beforebegin', $div);
  };

  if (isWrapperExisted($summarizeZipWrapper)) {
    const widget = document.getElementById('summarizeZipWrapper');
    const widgetParent = widget.parentNode;

    widgetParent.removeChild(widget);
    widgetParent.removeAttribute('data-summarizezip-active');
  } else {
    getWidget();
  }

  // click시 이벤트
  document.body.addEventListener('click', e => {
    const text = e.target.textContent;
    const arr = text.split('\n');
  });
})();
