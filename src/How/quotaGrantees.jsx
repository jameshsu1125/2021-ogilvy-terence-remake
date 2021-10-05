import Content from '../Components/content/main';
import Headline from '../Components/Headline/main';
import './quotaGrantees.less';

// ! => 如何申請 / 獎助資格
const QuotaGrantees = () => (
	<Content id='quotaGrantees'>
		<Headline text='獎助對象名額與資格' theme='red' />
		<ul>
			<li>本獎助計畫鼓勵對廣告有熱情、有想法及企圖心的年輕學子</li>
			<li>凡海內外大專院校在校學生，不分科系，對廣告行業有興趣皆可申請。</li>
			<li>
				本獎助計劃考慮到實習時間及未來職業發展培育，開放申請對象為大三至研究所一年級在校學生，實習期間具備學生身分者
			</li>
			<div className='note'>註：非本國籍學生須自行申請在台工作許可證等在台實習所需之相關文件。</div>
			<li>本獎助計劃每年將錄取2-5名不等，視本獎助計劃募款狀況而有所調整。</li>
		</ul>
	</Content>
);
export default QuotaGrantees;
