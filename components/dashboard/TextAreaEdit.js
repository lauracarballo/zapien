import { useState, useRef, forwardRef } from "react";

const TextAreaEdit = forwardRef(({ defaultValue, onConfirm }, ref) => {
  const [isEditing, setEditing] = useState(false);
  const [internalValue, setInternalValue] = useState(defaultValue);
  const textareaRef = useRef();

  function handleClick(event) {
    setInternalValue(textareaRef.current.innerHTML);
    onConfirm(textareaRef.current.innerHTML);
    event.preventDefault();
    setEditing(false);
  }

  function handleCancel() {
    setInternalValue(defaultValue);
    setEditing(false);
  }

  return (
    <>
      <div className="user__edit-container">
        {isEditing ? (
          <>
            <div
              autoFocus
              contentEditable
              className="user__edit-textarea"
              ref={textareaRef}
              ref={ref}
              dangerouslySetInnerHTML={{ __html: internalValue }}
            />

            <button
              className="user__edit-button user__edit-button-save"
              onClick={handleClick}
            >
              <i className="fas fa-check"></i>
            </button>
            <button
              className="user__edit-button user__edit-button-cancel"
              onClick={handleCancel}
            >
              <i className="fas fa-times"></i>
            </button>
          </>
        ) : (
          <div
            className="user__edit-textfield"
            onClick={() => setEditing(true)}
            dangerouslySetInnerHTML={{ __html: internalValue }}
          ></div>
        )}
        <style jsx>{`
          .user__edit-container {
            position: relative;
            display: inline-block;
            width: 100%;
            height: 100%;
          }
          .user__edit-textarea {
            height: inherit;
            border-color: rgb(223, 225, 230);
            border-radius: 3px;
            border-style: solid;
            font-weight: inherit;
            font-size: 16px;
            padding: 5px 10px;
            line-height: inherit;
            box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
              rgba(9, 30, 66, 0.31) 0px 0px 1px;
          }

          .user__edit-button {
            position: absolute;
            border: none;
            box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
              rgba(9, 30, 66, 0.31) 0px 0px 1px;
          }

          .user__edit-button-save {
            bottom: -25px;
            right: 30px;
            height: 20px;
          }
          .user__edit-button-cancel {
            bottom: -25px;
            right: 0;
            height: 20px;
            width: 25px;
          }

          .user__edit-textfield {
            font-size: 16px;
          }
        `}</style>
      </div>
    </>
  );
});

export default TextAreaEdit;
