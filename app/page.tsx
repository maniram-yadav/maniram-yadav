'use client'


import { useState } from "react";

export default function Home() {
  const [comp, setComponent] = useState('flipcard');

  const component = {
    'flipcard': FlipCard,
    'groweffect': GrowEffectCard,
  }

  return (
    <div>
      This is Maniram
    </div>
  );
}
