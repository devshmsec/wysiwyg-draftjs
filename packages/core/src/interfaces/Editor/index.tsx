import React, { Component } from 'react';
import { Editor, EditorState } from 'draft-js';

class RichEditor extends Component<{}, { editorState: EditorState }> {
    constructor(props: any) {
        super(props);
        this.state = { editorState: EditorState.createEmpty() };
    }

    onChange = (editorState: EditorState) => this.setState({ editorState });

    render() {
        const { editorState } = this.state;
        return <Editor editorState={editorState} onChange={this.onChange} />;
    }
}

export default RichEditor;
