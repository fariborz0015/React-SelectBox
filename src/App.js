
 
import { useEffect, useState } from 'react';
import axios from 'axios'
import SelectBox from './SelectBox'
function App(props) {

  const [countries, countriesSet] = useState([]);
  useEffect(() => {

    axios.get('https://restcountries.eu/rest/v2/all?fields=translations').then(res => {
      let options = [];
      res.data.map((item, index) => {
        options = [...options, {
          label: item.translations.fa,
          value: index,
          disabled: index % 2 == 0 ? true : false
        }]
      });
      countriesSet(options);
    })
  }, []);


  return (
    <SelectBox
      searchable={true}
      options={countries}
      /*searching={e=>console.log(e)}*/ 
      placeholderOption="گزینه خود را انتخاب کنید"
      resetable={true}
    />
  );
}

export default App;
