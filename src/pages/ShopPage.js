import React, { Component } from 'react';
import { shopData } from '../shopData';
import CollectionPreview from '../components/collections/CollectionPreview';

export default class ShopPage extends Component {
    state = {
        collections: shopData
    }
    render() { 
        const {collections} = this.state;
        return (
            <div className="shop-page">
               {
                   collections.map(({id, ...otherCollectionProps}) => {
                       return (
                           <CollectionPreview key={id} {...otherCollectionProps} />
                       )
                   })
               }
            </div>
        )
    }
}
