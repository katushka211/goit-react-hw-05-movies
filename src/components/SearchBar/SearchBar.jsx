import './searchbar.css';
export const SearchBar = ({ onSubmit }) => {
  return (
    <div>
      <form className="search-form" onSubmit={onSubmit}>
        <input
          className="search-input"
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
        ></input>
        <button className="search" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};
