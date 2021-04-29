import React from 'react';
import Content from '../Components/content/main';
import Headline from '../Components/Headline/main';
import './terenceQuotations.less';
import { Quotations as Data } from './data';

const terenceQuotations = () => (
	<Content id='terenceQuotations'>
		<Headline text='林宗緯語錄' theme='white' />
		{Data.map((e) => (
			<div key={e.title} className='quo'>
				<div className='quo-content'>
					<div className='title'>{e.title}</div>
					<div className='description'>
						{e.description.map((line) => (
							<div key={line}>{`・${line}`}</div>
						))}
					</div>
				</div>
			</div>
		))}
	</Content>
);
export default terenceQuotations;
