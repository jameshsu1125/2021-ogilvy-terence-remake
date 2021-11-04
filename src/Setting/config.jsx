/* eslint-disable no-irregular-whitespace */
import { Position } from 'lesca-number';
import Hash from 'lesca-url-parameters';

export default {};
export const News = '【第十三屆奧美林宗緯紅領帶實習計畫】開始報名';
export const NewsContent = '<p></p>';

export const AlertDisableTimestamp = 1000 * 60 * 60; // 1小時
// export const AlertDisableTimestamp = 1000;

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
			{ name: '計劃宗旨', id: 'projectPurpose' },
			{ name: '獎助計劃', id: 'grantProgram' },
		],
	},
	{
		name: '如何申請',
		list: [
			{ name: '獎助資格', id: 'quotaGrantees' },
			{ name: '審核流程', id: 'reviewProcess' },
			{ name: '建議與指導', id: 'suggestionDirecting' },
		],
	},
	{
		name: '受獎助者',
		list: [
			{ name: '實習心得', id: 'internshipExperience' },
			// { name: '實習相片', id: 'internshipPhotos' },
		],
	},
];

export const ScrollTo = (element, offset = 0) => {
	const { top } = Position(element);
	const navHeight = window.innerWidth > 750 ? 65 : 130;
	const menuHeight = window.innerWidth > 750 ? 227 : 320;

	window.scrollTo(0, top - navHeight - menuHeight + offset);
};

export const HashChange = () => {
	const onHashChange = () => {
		const fileName = Hash.file().replace(/\.[^/.]+$/, '');
		const pageName = HtmlName.filter((e) => {
			if (e.fileName === fileName) return true;
			return false;
		});
		if (pageName.length === 0) return;
		const { name } = pageName[0];
		const listData = MenuList.filter((e) => {
			if (e.name === name) return true;
			return false;
		});
		if (listData.length === 0) return;
		const { hash } = window.location;
		const hashName = decodeURIComponent(hash).split('#').join('');
		const { list } = listData[0];
		const hashData = list.filter((e) => {
			if (e.name === hashName) return true;
			return false;
		});
		if (hashData.length === 0) return;

		const { id } = hashData[0];
		if (id) ScrollTo(document.getElementById(id));
	};
	onHashChange();
	window.addEventListener('hashchange', () => onHashChange());
};
