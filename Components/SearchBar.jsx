import * as React from 'react';
import { Searchbar } from 'react-native-paper';

const SearchBar = () => {
  /**
   * Custom SearchBar component, that allows the user to search based on the page content, listings, housemates, ... etc,
   * ---------------------------------------------
   * Note:
   * States are not yet added, and additional side buttons needs to be added
   */
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export default SearchBar;
