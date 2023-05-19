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
    <form className="d-flex">
      <Input
        type="search"
        placeholder="Search"
        className="form-control me-sm-2"
        // onChange={handleChange}
        // value={searchInput}
      />
      <div>
        {/* {possibleSearchVals.map((searchval) => {
          return <div>{searchval}</div>;
        })} */}
      </div>
      <Button
        type='submit'
        className="btn btn-secondary my-2 my-sm-0">
        Search
      </Button>
    </form>
  );
}

export default SearchBar;