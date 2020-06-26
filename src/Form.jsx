import React from 'react';

const Form = (props) => {
    return (
        <form onSubmit={props.getWeather}>
            <input type="text" placeholder="city" name="city"/>
            <input type="text" placeholder="country" name="country"/>
            <button>Submit</button>
        </form>
<<<<<<< HEAD

        //見本
        <>
        <SearchBar showResult={showResultmada} onSubmit={props.getWeather}>
          <SearchInput type="text" value={value} placeholder="Enter city" onChange={change} />
          <SearchIcon>
            <FontAwesomeIcon icon={faSearch} />
          </SearchIcon>
        </SearchBar>
      </>
=======
>>>>>>> origin/master
    )
}

export default Form;
<<<<<<< HEAD


=======
>>>>>>> origin/master
