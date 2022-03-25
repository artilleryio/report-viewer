import React, { useState, useRef, useEffect } from 'react';

const Toggle = ({disabled, icons, defaultChecked, onChange }) => {
  const [checked, setChecked] = useState(defaultChecked);
  const cbSelect = useRef(null);
  
  useEffect(()=> {
    setChecked(defaultChecked);
  }, [defaultChecked]);

  const handleClick = () => {
    if (!disabled) {
      setChecked(!checked);
      onChange(!checked);
    }
  }

  const calculateClasses = () => {
    return `react-toggle ${disabled ? 'react-toggle--disabled' : null } ${checked ? 'react-toggle--checked' : null}`;
  };

  return (
    <div className={calculateClasses()} onClick={handleClick} >
      <div className="react-toggle-track">
        <div className="react-toggle-track-check">
          {icons.checked}
        </div>
        <div className="react-toggle-track-x">
          {icons.unchecked}
        </div>
      </div>
      <div className="react-toggle-thumb" />
      <input
        ref={cbSelect}
        defaultValue={checked}
        className="react-toggle-screenreader-only"
        type="checkbox" 
      />
    </div>
  )
};

export default Toggle;