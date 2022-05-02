// const state = 'paragraphSummarize';
// const lang = 'ko';

const $html = document.documentElement;

$html.setAttribute('data-summarizeZip-active', 'true');

const $div = document.createElement('div');
$div.setAttribute('id', 'summarizeZipWrapper');

document.body.insertAdjacentElement('beforebegin', $div);
