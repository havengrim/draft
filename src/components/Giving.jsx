import React from 'react'
import styles, { layout } from '../style'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import praying from '../assets/svg/praying.svg';
import counsel from '../assets/svg/counsel.svg';
import holy from '../assets/svg/holy.svg';
import baptise from '../assets/svg/baptise.svg';


const Giving = () => {
  return (
    <section className={layout.section}>
        <div className={layout.sectionInfo}>
            <div className='container mx-auto px-6 py-4'>
                <div className='flex flex-col gap-3 justify-center items-center text-center'>
                  <div>
                    <span className={`${styles.heading}`}>What We Do</span>
                    <p className={`${styles.paragraph}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit leo, sed eget volutpat, vel enim, aenean. Non dictum lorem euismod quis pharetra sed pellentesque.</p>
                  </div>

                  <div className='grid grid-cols-1 gap-5 justify-start mt-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                      <div>
                        <Card className="p-3 border-0">
                            <CardHeader className='flex justify-center items-center flex-col gap-2'>
                              <span className=' bg-gray-900 p-3 rounded-full'><img src={praying} className='w-10'/></span>
                              <CardTitle className='text-lg'>Worship/Praise</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <CardDescription className='opacity-75'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit leo, sed eget volutpat, vel enim, aenean. Non dictum lorem euismod quis pharetra sed pellentesque.</CardDescription>
                              </CardContent>
                        </Card>
                      </div>
                      <div>
                        <Card className="p-3 border-0">
                            <CardHeader className='flex justify-center items-center flex-col gap-2'>
                              <span className=' bg-gray-900 p-3 rounded-full'><img src={counsel} className='w-10'/></span>
                              <CardTitle className='text-lg'>Counselling</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <CardDescription className='opacity-75'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit leo, sed eget volutpat, vel enim, aenean. Non dictum lorem euismod quis pharetra sed pellentesque.</CardDescription>
                              </CardContent>
                        </Card>
                      </div>
                      <div>
                        <Card className="p-3 border-0">
                            <CardHeader className='flex justify-center items-center flex-col gap-2'>
                              <span className=' bg-gray-900 p-3 rounded-full'><img src={holy} className='w-10'/></span>
                              <CardTitle className='text-lg'>Holy Communion</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <CardDescription className='opacity-75'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit leo, sed eget volutpat, vel enim, aenean. Non dictum lorem euismod quis pharetra sed pellentesque.</CardDescription>
                              </CardContent>
                        </Card>
                      </div>
                      <div>
                        <Card className="p-3 border-0">
                            <CardHeader className='flex justify-center items-center flex-col gap-2'>
                              <span className=' bg-gray-900 p-3 rounded-full'><img src={baptise} className='w-10'/></span>
                              <CardTitle className='text-lg'>Baptism</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <CardDescription className='opacity-75'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit leo, sed eget volutpat, vel enim, aenean. Non dictum lorem euismod quis pharetra sed pellentesque.</CardDescription>
                              </CardContent>
                        </Card>
                      </div>
                      
                  </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Giving