import React from 'react';

import CardStack from '../components/CardStack.js';
import FilterDropdown from '../components/FilterDropdown.js';

class ProductsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: props.result
        };

        this.filterChange = this.filterChange.bind(this);
    }

    filterChange(e) {
        let sortedProducts = '';

        if (e.target.value === "Most to Least Protein") {
            sortedProducts = this.state.result.sort((a, b) => b.nutriments.proteins - a.nutriments.proteins);

            this.setState({
                result: sortedProducts
            });
        } else if (e.target.value === "Least to Most Sodium") {

        } else if (e.target.value === "Least to Most Sugar") {

        }
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