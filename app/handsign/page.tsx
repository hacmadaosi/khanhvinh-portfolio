"use client";

import DetectCamera from '@/src/components/handsign/DetectCamera'
import HandSignResult from '@/src/components/handsign/HandSignResult';
import Header from '@/src/components/handsign/Header';
import { useState } from 'react';

const page = () => {
  const [landmarks, setLandmarks] = useState<number[][] | null>(null);
  const [isDrawSkeleton, setIsDrawSkeleton] = useState(true);


  return (
    <div className='text-white px-8 py-4 h-screen flex-col flex'>
      <Header />
      <div className="flex flex-1 w-full items-center">
        <DetectCamera onLandmarksChange={setLandmarks} isDrawSkeleton={isDrawSkeleton} />
        <HandSignResult landmarks={landmarks} setIsDrawSkeleton={setIsDrawSkeleton} IsDrawSkeleton={isDrawSkeleton} />
      </div>

    </div>
  )
}

export default page
