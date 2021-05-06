import { useState, forwardRef, useImperativeHandle } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import DraftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './main.less';

const RichEditor = forwardRef((props, ref) => {
	const [editorState, seteditorState] = useState(EditorState.createEmpty());
	const onEditorStateChange = (e) => {
		seteditorState({ editorState: e });
	};

	useImperativeHandle(ref, () => ({
		getHTML() {
			const { editorState: state } = editorState;
			if (state) return DraftToHtml(convertToRaw(state.getCurrentContent()));
			return '';
		},
	}));

	return (
		<div className='Editor'>
			<Editor
				initialEditorState={editorState}
				wrapperClassName='demo-wrapper'
				editorClassName='demo-editor'
				onEditorStateChange={onEditorStateChange}
			/>
		</div>
	);
});

export default RichEditor;
