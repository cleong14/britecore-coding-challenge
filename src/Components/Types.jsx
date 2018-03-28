import React from 'react';

export default (props) => {
  return (
    <div className={props.className}>
      <label htmlFor={props.label.replace(" ", '')}>{props.label}</label>

      <h6 className="definition">Definition</h6>
      <p>{props.definition}</p>

      <h6 className="defaultDisplay">Default Display</h6>
      <p>{props.defaultDisplay}</p>
    </div>
  );
}
