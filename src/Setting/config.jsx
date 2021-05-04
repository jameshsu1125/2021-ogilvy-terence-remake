import { Position } from 'lesca-number';

export default {};
export const News = '第十三屆奧美林宗緯紅領帶實習計畫開始報名';

export const HtmlName = [
	{ name: '認識林宗緯', fileName: 'index' },
	{ name: '實習計畫介紹', fileName: 'introduction' },
	{ name: '如何申請', fileName: 'how' },
	{ name: '受獎助者', fileName: 'experience' },
];

export const MenuList = [
	{
		name: '認識林宗緯',
		list: [
			{ name: '認識林宗緯', id: 'knowTerence' },
			{ name: '我眼中的林宗緯', id: 'terenceInMyEyes' },
			{ name: '林宗緯的七種特質', id: 'sevenAttributes' },
			{ name: '林宗緯語錄', id: 'terenceQuotations' },
		],
	},
	{
		name: '實習計畫介紹',
		list: [
			{ name: '計劃宗旨', id: '' },
			{ name: '獎助計劃', id: '' },
		],
	},
	{
		name: '如何申請',
		list: [
			{ name: '獎助資格', id: '' },
			{ name: '審核流程', id: '' },
			{ name: '建議與指導', id: '' },
			{ name: '申請表格下載', id: '' },
		],
	},
	{
		name: '受獎助者',
		list: [
			{ name: '實習心得', id: '' },
			{ name: '實習相片', id: '' },
			{ name: '給學弟妹的一封信', id: '' },
		],
	},
];

export const ScrollTo = (element) => {
	const { top } = Position(element);
	const navHeight = window.innerWidth > 750 ? 65 : 130;
	const menuHeight = window.innerWidth > 750 ? 227 : 320;

	window.scrollTo(0, top - navHeight - menuHeight);
};
