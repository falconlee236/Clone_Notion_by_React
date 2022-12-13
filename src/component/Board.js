import React, { useState } from 'react';
import ReactQuill, {Quill} from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from "styled-components";

import ImageResize from 'quill-image-resize';
Quill.register('modules/ImageResize', ImageResize);

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80vw;
    height: 90vh;

    .editor{
        width: 80vw;
        height: 85vh;
        position: relative;
        top: 6vh;
    }
`

function Board(){
    const modules = {
        toolbar: [
          //[{ 'font': [] }],
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image'],
          [{ 'align': [] }, { 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
          ['clean']
        ],
        
        /* 추가된 코드 */
        ImageResize: {
            parchment: Quill.import('parchment')
        }
      }
    
      const formats = [
        //'font',
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image',
        'align', 'color', 'background',        
      ]

    const [value, setValue] = useState('');
    return (
        <Container>
            <ReactQuill 
                theme="snow" 
                value={value || ''}
                modules={modules}
                formats={formats} 
                onChange={(content, delta, source, editor) => setValue(editor.getHTML())} 
                className="editor"
            />  
        </Container>
    )
};

export default Board;
//https://velog.io/@holim0/React-Quill-%EC%82%AC%EC%9A%A9%ED%95%B4%EB%B3%B4%EA%B8%B0
//https://jforj.tistory.com/211