import React from 'react';

import CardStack from '../components/CardStack.js';
import FilterDropdown from '../components/FilterDropdown.js';

class ProductsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: JSON.parse(JSON.stringify(props.result)),
            milkFree: false,
            glutenFree: false,
            hiddenProducts: new Set()
        };

        this.filterChange = this.filterChange.bind(this);
        this.checkboxFilterChange = this.checkboxFilterChange.bind(this);
    }

    // sort on filter chosen
    filterChange(e) {
        let sortedProducts = JSON.parse(JSON.stringify(this.props.result));

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
        let alteredProducts = this.state.result;

        if (!e.target.checked) {
            switch (e.target.name) {
                case "milk-free":
                    alteredProducts = this.state.result.map(product => ifAllergenFound(product, "milk", "remove"));
    
                    this.setState({
                        result: alteredProducts,
                        milkFree: false
                    });
    
                    break;
    
                case "gluten-free":
                    alteredProducts = this.state.result.map(product => ifAllergenFound(product, "gluten", "remove"));
    
                    this.setState({
                        result: alteredProducts,
                        glutenFree: false
                    });
    
                    break;
    
                default:
                    break;
            }
        } else {
            switch (e.target.name) {
                case "milk-free":
                    alteredProducts = this.state.result.map(product => ifAllergenFound(product, "milk", "add"));

                    this.setState({
                        result: alteredProducts,
                        milkFree: true
                    });

                    break;

                case "gluten-free":
                    alteredProducts = this.state.result.map(product => ifAllergenFound(product, "gluten", "add"));

                    this.setState({
                        result: alteredProducts,
                        glutenFree: true
                    });

                    break;

                default:
                    break;
            }
        }

        this.setState({
            result: alteredProducts
        })
        
    }

    sortHelper(dir, param) {
        // ***BROKEN FOR SINGLE OR 3+ PARAM ATTRIBUTES FROM OBJECT***
        const params = param.split('.');
    
        if (dir === "asc") {
            return this.state.result.sort((a, b) => a[params[0]][params[1]] - b[params[0]][params[1]]);
        }
        
        return this.state.result.sort((a, b) => b[params[0]][params[1]] - a[params[0]][params[1]]);
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

const ifAllergenFound = (product, ingred, action) => {
    let allergenArr = product["allergens"].split(',');

    for (let x in allergenArr) {
        if (allergenArr[x] === `en:${ingred}`) {
            if (product.hasOwnProperty('visibility') && product["visibility"] === "hidden" && action === "remove") {
                product["visibility"] = "";
            } else {
                product["visibility"] = "hidden";
            }
        }
    }

    return product;
}


export default ProductsPage;