import React from 'react';
import CollectionItem from './CollectionItem';

export default function CollectionPreview({title, items}) {
    return (
        <div className="collection-preview">
            <h1 className="title"> {title} </h1>
            <div className="preview">
                {
                    items
                        .filter((item, idx) => idx < 4)
                        .map((item) => {
                            return (
                                <CollectionItem key={item.id} item={item} />
                            )
                        })
                }
            </div>
        </div>
    )
}
