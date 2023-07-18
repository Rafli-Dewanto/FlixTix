import { Footer as Ffooter } from 'flowbite-react';
import React from 'react'

export default function Footer() {
  return (
    <Ffooter className="mt-8" container>
      <Ffooter.Copyright by="FlixTix" href="#" year={2023} />
      <Ffooter.LinkGroup>
        <div className='flex flex-col mt-8 gap-y-4 md:flex md:flex-row'>
          <Ffooter.Link href="#">About</Ffooter.Link>
          <Ffooter.Link href="https://www.privacypolicygenerator.org/live.php?token=j41GeAUibXiklMYbYaiSdwODDXsOVxxm">
            Privacy Policy
          </Ffooter.Link>
          <Ffooter.Link href="#">Licensing</Ffooter.Link>
        </div>
      </Ffooter.LinkGroup>
    </Ffooter>
  );
}
