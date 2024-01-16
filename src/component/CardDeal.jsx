import { battery2, card } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Tailored Energy Solutions <br className='sm:block hidden' /> </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>We recognize the unique energy needs of each client. Our diverse product range reflects our commitment to providing customized solutions that are not only efficient but also environmentally responsible.</p>
      <Button styles='mt-10' />
    </div>

    <div className={layout.sectionImg}>
      <img src={battery2} alt="card" className='w-[100%] h-[100%]' />
    </div>
  </section>
)

export default CardDeal