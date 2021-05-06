import React from 'react';

import '../css/index.css'

const MenuPositions = {
        DaniaWege: [
            {
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
            }
        ],
        DaniaMiesne: [
            {
                picture: "https://www.zatar.pl/storage-zatar//img/dania/Manakish.jpg" ,
                name: "MANAKISH PITA ZAPIEKANA MIĘSNA",
                id: 4
            },
            {
                picture: "https://www.zatar.pl/storage-zatar//img/dania/Pizza_Lahmacun.jpg",
                name: "PIZZA LAHMACUN MIĘSNA",
                id: 5
            }
        ],
        Dodatki: [
            {
                picture: "https://www.zatar.pl/storage-zatar//img/dania/humus.jpg" ,
                name: "HUMUS",
                id: 6
            },
            {
                picture: "https://www.zatar.pl/storage-zatar//img/dania/mix_pikli.jpg",
                name: "MIX PIKLI",
                id: 7
            },
            {
                picture: "https://www.zatar.pl/storage-zatar//img/dania/ziemniaki_libanskie.jpg",
                name: "ZIEMNIAKI LIBANSKIE",
                id: 8
            }
        ]
};

class ProductCategoryFilters extends React.Component {
    state = {
        active: 'DaniaWege'
    }

    handleClick = (e) => {
        this.props.onClick(MenuPositions[e]);
        this.setState({
            active: e
        })
    }

    render () {
        return (
            <div className="nav" >
                <a className={this.state.active === 'DaniaWege' ? 'active' : ''} onClick={() => this.handleClick( 'DaniaWege')} >Dania Wege</a>
                <a className={this.state.active === 'DaniaMiesne' ? 'active' : ''} onClick={() => this.handleClick( 'DaniaMiesne')} >Dania mięsne</a>
                <a className={this.state.active === 'Dodatki' ? 'active' : ''} onClick={() => this.handleClick( 'Dodatki')} >Dodatki</a>
            </div>
        );
    }
}

export default ProductCategoryFilters;