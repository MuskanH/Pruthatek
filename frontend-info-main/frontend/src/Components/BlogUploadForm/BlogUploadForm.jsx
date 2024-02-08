import React, { useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const BlogUploadForm = () => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  const handleSave = () => {
    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    console.log('Data Saved:', rawContentState);
    // Add your logic to save data to your backend or wherever needed.
  };

  return (
    <div>
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
      />
      <div className='flex justify-center items-center pb-10 pt-20 md:pt-0'>
      <button onClick={handleSave} className='bg-gradient-to-r from-[#F05225] to-[#EEA820] md:w-[200px] md:h-[40px] w-[140px] h-[30px] rounded-xl text-[20px]  text-white font-medium'>Save</button>
      </div>
    </div>
  );
};

export default BlogUploadForm;
