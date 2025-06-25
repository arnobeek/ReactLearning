import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from '@tiptap/extension-underline';
import { Span } from "@tiptap/pm/changeset";



function Write() {
  const editor = useEditor({
    extensions: [StarterKit,
        Underline
    ],
    content: "<p>Start writing your blog here...</p>",
  });

  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="Title" />
        <div className="editor-container" >
          <div
            style={{
              marginBottom: "10px",
              border: "1px solid #ccc",
              padding: "5px",
              borderRadius: "4px",
            }}
          >
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              disabled={!editor.can().chain().focus().toggleBold().run()}
            >
              <b>B</b>
            </button>
            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              disabled={!editor.can().chain().focus().toggleItalic().run()}
            >
              <i>I</i>
            </button>
            <button
              onClick={() => editor.chain().focus().toggleUnderline().run()}
              disabled={!editor.can().chain().focus().toggleUnderline().run()}
            >
              <u>U</u>
            </button>
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 1 }).run()
              }
            >
              H1
            </button>
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 2 }).run()
              }
            >
              H2
            </button>
            <button
              onClick={() => editor.chain().focus().toggleBulletList().run()}
            >
              • List
            </button>
            <button
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
            >
              1. List
            </button>
            <button
              onClick={() => editor.chain().focus().toggleBlockquote().run()}
            >
              “ Quote
            </button>
            <button
              onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            >
              {"</>"} Code
            </button>
            <button onClick={() => editor.chain().focus().undo().run()}>
              Undo
            </button>
            <button onClick={() => editor.chain().focus().redo().run()}>
              Redo
            </button>
          </div>

          <div>
            <EditorContent editor={editor} className="editor" />
          </div>
        </div>
        
      </div>
      <div className="menu">
        <div className="item">
            <h1>Publish</h1>
            <span>
                <b>Status: </b> Draft
            </span>
            <span>
                <b>Visibility: </b> Public
            </span>
            <input style={{display:"none"}} type="file" id="file" />
            <label className="file" htmlFor="file">Upload Image</label>
            <div className="buttons">
                <button>Save as a draft</button>
                <button>Update</button>
            </div>
        </div>
        <div className="item">
            <h1>Category</h1>
            <div className="cat">
                <input type="radio" name="cat" value="art" id="art"/>
                <label htmlFor="art">Art</label>

            </div>
            <div className="cat">
                <input type="radio" name="cat" value="science" id="science"/>
                <label htmlFor="science">Science</label>

            </div>
            <div className="cat">
                <input type="radio" name="cat" value="tech" id="tech"/>
                <label htmlFor="tech">Tech</label>

            </div>
            <div className="cat">
                <input type="radio" name="cat" value="cinema" id="cinema"/>
                <label htmlFor="cinema">Cinema</label>

            </div>
            <div className="cat">
                <input type="radio" name="cat" value="design" id="design"/>
                <label htmlFor="design">Design</label>

            </div>
            <div className="cat">
                <input type="radio" name="cat" value="food" id="food"/>
                <label htmlFor="food">Food</label>
            </div>
        </div>
      </div>
    </div>
  );
}
export default Write;
