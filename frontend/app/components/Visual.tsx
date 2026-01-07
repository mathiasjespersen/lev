import type {Visual} from '@/sanity.types'
import { SanityImage } from 'sanity-image';
import {dataset, projectId} from '@/sanity/lib/api'

import MuxPlayer from "@mux/mux-player-react";
import { sanityFetch } from '@/sanity/lib/live';

const getVideoId = async (videoRef: any) => {
    const [{data: videoData}] = await Promise.all([sanityFetch({query: `*[_id == "${videoRef}"][0] {
        ...,
        asset->
    }`})])
    return videoData || null;
}

export default async function Visual({visual}: {visual: Visual}) {
    let videoData = null;

    if (visual.mediaType === 'video') {
        videoData = await getVideoId(visual.video?.asset?._ref)
    }

    return (
        <>
            {
            visual.mediaType === 'image' && visual.image && visual.image.asset?._ref && (
                <SanityImage
                    className='w-full'
                    baseUrl={`https://cdn.sanity.io/images/${projectId}/${dataset}/`}
                    id={visual.image.asset._ref}
                    {...visual.image}
                />
            )
            }
            {
            videoData && visual.mediaType === 'video' && visual.video && (
                <MuxPlayer
                    className='w-full'
                    style={{
                        aspectRatio: (videoData.asset as any)?.data.aspect_ratio.replace(':', '/') || '16/9'
                    }}
                    playbackId={videoData.playbackId}
                />
            )
            }
        </>
    )
}
