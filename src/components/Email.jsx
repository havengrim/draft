import React from 'react';
import styles, { layout } from '../style';
import { Input } from "@/components/ui/input"
import { Button } from './ui/button';


const Email = () => {
  return (
    <section className={`${layout.section} bg-gray-900 text-gray-200`}>
        <div className={layout.sectionInfo}>
            <div className='container mx-auto px-6 py-4 text-center'>
                <span className={`${styles.heading}`}>Join with us, Subscribe our Newsletter</span>
                <div className='flex items-center justify-center gap-2 container md:px-[15rem] md:py-4 px-0 py-0'>
                    <Input type='email' placeholder='Input your Email Address in here' className='py-3'/>
                    <Button className='text-gray-900 py-3 bg-gray-300'>Subscribe</Button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Email