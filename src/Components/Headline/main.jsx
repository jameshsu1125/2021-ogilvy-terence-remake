import './main.less';

const Class = ({ text, theme }) => <h1 className={theme ? `h1-${theme}` : ''}>{text}</h1>;
export default Class;
