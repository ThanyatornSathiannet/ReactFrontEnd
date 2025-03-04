import PropTypes from "prop-types";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

export default function FilterableProductTable(
    {products, filterData, filterAction, inStockOnlyData, inStockOnlyAction}) {
        return (
            <div>
                <SearchBar
                    filterText={filterData}
                    inStockOnly={inStockOnlyData}
                    onFilterTextChange={filterAction}
                    onInStockOnlyChange={inStockOnlyAction}
                />
                <ProductTable
                    products={products}
                    filterText={filterData}
                    inStockOnly={inStockOnlyData}
                />
            </div>
        );
    }

    FilterableProductTable.propTypes = {
        products: PropTypes.object.isRequired,
        filterData: PropTypes.string.isRequired,
        filterAction: propTypes.func.isRequired,
        inStockOnlyData: propTypes.bool.isRequired,
        inStockOnlyAction: propTypes.func.isRequired
    };