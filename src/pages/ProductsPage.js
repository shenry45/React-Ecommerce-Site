import React from 'react';

import CardStack from '../components/CardStack.js';
import FilterDropdown from '../components/FilterDropdown.js';

class ProductsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: JSON.parse(JSON.stringify(props.result))
        };

        this.filterChange = this.filterChange.bind(this);
        this.checkboxFilterChange = this.checkboxFilterChange.bind(this);
    }

    // direction (asc, desc) and object paramater
    sortHelper(dir, param) {
        // ***BROKEN FOR SINGLE OR MULTIPLE PARAMS GIVEN***
        const params = param.split('.');

        if (dir === "asc") {
            return this.props.result.sort((a, b) => a[params[0]][params[1]] - b[params[0]][params[1]]);
        }
        
        return this.props.result.sort((a, b) => b[params[0]][params[1]] - a[params[0]][params[1]]);
    }

    // sort on filter chosen
    filterChange(e) {
        this.clearHiddenProducts();

        let sortedProducts = '';

        switch (e.target.value) {
            case "Most to Least Protein":
                sortedProducts = this.sortHelper('desc', 'nutriments.proteins');
                break;

            case "Least to Most Sodium":
                sortedProducts = this.sortHelper('asc', 'nutriments.sodium');
                break;

            case "Least to Most Sugar":
                sortedProducts = this.sortHelper('asc', 'nutriments.sugars');
                break;

            default:
                break;
        }

        this.setState({
            result: sortedProducts
        });
    }

    checkboxFilterChange(e) {
        this.clearHiddenProducts();

        let alteredProducts = this.props.result;

        switch (e.target.name) {
            case "milk-free":
                alteredProducts = this.props.result.map(product => {
                    // ***NEED TO CHANGE TO ALLERGENS***
                    if (product.traces === "en:milk" || (Array.isArray(product.traces) && product.traces.indexOf('en:milk') > -1)) {
                        product["visibility"] = "hidden";
                    }
                    return product;
                });

                this.setState({
                    result: alteredProducts
                });

                break;

            default:
                break;
        }
        
        this.setState({
            result: alteredProducts
        })
        
    }

    clearHiddenProducts() {
        this.props.result.forEach(product => {
            if (product.visibility) {
                product.visibility = ""
            }
        });
    }

    render() {
        return (
            <section className='container'>
                <FilterDropdown filterChange={this.filterChange} checkboxFilterChange={this.checkboxFilterChange} />
                <CardStack {...this.state} />
            </section>
        )
    }
};

export default ProductsPage;