import './Header.css';
const Header = () => {

   return (
      <div className="header__block ">
         <div className="logo">
            <a className='links' href="#">Книга кулинарных рецептов</a>
         </div>
         <div className="pages">
            <div className="favorites text-center">
               <a className='links' href="#">Популярные выпечки</a>
            </div>
            <div className="commit__recipes active text-center">
               <a className='links' href="#">Поделиться рецептом</a>
            </div>
         </div>
      </div>
   )

}

export default Header;