import AppContext from 'context/context';
import { useContext } from 'react';
import './style.css';

export default function DisplayModeToggle() {
  const { value, setValue } = useContext(AppContext);
  function toggle() {
    setValue(!value);
    localStorage.setItem('view', value)
  }

  return (
    <div className="wrapper">
      <h5 className='title'>"Таблиця" / "Список"</h5>
      <div className="toggle-button-cover">
        <div className="button r" id="button-1">
          <input type="checkbox" className="checkbox" onClick={toggle} defaultChecked={!value} />
          <div className="knobs"></div>
          <div className="layer"></div>
        </div>
      </div>
    </div>
  );
}
