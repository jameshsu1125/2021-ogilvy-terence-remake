import Content from '../Components/content/main';
import Headline from '../Components/Headline/main';
import { Attributes as Data } from './data';
import './sevenAttributes.less';

const SevenAttributes = () => (
	<Content id='sevenAttributes'>
		<Headline text='林宗緯的七種特質' theme='red' />
		<div className='logotype'>
			<div />
		</div>
		<div className='list'>
			<div className='name'>terence</div>
			<div className='attributes'>
				{Data.map((e) => (
					<div className='row' key={e.type.eng}>
						<div>{e.type.eng}</div>
						<div>
							<div />
						</div>
						<div>{e.type.cht}</div>
						<div>{e.description}</div>
					</div>
				))}
			</div>
		</div>
	</Content>
);
export default SevenAttributes;
