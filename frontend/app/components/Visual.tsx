import type {Visual} from '@/sanity.types'
import { SanityImage } from 'sanity-image';
import {dataset, projectId} from '@/sanity/lib/api'

export default function Visual({visual}: {visual: Visual}) {
    console.log('Visual component received visual:', visual);
    return (
        <>
            {
                visual.mediaType === 'image' && visual.image && visual.image.asset?._ref && (
                    <SanityImage
                        baseUrl={`https://cdn.sanity.io/images/${projectId}/${dataset}/`}
                        id={visual.image.asset._ref}
                        {...visual.image}
                    />
                )
            }
            {/* {
                visual.mediaType === 'video' && visual.video && (
                    <video
                        src={visual.video.url}
                        controls
                        className="w-full h-auto"
                    >
                        Your browser does not support the video tag.
                    </video>
                )
            } */}
        </>
    )
}
