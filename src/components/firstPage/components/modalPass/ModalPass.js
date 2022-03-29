import { useState, useEffect } from 'react';
import './ModalPass.css'

const ModalPass = ({ closeModal }) => {
	const [email, setEmail] = useState('')
	const [emailDirty, setEmailDirty] = useState(false);
	const [emailError, setEmailError] = useState('Email не может быть пустым');
	const [formValid, setFormValid] = useState(false);

	useEffect(() => {
		if (emailError) {
			setFormValid(false)
		} else {
			setFormValid(true)
		}
	}, [emailError])

	const onChangeEmail = (e) => {
		setEmail(e.target.value)
		const checkMail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
		if (!checkMail.test(String(e.target.value).toLowerCase())) {
			setEmailError('Некорректный email');
		} else {
			setEmailError("")
		}
	}

	const blurHandler = (e) => {
		if (e.target.name === 'email') {
			return setEmailDirty(true)
		}
	}
	return (
		<div className="modalPass">
			<div className="modalPass__container">
				<div className="form">
					<p>Пожалуйста, введите ваш адрес электронной почты, на который мы отправим ссылку для восстановления пароля</p>
					<div className="input-form">
						{(emailDirty && emailError) && <div style={{ color: "red" }}>{emailError}</div>}
						<input type="text" name='email' placeholder='Введите свой email'
							value={email}
							onChange={e => onChangeEmail(e)}
							onBlur={e => blurHandler(e)}
						/>
					</div>

					<button className="button button__main button__main-inner" disabled={!formValid} onClick={closeModal}><div className='inner pass'>Отправить</div></button>
				</div>
			</div>
		</div>
	)
}

export default ModalPass;