"use client";

type Props = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
};

const SearchBar = ({ searchTerm, setSearchTerm }: Props) => {
  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Buscar producto..."
        value={searchTerm}
        onChange={(e) => { setSearchTerm(e.target.value);}}
      />
    </div>
  );
};

export default SearchBar;