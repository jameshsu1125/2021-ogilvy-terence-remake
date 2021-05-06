import Content from '../Components/content/main';
import Headline from '../Components/Headline/main';
import QuestionAndAnwser from '../Components/QuestionAndAnwser/main';
import { suggestionDirectingData as Data } from './data';
import './suggestionDirecting.less';

const suggestionDirecting = () => (
	<Content id='suggestionDirecting'>
		<Headline text='獎助對象名額與資格' theme='red' />
		{Data.map((e, i) => (
			<QuestionAndAnwser key={e.question} index={i + 1} question={e.question} answer={e.anser} />
		))}
	</Content>
);
export default suggestionDirecting;
