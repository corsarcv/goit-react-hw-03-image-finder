export const SearchBar = ({onSubmit}) => {
    
    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(e.currentTarget.elements.input.value);
    }

    return (
        <header className="Searchbar">
        <form className="SearchForm" onSubmit={handleSubmit}>
            <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
            </button>

            <input
                className="SearchForm-input"
                name="input"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
            />
        </form>
        </header>
        )
    }