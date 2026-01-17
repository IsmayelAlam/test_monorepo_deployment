'use client';

import React, { useState } from 'react';
import { Button } from '../ui/button';
import { axiosCall } from '@/lib/api';

export default function RandomButton() {
  const [randText, setRandText] = useState('Random');

  const getRandText = async () => {
    const getRand: string = await axiosCall({
      method: 'get',
      id: 'rand',
    });
    setRandText(`${getRand.slice(0, 3)}-${getRand.slice(3)}`);
  };

  return (
    <Button className="w-full text-2xl p-6" onClick={getRandText}>
      {randText}
    </Button>
  );
}
