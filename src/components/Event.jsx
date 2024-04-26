import React from 'react';
import styles, { layout } from '../style';
import placeholder from '../assets/placeholder.png';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card';

const Event = () => {
  return (
    <section className={layout.section}>
        <div className={layout.sectionInfo}>
            <div className='container mx-auto px-6 py-4'>
                <div className='text-center'>
                        <span className={`${styles.heading}`}>Upcoming event on Beraka</span>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 mt-5 pt-5 gap-5'>
                        <Card className='rounded-md'>
                            <img src={placeholder} className='w-full max-h-[15rem]'/>
                            <CardContent className='py-3 px-3'>
                                <CardTitle>Trust in the lord with all your love</CardTitle>
                                <p>Monday 20 April 2021 - Tuesday 21 April 2021</p>
                                <div>Gotham Fan 221b , New York</div>
                                <CardDescription className='mt-4'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</CardDescription>
                            </CardContent>
                        </Card>
                        <Card className='rounded-md'>
                            <img src={placeholder} className='w-full max-h-[15rem]'/>
                            <CardContent className='py-3 px-3'>
                                <CardTitle>Trust in the lord with all your love</CardTitle>
                                <p>Monday 20 April 2021 - Tuesday 21 April 2021</p>
                                <div>Gotham Fan 221b , New York</div>
                                <CardDescription className='mt-4'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</CardDescription>
                            </CardContent>
                        </Card>
                        <Card className='rounded-md'>
                            <img src={placeholder} className='w-full max-h-[15rem]'/>
                            <CardContent className='py-3 px-3'>
                                <CardTitle>Trust in the lord with all your love</CardTitle>
                                <p>Monday 20 April 2021 - Tuesday 21 April 2021</p>
                                <div>Gotham Fan 221b , New York</div>
                                <CardDescription className='mt-4'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</CardDescription>
                            </CardContent>
                        </Card>
                        <Card className='rounded-md'>
                            <img src={placeholder} className='w-full max-h-[15rem]'/>
                            <CardContent className='py-3 px-3'>
                                <CardTitle>Trust in the lord with all your love</CardTitle>
                                <p>Monday 20 April 2021 - Tuesday 21 April 2021</p>
                                <div>Gotham Fan 221b , New York</div>
                                <CardDescription className='mt-4'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</CardDescription>
                            </CardContent>
                        </Card>
                    </div>
            </div>  
        </div>
    </section>
  )
}

export default Event