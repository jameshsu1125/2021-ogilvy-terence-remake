/* eslint-disable max-len */
import Content from '../Components/content/main';
import Headline from '../Components/Headline/main';
import ReviewStep from '../Components/ReviewStep/main';
import './reviewProcess.less';
import { ReviewProcessData as Data } from './data';

const openGoogleForm = () => {
	window.open('https://forms.gle/rK4ZagryVcb77BjbA');
};

const ReviewProcess = () => (
	<Content id='reviewProcess'>
		<Headline text='審核流程' theme='white' />
		<h4>2021 第十三屆紅領帶 繳交審核文件：</h4>
		{Data.map((e) => (
			<ReviewStep key={e.index} index={e.index} description={e.description} list={e.list} />
		))}
		<div className='block'>
			<button type='button' onClick={openGoogleForm}>
				前往申請
			</button>
		</div>
		<section>
			<h4>報名：</h4>
			<ul>
				<li>申請期間為 2021 / 02 / 22 至 2021 / 04 / 06</li>
				<li>經獎助委員會進行上列交件初審後，由本獎助委員會安排進行筆試與口試並通知錄取</li>
				<li>錄取將由本網站公布及個別通知</li>
				<li>
					聯絡窗口:
					<a href='mailto:robertcl.kung@Ogilvy.com'>Robert Kung</a>
					{', '}
					<a href='mailto:miral.pang@Ogilvy.com'>Mira Pang</a>
				</li>
			</ul>
		</section>
		<section>
			<b>第一階段錄取：筆試</b>
			<ul>
				<li>上列文件初審通過後，由本獎助委員會安排進行筆試。註: 筆試錄取將由本網站公佈。</li>
				<li>海外生之筆試，將由本獎助委員會安排，以e-mail寄出考題，限24小時內寄回答題內容。</li>
			</ul>
		</section>
		<section>
			<b>第二階段錄取：口試</b>
			<ul>
				<li>經筆試錄取後，將由本獎委員會安排進行口試。註:口試錄取將由本網站公佈。</li>
				<li>
					錄取參加口試者，須準備個人之作品集。
					<br />
					(作品集可以是個人的創作、設計、企劃簡報、日常觀點集…等，可讓評審委員進一步了解你的能力、性向之內容。)
				</li>
				<li>海外生之口試將由本獎助委員會安排以視訊方式進行。</li>
			</ul>
		</section>
		<section>
			<b>紅領帶2021年第十三屆申請時間表：</b>
			<div className='schedule'>
				2021 / 02 / 22：開始收件
				<br />
				2021 / 04 / 06：截止收件
				<br />
				2021 / 04 / 15：公布入圍筆試名單
				<br />
				2021 / 04 / 27：舉行筆試
				<br />
				2021 / 05 / 20：公布入圍口試名單
				<br />
				2021 / 05 / 28：舉行口試(海外生)
				<br />
				2021 / 05 / 29：舉行口試(台灣生)
				<br />
				2021 / 06 / 04：公布第十三屆實習名單
				<br />
				2021 / 07 / 01：實習開始
			</div>
		</section>
	</Content>
);
export default ReviewProcess;
