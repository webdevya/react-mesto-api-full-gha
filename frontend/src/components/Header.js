import logo from '../images/logo.svg'

function Header({ email, btnText, onClick }) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип проекта Место-Россия" />
      <div className='header__menu'>
        <p className='header__menu-text'>{email}</p>
        <button className='header__menu-action' onClick={onClick}>{btnText}</button>
      </div>
    </header>
  );
}
export default Header;
