import React from 'react';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import AllCkEditor from './AllCkEditor';

const CkDecoupledEditor = (props) => {
    return (
        <React.Fragment>
            <AllCkEditor
                editor={DecoupledEditor}
                data={props.html}
                onReady={(editor) => {
                    if (props.editor === 'document') {
                        const toolbarContainer = document.querySelector('.document-editor__toolbar');
                        toolbarContainer.appendChild(editor.ui.view.toolbar.element);
                        window.editor = editor;
                    }
                    // console.log( 'Editor is ready to use!', editor );
                }}
                onChange={(event, editor) => {
                    // const data = editor.getData();
                    // console.log( { event, editor, data } );
                }}
                onBlur={(editor) => {
                    // console.log( 'Blur.', editor );
                }}
                onFocus={(editor) => {
                    // console.log( 'Focus.', editor );
                }}
            />
        </React.Fragment>
    );
};

export default CkDecoupledEditor;
