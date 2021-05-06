import './main.less';

const QuestionAndAnwser = ({ index, question, answer }) => (
	<div className='QuestionAndAnwser'>
		<div>
			<span>{`Q${index}`}</span>
			{question}
		</div>
		<div>{answer}</div>
	</div>
);
export default QuestionAndAnwser;
