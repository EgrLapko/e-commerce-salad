import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../components/collections/CollectionsOverview';
import CollectionPage from './CollectionPage';

export default function ShopPage({match}) {
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    )
};

