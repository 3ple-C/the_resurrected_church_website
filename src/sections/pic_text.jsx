import vision from '../assets/images/Frame 1578.png';
import mission from '../assets/images/Frame 1581.png';

const PicText = () => {
    return (
        <main className=' space-y-16 mt-14 xl:mt-30 lg:mt-28 md:mt-24 xl:space-y-28 lg:space-y-36 md:space-y-32'>
            <section className=' w-full flex flex-col gap-14 md:flex-row md:gap-1 md:px-20 py-2'>
                <div className='px-4 space-y-3 xl:w-[52%] xl:space-y-4 lg:w-[80%] md:w-[100%] md:px-1.5 md:py-0.5 md:space-y-2' id='vision_text'>
                    <h3 className='text-base font-bold text-[#01385F]'>What we stand for</h3>
                    <h1 className='xl:text-4xl font-semibold'>Our Vision</h1>
                    <ul className='space-y- font-medium leading-8  text-[16px]'>
                        <li className='flex gap-2'>
                            <span className='text-2xl'>•⁠  </span>⁠-To spread the message of the glorious gospel of Jesus all over the world
                        </li>
                        <li className='flex gap-2'>
                            <span className='text-2xl'>•⁠  </span>⁠-To save the lost and disciple the saved.

                        </li>
                        <li className='flex gap-2'>
                            <span className='text-2xl'>•⁠  </span>⁠-To raise world changers who are relevant within and outside the four walls of the church.

                        </li>
                        <li className='flex gap-2'>
                            <span className='text-2xl'>•⁠  </span>⁠-To compliment the efforts of the universal body of Christ.

                        </li>
                        <li className='flex gap-2'>
                            <span className='text-2xl'>•⁠  ⁠</span>⁠-⁠To raise a body of Believers who preach the gospel with the full demonstration of the power of God

                        </li>
                    </ul>
                </div>
                <div className='vision px-4 md:px-1.5 text-center'  id='vision_img'>
                    <img src={vision} alt="rtc vision" className='max-w-full object-contain p-1 md:mx-0 sm:mx-auto' />
                </div>
            </section>

            <section className=' w-full flex flex-col gap-14 md:flex-row md:gap-1 md:px-20 py-2'>
                <div className='order-1 md:order-2 px-4 md:px-1 text-center' id='mission_img'>
                    <img src={mission} alt="rtc vision" className='w- max-w- object-contain p-1' />
                </div>

                <div className='w-[100%] px-4 space-y-3 xl:w-[50%] xl:space-y-4 lg:w-[80%] md:order-2  md:w-[100%] md:px-1.5 md:py-0.5 md:space-y-2' id='mission_text'>
                    <h3 className='text-base font-bold text-[#01385F]'>Our call and Goal</h3>
                    <h1 className='xl:text-4xl font-semibold'>Our Mission</h1>
                    <ul className='space-y- pt-2 md:pt-0 font-medium leading-8  text-[16px] lg:text-'>
                        <li className='flex gap-2'>
                            <span className='text-2xl'>•⁠  </span>⁠Use every platform possible to spread the message of the Gospel.
                        </li>
                        <li className='flex gap-2'>
                            <span className='text-2xl'>•⁠  </span>⁠Raise believers who are equipped to Minister the truth of the Gospel all over the world.
                        </li>
                        <li className='flex gap-2'>
                            <span className='text-2xl'>•⁠  </span>⁠To share the message of God’s unconditional love to both the lost and the saved.
                        </li>
                        <li className='flex gap-2'>
                            <span className='text-2xl'>•⁠  </span>⁠To disciple believers to be better equipped as ministers of the word.
                        </li>
                        <li className='flex gap-2'>
                            <span className='text-2xl'>•⁠  </span>⁠To emphasize the importance of interdependence within the body of Christ.
                        </li>
                    </ul>
                </div>
            </section>
        </main>



    );
}

export default PicText;