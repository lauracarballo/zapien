import React, { Component } from "react";
import CreatableSelect from "react-select/creatable";
import makeAnimated from "react-select/animated";
import { useState } from "react";

const animatedComponents = makeAnimated();

const Selector = ({ defaultValue, onConfirm }) => {
  const options = [
    { label: "Apple", value: "Apple" },
    { label: "Banana", value: "Banana" },
    { label: "Cherry", value: "Cherry" },
  ];

  const [isEditing, setEditing] = useState(false);
  const [items, setItems] = useState(defaultValue);

  function handleChange(inputValue) {
    console.log(inputValue);
    setItems(inputValue);
  }

  function handleClick(event) {
    onConfirm(items);
    event.preventDefault();
    setEditing(false);
  }

  function handleCancel() {
    setItems(defaultValue);
    setEditing(false);
  }

  return (
    <>
      <div className="user__edit-container">
        {isEditing ? (
          <>
            <CreatableSelect
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              isClearable={false}
              defaultValue={items}
              onChange={handleChange}
              options={options}
              className="user__edit-input"
              styles={{
                dropdownIndicator: () => ({ display: "none" }),
                indicatorSeparator: () => ({ display: "none" }),
              }}
            />
            <button
              onClick={handleClick}
              className="user__edit-button user__edit-button-save"
            >
              <i className="fas fa-check"></i>
            </button>
            <button
              onClick={handleCancel}
              className="user__edit-button user__edit-button-cancel"
            >
              <i className="fas fa-times"></i>
            </button>
          </>
        ) : (
          <div onClick={() => setEditing(true)}>
            {items ? (
              items.map((item) => {
                return <span className="user__edit-tag">{item.label}</span>;
              })
            ) : (
              <span className="user__edit-tag">Click here to add</span>
            )}
          </div>
        )}
        <style jsx>{`
          .user__edit-container {
            position: relative;
            display: inline-block;
            width: -webkit-fill-available;
          }
          .user__edit-input {
            border-color: rgb(223, 225, 230);
            border-radius: 3px;
            border-style: solid;
            font-weight: inherit;
            font-size: inherit;
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
          .user__edit-tag {
            display: inline-block;
            border: 2px solid #8cbf8a;
            border-radius: 3px;
            padding: 5px 10px;
            margin: 5px 5px;
          }
        `}</style>
      </div>
    </>
  );
};

export default Selector;
