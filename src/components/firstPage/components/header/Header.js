import './Header.css';
import { ModalContext } from "../context";
import { useState, useContext } from 'react';
import ModalSigin from "../modalSigin/ModalSigin";
import ModalReg from "../modalReg/ModalReg";
import ModalPass from "../modalPass/ModalPass";


const Header = (props) => {
	const [avatar, setAvatar] = useState(false);
	const { openModal, closeModal } = useContext(ModalContext);


	const checkOut = () => {
		closeModal();
		setAvatar(true);
		handlerWillDone()
	};

	const handlerReg = () => {
		openModal({
			title: "регистрация",
			children: <ModalReg
				checkOut={checkOut}
				handlerWillDone={handlerWillDone}
			/>
		})
	}

	const handlerPass = () => {
		openModal({
			title: "ВОССТАНОВЛЕНИЕ ПАРОЛЯ",
			children: <ModalPass
				closeModal={closeModal}
			/>
		})
	}


	const handlerClick = () => {
		openModal({
			title: "вход",
			children: <ModalSigin 
				handlerReg={handlerReg} 
				handlerPass={handlerPass} 
				heckOut={checkOut} 
			/>
		});
	}

	const handlerWillDone = () => {
		openModal({
			title: "добро пожаловать!",
			children: <img src="https://cdn.dribbble.com/users/1291846/screenshots/3720238/media/f275d62e0db2b53f7e732c6496db6523.png?compress=1&resize=400x300&vertical=top" />
		});
	}

	return (
		<div className="header__block ">
			<div className="logo">
				<a className='links' href="#">Книга кулинарных рецептов</a>
			</div>
			<div className="pages">
				<div className="pages__flex">
					<div className="favorites text-center">
						<a className='links' href="#">Популярные выпечки</a>
					</div>
					<div className="commit__recipes active text-center">
						<a className='links' href="#">Поделиться рецептом</a>
					</div>
				</div>
				<div className="avatar">
					{avatar ? <img className='avatarimg' src="https://statrielt.ru/images/kisspng-computer-icons-user-profile-clip-art-portable-netw-c-svg-png-icon-free-download-389-86-onlineweb-5c6f7efde29670.9426602115508108779281.png" /> : <button className="button button__main"><div className="inner" onClick={handlerClick}>Войти</div></button>}

				</div>
			</div>

		</div>
	)


}

export default Header;