import PropTypes from "prop-types";

export default function SearchBar ({
    filterText,
    inStockOnly,
    onFilterTextChange,
    onInstockOnlyChange
}) {
    return (
        <form>
            <input 
                type="text"
                value={filterText} placeholder="Search..."
                onChange={(e) => onFilterTextChange(e.target.value)} />
            <label >
                <input 
                    type="text"
                    checked={inStockOnly}
                    onChange={(e) => onInstockOnlyChange(e.target.checked)} />
                {' '}
                Only show product in stock 
            </label>
        </form>
    );
}

SearchBar.propTypes = {
    filterText: PropTypes.string.isRequired,
    inStockOnly: PropTypes.bool.isRequired,
    onFilterTextChange: PropTypes.func.isRequired,
    onInStockOnlyChange: PropTypes.func.isRequired,
}