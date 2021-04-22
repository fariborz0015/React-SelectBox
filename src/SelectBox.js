
import './SelectBox.css';
import { useState } from 'react';

function SelectBox(props) {

  const [open, openSet] = useState(false);
  const [searching, searchingSet] = useState("");
  const [selectedOption, selectedOptionSet] = useState({
    item_key: null,
    item_value: null,
    item_label: null
  });

  let selectOption = (e) => {
    selectedOptionSet({
      item_key: e.target.getAttribute('key'),
      item_value: e.target.getAttribute('data-value'),
      item_label: e.target.getAttribute('data-label'),
    });
    openSet(false);
    searchingSet(e.target.getAttribute('data-label'));
  }


  return (
    <>
      <div className="w-100" >
        <div className="container">
          <div className="select-box"   >
            <div className="select-placeholder" onClick={e => openSet(!open)} >
              <span>  {selectedOption.item_label === null ? " یک گزینه انتخاب کنید " : selectedOption.item_label}  </span>
              <span className={`arrow-down ${!open ? 'active' : ''}`}><img src="./arrow-down.svg" alt="" /></span>
              <span className={`arrow-up ${!open ? '' : 'active'}`}><img src="./arrow-down.svg" alt="" /></span>
            </div>
            <input
              type="text"
              onClick={e => openSet(true)}
              className={`select-search ${props.searchable == true && open == true ? 'active' : ''}`}
              onChange={e => props.searching(e.target.value)}
              onChange={e => searchingSet(e.target.value)}
              placeholder="جستجو کنید"
              value={searching}
            />
            <div className={`options-box ${open ? 'active' : ''}`}>
              <div className="option disabled"  >
                {props.placeholderOption ? props.placeholderOption : ' یک گزینه انتخاب کنید'}
              </div>
              {
                props.options.map(item => {
                  return (
                    props.searchable ?
                      item.label.match(searching) ?
                        <div
                          className={`option ${item.disabled ? 'disabled' : ''}`}
                          key={`option_${item.value}`}
                          onClick={e => !item.disabled ? selectOption(e) : null}
                          data-label={item.label}
                          data-value={item.value}>
                          {item.label}
                        </div>
                        :
                        null
                      :
                      <div
                        className={`option ${item.disabled ? 'disabled' : ''}`}
                        key={`option_${item.value}`}
                        onClick={e => !item.disabled ? selectOption(e) : null}
                        data-label={item.label}
                        data-value={item.value}>
                        {item.label}
                      </div>
                  )
                })
              }
            </div>
          </div>
          {
            props.resetable ?
              selectedOption.item_label && selectedOption.item_value !== null ?
                <button
                  className="select-box-reset"
                  onClick={e => selectedOptionSet({
                    item_label: null,
                    item_value: null,
                    item_key: null
                  })}
                >&times;</button>
                : null
              :
              null
          }
        </div>
      </div>
      <select className="hiddenSelectbox" name={props.name} ref={props.ref} id={props.id}>
        {
          selectedOption.item_label && selectedOption.item_value !== null ?
            <option value={selectedOption.item_value}>{selectedOption.item_label}</option>
            : null
        }
      </select>
    </>
  );
}

export default SelectBox;
