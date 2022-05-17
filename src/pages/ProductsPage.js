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
    }

    // sort on filter chosen
    filterChange(e) {
        this.clearHiddenProducts();

        let sortedProducts = '';

        if (e.target.value === "Most to Least Protein") {
            sortedProducts = this.props.result.sort((a, b) => b.nutriments.proteins - a.nutriments.proteins);

            this.setState({
                result: sortedProducts
            });
        } else if (e.target.value === "Least to Most Sodium") {
            sortedProducts = this.props.result.sort((a, b) => a.nutriments.sodium - b.nutriments.sodium);

            this.setState({
                result: sortedProducts
            });
        } else if (e.target.value === "Least to Most Sugar") {
            sortedProducts = this.props.result.sort((a, b) => a.nutriments.sugars - b.nutriments.sugars);

            this.setState({
                result: sortedProducts
            });
        } else if (e.target.value === "Milk-Free") {
            let alteredProducts = this.state.result.map(product => {
                if (product.traces === "en:milk" || (Array.isArray(product.traces) && product.traces.indexOf('en:milk') > -1)) {
                    product["visibility"] = "hidden";
                }
                return product;
            });

            this.setState({
                result: alteredProducts
            })
        }
    }

    clearHiddenProducts() {
        this.state.result.forEach(product => {
            if (product.visibility) {
                product.visibility = ""
            }
        });
    }

    render() {
        return (
            <section className='container'>
                <FilterDropdown filterChange={this.filterChange} />
                <CardStack {...this.state} />
            </section>
        )
    }
};

export default ProductsPage;