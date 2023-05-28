export const SearchBar = ({ onSubmit }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="search" autoComplete="off" autoFocus></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
