import {useState} from 'react'
import { close, logo, menu, user, user1, whatsappIcon } from "../assets"
import { navLinks, whatsapp } from "../constants"

const Navbar = () => {
  const [toggle, settoggle] = useState(false)
  const [whatsappDropdown, setWhatsappDropdown] = useState(false);
  // const [selectedWhatsappNumber, setSelectedWhatsappNumber] = useState(null);

  // const handleWhatsappClick = (number) => {
  //   setWhatsappDropdown(false);
  //   setSelectedWhatsappNumber(number);
    
  //   // Implement logic to redirect to WhatsApp with the selected number
  //   // Example: window.open(`https://wa.me/${number}`, '_blank');
  // };

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt="hoobank" className='w-[134px]' />

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img 
          src={toggle ? close : menu}
          alt="menu"
          className='w-[23px] h-[23px] object-contain'
          onClick={
            () => settoggle((prev) => !prev)
          }
        />

        <div
          className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className='list-none flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}`}>
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>

        </div>
      </div>

      <div className='fixed bottom-4 right-4 z-10'>
        <img
          src={whatsappIcon} // Replace with your WhatsApp icon source
          alt="whatsapp"
          className='w-[40px] h-[40px] cursor-pointer animate-pulse'
          onClick={() => setWhatsappDropdown((prev) => !prev)}
        />

        {whatsappDropdown && (
          <div className='text-white border rounded shadow-lg absolute bottom-14 right-0 sm:w-[300px] w-[250px]'>
            <div className='flex justify-between p-4 bg-blue-gradient'>
              <img src={close} alt="close" onClick={() => setWhatsappDropdown((prev) => !prev)} className='mr-4' />
              <h2 className='p-2 flex-1 text-center font-poppins font-medium text-[18px] text-primary outline-none'>Support</h2>
            </div>
            {whatsapp.map((wa) => (
              <div key={wa.id} className='flex justify-start'>
                <a onClick={() => setWhatsappDropdown((prev) => !prev)} href={`https://wa.me/${wa.number}?text=Hi...`} target='_blank' className='flex flex-1 justify-start items-center p-3 border-b-2 bg-white text-black'>
                  <img src={user} alt="" className='w-[50px] mr-4' />
                  <div>
                    <p className='text-[13px]'>{wa.title}</p>
                    <p className='font-semibold text-[20px]'>
                      {wa.name}
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar