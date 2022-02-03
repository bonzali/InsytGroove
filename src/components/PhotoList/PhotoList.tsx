import React, {useEffect, useState} from 'react';
import './PhotoList.scss'
import {getPhotoList} from "api/photo"
import PhotoListItem from "./PhotoListItem"
import StackGrid from "shared/components/StackGrid";
import {useWindowSize} from "shared/hooks/useWindowSize";
import {Photo} from "definitions/photo";
import Loader from "shared/components/Loader";

type Props = {
    userId ?: number
}

function PhotoList({userId} : Props) {
    const {width} = useWindowSize()
    const [isLoading, setIsLoading] = useState(true)
    const [photos, setPhotos] = useState<Photo[]>([])

    useEffect(() => {
        (async () => {
            try {
                const result = await getPhotoList(userId)
                setPhotos(result)
                setIsLoading(false)
            } catch (e) {
                //Todo : display error message when request failed
                setIsLoading(false)
            }        })()
    }, [userId])

    return (
        <div className={'PhotoList'}>
            {isLoading && <Loader/>}
            <StackGrid style={{marginTop: '38px'}}
                       columnWidth={width <= 768 ? '49%' : '19%'}
            >
                {
                    photos.map(photo => (<PhotoListItem key={photo.id} photo={photo}/>))
                }

            </StackGrid>
        </div>
    );
}

export default PhotoList;