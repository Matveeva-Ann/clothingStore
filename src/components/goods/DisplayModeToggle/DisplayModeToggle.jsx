import AppContext from 'context/context';
import { useContext } from 'react';
import './styleToggle.css';

export default function DisplayModeToggle() {
  const { value, setValue } = useContext(AppContext);
  function toggle() {
    setValue(!value);
    localStorage.setItem('view', value)
  }

  return (
    <div className="wrapper">
      <h5 className='title'>Змінити відображення товарів</h5>
      <div className="toggle-button-cover">
        <div className="button r" id="button-1">
          <input type="checkbox" className="checkbox" onClick={toggle}/>
          <div className="knobs"></div>
          <div className="layer"></div>
        </div>
      </div>
    </div>
  );
}
