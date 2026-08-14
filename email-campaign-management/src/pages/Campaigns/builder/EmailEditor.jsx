import React from 'react'
import { useRef } from "react";

export default function EmailEditor({ value, onChange }) {
    const editorRef = useRef(null);

  const executeCommand = (command, commandValue = null) => {
    document.execCommand(command, false, commandValue);

    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const handleInput = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const addLink = () => {
    const url = window.prompt(
      "Enter the URL:"
    );

    if (!url) {
      return;
    }

    executeCommand("createLink", url);
  };

  const addImage = () => {
    const imageUrl = window.prompt(
      "Enter image URL:"
    );

    if (!imageUrl) {
      return;
    }

    executeCommand(
      "insertImage",
      imageUrl
    );
  };
  return (
    <div className="email-editor">

      <div className="editor-toolbar">

        <button
          type="button"
          onClick={() =>
            executeCommand("bold")
          }
        >
          <strong>B</strong>
        </button>

        <button
          type="button"
          onClick={() =>
            executeCommand("italic")
          }
        >
          <em>I</em>
        </button>

        <button
          type="button"
          onClick={() =>
            executeCommand("underline")
          }
        >
          <u>U</u>
        </button>

        <span className="toolbar-divider" />

        <button
          type="button"
          onClick={addLink}
        >
          🔗
        </button>

        <button
          type="button"
          onClick={addImage}
        >
          🖼
        </button>

        <span className="toolbar-divider" />

        <button
          type="button"
          onClick={() =>
            executeCommand(
              "formatBlock",
              "h1"
            )
          }
        >
          H1
        </button>

        <button
          type="button"
          onClick={() =>
            executeCommand(
              "formatBlock",
              "h2"
            )
          }
        >
          H2
        </button>

        <button
          type="button"
          onClick={() =>
            executeCommand(
              "formatBlock",
              "p"
            )
          }
        >
          P
        </button>

        <span className="toolbar-divider" />

        <button
          type="button"
          onClick={() =>
            executeCommand(
              "justifyLeft"
            )
          }
        >
          ≡
        </button>

        <button
          type="button"
          onClick={() =>
            executeCommand(
              "justifyCenter"
            )
          }
        >
          ☰
        </button>

        <button
          type="button"
          onClick={() =>
            executeCommand(
              "justifyRight"
            )
          }
        >
          ≡
        </button>

      </div>

      <div
        ref={editorRef}
        className="email-editor-body"
        contentEditable={true}
        suppressContentEditableWarning={true}
        onInput={handleInput}
        dangerouslySetInnerHTML={{
          __html: value || "",
        }}
      />

    </div>
  )
}
