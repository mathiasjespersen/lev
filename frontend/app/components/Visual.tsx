import type {Visual} from '@/sanity.types'
import { SanityImage } from 'sanity-image';
import {dataset, projectId} from '@/sanity/lib/api'

import MuxPlayer from "@mux/mux-player-react";

export default function Visual({visual}: {visual: Visual}) {
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
            {
                visual.mediaType === 'video' && visual.video && (visual.video.asset as any)?.playbackId && (
                    <MuxPlayer
                        playbackId={(visual.video.asset as any)?.playbackId}
                        accentColor="#ea580c"
                    />
                )
            }
        </>
    )
}
