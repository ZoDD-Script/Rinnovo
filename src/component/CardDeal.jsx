import { battery2, card } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Tailored Energy Storage <br className='sm:block hidden' /> </h2>
      <p className={`${styles.paragraph} max-w-[780px] mt-5`}>Every project is unique, and so are your energy demands. We offer a diverse range of battery capacities and chemistries, meticulously <br /> crafted to seamlessly integrate with your existing renewable energy systems, maximizing efficiency and reliabilit.</p>
      <Button styles='mt-10' />
    </div>

    <div className={layout.sectionImg}>
      <img src={battery2} alt="card" className='w-[100%] h-[100%]' />
    </div>
  </section>
)

export default CardDeal