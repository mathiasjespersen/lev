import type {MuxVideoAsset, Visual} from '@/sanity.types'
import { SanityImage } from 'sanity-image';
import {dataset, projectId} from '@/sanity/lib/api'

import MuxPlayer from "@mux/mux-player-react";

type VisualWithMux = Omit<Visual, 'video'> & {
  video?: {
    asset?: MuxVideoAsset
  }
}

export default async function Visual({visual}: {visual: VisualWithMux}) {
    console.log('Visual to render:', visual);
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
            visual.video && visual.mediaType === 'video' && visual.video && (
                <MuxPlayer
                    className='w-full'
                    style={{
                        aspectRatio: (visual.video?.asset as any)?.data.aspect_ratio.replace(':', '/') || '16/9'
                    }}
                    playbackId={visual.video?.asset?.playbackId}
                />
            )
            }
        </>
    )
}
