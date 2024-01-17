import styles from '../style'
import { battery1, discount, robot } from '../assets'
import GetStarted from './GetStarted'

const Hero = () =>  (
  <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`fex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
        <img
          src={discount}
          alt="discount"
          className='w-[32px] h-[32px]'
        />
        <p className={`${styles.paragraph} ml-2`}>
          <span className='text-white'></span> RINNOVO {' '}
          <span className='text-white'>BY PRECISE</span>
        </p>
      </div>


      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[62px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
        Powering Your Future<br className='sm:block hidden' /> {' '}
          <span 
          className='text-gradient'>with Cutting-Edge
          </span> {' '} 
        </h1>
        <div className='ss:flex hidden md:mr-4 mr-0'>
          <GetStarted />
        </div>
      </div>

      <h1 className='font-poppins font-semibold ss:text-[58px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>
      Renewable Energy Storage.
      </h1>
      <p className={`${styles.paragraph} max-w-[4x0px] mt-5`}>Your leading source for innovative renewable energy solutions. As a dynamic subsidiary of the distinguished Precise Energy Group.</p>
    </div>

    <div className={`${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={battery1} alt="billing" className='w-[100%] h-[100%] relative z-[5] pr-20' />
      <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
      <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient' />
      <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />
    </div>

    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </section>
)

export default Hero