import { useEffect, useState } from 'react';
import { useShallowCompareEffect } from 'react-use';
import Content from '../Components/content/main';
import Headline from '../Components/Headline/main';
import { ReviewProcessData as Data } from './data';
import './reviewProcess.less';

// ! => 如何申請 / 審核流程
const ReviewProcess = () => {
	const [contents, setContents] = useState({});
	const [date, setDate] = useState(Data);

	useEffect(() => {
		fetch(`./data/schedule.json?s=${Math.random()}`)
			.then((e) => e.json())
			.then((result) => {
				setContents(result);
			});
		return () => {};
	}, []);

	useShallowCompareEffect(() => {
		if (Object.keys(contents).length > 0) {
			const preset = [...date];
			const list = preset[0].list[1];
			preset[0].list[1] = list.split('{date}').join(contents.date);
			setDate(preset);
		}
	}, [contents]);

	return (
		<Content id='reviewProcess'>
			<Headline text='申請流程' theme='white' />
			<div className='row'>
				<h4>報名：</h4>
				<ul>
					<li>申請期間為2023/2/15至2023/3/26</li>
					<li>報名完成後，由本獎助委員會安排進行筆試與口試並通知錄取</li>
					<li>錄取將由本網站公布及個別通知</li>
					<li>
						聯絡窗口：
						<a href='mailto:robertcl.kung@ogilvy.com'>Robert Kung</a>
						{', '}
						<a href='mailto:amity.chen@Ogilvy.com'>Amy Chen</a>
					</li>
				</ul>
			</div>

			<div className='row'>
				<h4>筆試：</h4>
				<ul>
					<li>筆試時間 2023/3/29 18:00-21:00</li>
					<li>本獎助委員會將於筆試時間開始時，以email寄出考題給符合培訓資格之學生。</li>
				</ul>
			</div>

			<div className='row'>
				<h4>口試：</h4>
				<ul>
					<li>口試公佈時間 2023/4/13</li>
					<li>口試時間 2023/4/22</li>
					<li>本獎助委員會將於本網站公佈口試錄取名單。</li>
					<li>錄取口試者，需準備個人作品集。</li>
					<li>
						作品集可以是個人的創作、設計、企劃簡報、日常觀點集…，可讓評審委員進一步了解你的能力、性向之內容。
					</li>
					<li>海外生之口試將由本獎助委員會安排以視訊方式進行。</li>
				</ul>
			</div>

			<div className='row'>
				<h4>2023第十五屆申請時間表：</h4>
				<ul>
					<li>2023/2/15：開始收件</li>
					<li>2023/3/04：紅領帶說明會</li>
					<li>2023/3/26：截止收件</li>
					<li>2023/3/29：18:00-21:00 舉行筆試</li>
					<li>2023/4/13：公布入圍口試名單</li>
					<li>2023/4/22：舉行口試</li>
					<li>2023/4/26：公布培訓生名單</li>
					<li>2023/7/03：培訓開始</li>
				</ul>
			</div>

			<div className='block'>
				<button
					type='button'
					onClick={() => {
						window.open('https://forms.gle/8qQJXZ7VXJgFLcSt7');
					}}
				>
					前往申請
				</button>
			</div>
		</Content>
	);
};
export default ReviewProcess;
