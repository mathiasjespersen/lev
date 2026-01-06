import type {Visual} from '@/sanity.types'
import { SanityImage } from 'sanity-image';
import {dataset, projectId} from '@/sanity/lib/api'

import MuxPlayer from "@mux/mux-player-react";

export default function Visual({visual}: {visual: Visual}) {
    console.log('Visual component received visual:', visual);
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
            visual.mediaType === 'video' && visual.video && (visual.video.asset as any)?.playbackId && (
                <MuxPlayer
                    className='w-full'
                    style={{
                        aspectRatio: (visual.video.asset as any)?.data.aspect_ratio.replace(':', '/') || '16/9'
                    }}
                    playbackId={(visual.video.asset as any)?.playbackId}
                />
            )
            }
        </>
    )
}
