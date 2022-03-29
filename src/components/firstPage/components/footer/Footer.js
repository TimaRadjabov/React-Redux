import './Footer.css';

const Footer = () => {

   return (

      <div className="footer__container">
         <div className='footer__adress'>
            <a href='#' className='links'>Phone number: +79061234567</a>
            <a href='#' className='links'>Adress: город Казань, ул. Братьев Касимовых</a>
         </div>
         <div className='social__media'>
            <div><a href='#' className='vk social__item'><img src="https://img.icons8.com/ios/50/000000/vk-circled--v2.png" /></a></div>
            <div><a href='#' className='instagram social__item'><img src="https://img.icons8.com/ios/50/000000/instagram-new--v2.png" /></a></div>
            <div><a href='#' className='twitter social__item'><img src="https://img.icons8.com/ios/50/000000/twitter-circled--v4.png" /></a></div>
            <div><a href='#' className='facebook social__item'><img src="https://img.icons8.com/ios/50/000000/facebook--v2.png" /></a></div>
         </div>
      </div>

   )
}
export default Footer;