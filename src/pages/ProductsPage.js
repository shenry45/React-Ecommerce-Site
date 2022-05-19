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
        /* SINGLE FILTER OK, MULTIPLE CHECKBOX FILTERING BROKEN */
        this.clearHiddenProducts();

        if (!e.target.checked) {
            return;
        }

        let alteredProducts = this.state.result;

        switch (e.target.name) {
            case "milk-free":
                alteredProducts = this.state.result.map(product => ifAllergenFound(product, "milk"));

                this.setState({
                    result: alteredProducts
                });

                break;

            case "gluten-free":
                alteredProducts = this.state.result.map(product => ifAllergenFound(product, "gluten"));

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
        let alteredProducts = this.state.result.map(product => {
            if (product.hasOwnProperty('visibility')) {
                delete product["visibility"];
            }
            return product;
        });

        this.setState({
            result: alteredProducts
        });
    }

    sortHelper(dir, param) {
        // ***BROKEN FOR SINGLE OR 3+ PARAMS FROM OBJECT***
        const params = param.split('.');
    
        if (dir === "asc") {
            return this.props.result.sort((a, b) => a[params[0]][params[1]] - b[params[0]][params[1]]);
        }
        
        return this.props.result.sort((a, b) => b[params[0]][params[1]] - a[params[0]][params[1]]);
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

const ifAllergenFound = (product, ingred) => {
    let allergenArr = product["allergens"].split(',');

    for (let x in allergenArr) {
        if (allergenArr[x] === `en:${ingred}`) {
            product["visibility"] = "hidden";
        }
    }

    return product;
}


export default ProductsPage;