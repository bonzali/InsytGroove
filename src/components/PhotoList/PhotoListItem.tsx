import React from 'react';
import {Photo} from "definitions/photo";

type Props = {
    photo : Photo
}
function PhotoListItem({photo} : Props) {
    return (
        <div className={'photo-item'}>
            <img alt={photo.title} src={`https://picsum.photos/200/300?random=${photo.id}`}/>
        </div>
    );
}

export default PhotoListItem;