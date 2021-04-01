import React from 'react';

import PropTypes from 'prop-types';

const Search = ({ searchTerm, handleChange, className }) => (
  <label htmlFor="search" className={className}>
    Search:
    <input
      value={searchTerm}
      onChange={handleChange}
      name="searchTerm"
    />
  </label>
);

Search.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Search;
