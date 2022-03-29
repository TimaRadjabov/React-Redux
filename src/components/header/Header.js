import './Header.css';
import {Link} from 'react-router-dom';
const Header = () => {

   return (
      <div className="header__block ">
         <div className="logo">
            <Link className='links' to="/">Книга кулинарных рецептов</Link>
         </div>
         <div className="pages">
            <div className="favorites text-center">
               <Link className='links' to="firstPage">Популярные выпечки</Link>
            </div>
            <div className="commit__recipes active text-center">
               <Link className='links' to="secondPage">Поделиться рецептом</Link>
            </div>
         </div>
      </div>
   )

}

export default Header;