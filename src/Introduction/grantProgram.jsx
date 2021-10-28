import Content from '../Components/content/main';
import Headline from '../Components/Headline/main';
import PhaseHeadline from '../Components/PhaseHeadline/main';
import './grantProgram.less';

const KnowTerence = () => (
	<Content id='grantProgram'>
		<Headline text='獎助計劃' theme='white' />
		<PhaseHeadline index='1' text='奧美貼身作業' />
		透過於台灣奧美的貼身實習經驗，我們希望年輕學子對行銷傳播產業有更透徹的認識與了解，並給予正確的行業觀念。
		<ul>
			<li>
				經本獎助計劃審核通過者，將由獎助委員安排至台灣奧美實習。實習期為暑假兩個月。確切日期依每年時間表作適當調整。
			</li>
			<li>實習部門及實習工作內容將由本獎助計劃委員長指定。</li>
			<li>獎助者於實習期間，將可與正式員工接受相同訓練課程。</li>
			<li>
				獎助者於實習期間，將由獎助計劃委員長指派台灣奧美員工作為學長，給予實習期間的監督與協助。
			</li>
			<li>實習結束，經本計畫委員內部審核評估後，審核通過者於結業時發給兩萬元整獎助金。</li>
		</ul>
		<PhaseHeadline index='2' text='分享與回饋' />
		<ul>
			<li>
				受獎助者經階段一結束後，必須對本獎助委員會進行成果分享。分享形式及內容將由獎助委員會與獎助者進一步討論。
			</li>
			<li>成果分享後，本獎助委員將進行授証儀式；結業者將可獲頒象徵林宗緯精神的紅領帶一條。</li>
		</ul>
		<div className='note'>註：本委員會保留視募款狀況修正獎助計劃內容之權利</div>
	</Content>
);
export default KnowTerence;
