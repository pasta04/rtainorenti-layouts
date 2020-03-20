/**
 * 横幅に合わせていい感じにフォントサイズを調整する
 * @param text テキスト
 * @param maxWidth 横幅最大値
 * @param minFontSize フォントサイズ最小値
 * @param initSize フォントサイズ初期値
 * @param unit フォントサイズ単位。pxとか。
 * @param fontFamily フォントの種類
 */
export const calcWidthFitFontSize = (
	text: string,
	maxWidth: number,
	minFontSize: number,
	initSize: number,
	unit: string,
	fontFamily: string,
) => {
	// 幅計算用のエレメント作る
	const elem = document.createElement('span');
	elem.style.visibility = 'hidden';
	elem.style.fontFamily = fontFamily;
	elem.style.fontSize = `${initSize}${unit}`;
	elem.innerText = text;
	// FIXME: DOMにマウントしたくない
	document.querySelector('body')?.append(elem);

	let fontSize = initSize;
	let tempWidth = elem.offsetWidth;

	while (tempWidth >= maxWidth && fontSize > minFontSize) {
		--fontSize;
		elem.style.fontSize = `${fontSize}${unit}`;
		tempWidth = elem.offsetWidth;
	}
	elem.remove();
	return fontSize;
};
