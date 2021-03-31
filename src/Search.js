import React from 'react';

import PropTypes from 'prop-types';

const Search = ({ searchTerm, handleChange }) => (
  <input
    value={searchTerm}
    onChange={handleChange}
    name="searchTerm"
  />
);

Search.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Search;
