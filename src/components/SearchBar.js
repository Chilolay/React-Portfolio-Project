// import { useState } from 'react'
import { Input, Button } from 'reactstrap'

const SearchBar = () => {
    // const [searchInput, setSearchInput] = useState('')
    // const possibleSearchVals = [
    //     'Home', 'Articles', 'Care guides'
    // ]

    // const handleChange = (e) => {
    //     e.preventDefault();
    //     setSearchInput(e.target.value);
    // }

    // if (searchInput.length > 0) {
    //     possibleSearchVals.filter((searchval) => {
    //       return searchval.valueOf(searchInput);
    //     });
    // }

  return (
    <div>
      <Input
        type="search"
        placeholder="Search"
        // onChange={handleChange}
        // value={searchInput}

      />
      <div>
        {/* {possibleSearchVals.map((searchval) => {
          return <div>{searchval}</div>;
        })} */}
      </div>
      <Button>Search</Button>
    </div>
  );
}

export default SearchBar;