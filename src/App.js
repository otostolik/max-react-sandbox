import React from 'react';

import ProductCategoryFilters from './components/ProductCategoryFilters';
import ProductComponent from './components/ProductComponent';

import './css/index.css';

class App extends React.Component {

    state = { filtres: [{
        picture: "https://www.zatar.pl/storage-zatar//img/dania/falafel.jpg" ,
        name: "FALAFEL & OLIWKI",
        id: 1
    },
    {
        picture: "https://www.zatar.pl/storage-zatar//img/dania/Gyros_pita_wege.jpg",
        name: "GYROS PITA WEGE",
        id: 2
    },
    {
        picture: "https://www.zatar.pl/storage-zatar//img/dania/talerz-mix-wege-crop.jpeg",
        name: "TALERZ MIX WEGE",
        id: 3
    }] }

    selectedChoice = (category) => {
        this.setState({filtres: category});
    }

    render () {
        return (
            <div className="justify-content-center">
                <div className="two fields">
                    <div className="field">
                        <ProductCategoryFilters onClick={this.selectedChoice} />
                    </div>
                    <div className="field">
                        <ProductComponent products={this.state.filtres} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;