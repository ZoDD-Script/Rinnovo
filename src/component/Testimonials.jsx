// import FeedBackCard from './FeedBackCard'
import { feedback } from '../constants'
import styles from '../style'
import { quotes } from '../assets'

const FeedbackCard = ({ content, name, title, img }) =>  (
  <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
    <img src={quotes} alt="double_quotes" className='w-[42px] h-[27px] object-contain' />
    <p className='font-poppins font-normal text-[18px] leading-[32px] text-white my-10'>{content}</p>

    <div className='flex flex-row'>
      <img src={img} alt={name} className='w-[48px] h-[48px] rounded-full' />
      <div className='flex flex-col ml-4'>
        <h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-white '>{name}</h4>
        <p className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite '>{title}</p>
      </div>
    </div>
  </div>
)

const Testimonials = () => (
  <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    {/* TODO */}
    <div className='absolute x-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient' />

    <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
      <h1 className={`${styles.heading2}`}>What people are <br className='sm:block hidden' /> saying about us</h1>
      <div className='w-full md:mt-0 mt-6'>
        <p className={`${styles.paragraph} text-left man-w-[450px]`}>Our mission is to empower communities and businesses by providing sustainable and efficient energy systems.</p>
      </div>
    </div>

    <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
)

export default Testimonials