
import './Banner.css';
import logo from '../facebook.png';



function Banner() {
  return (
    <div className='head'>
        <img className='img' src={logo}/>
        <h2 className='heading'>
        Facebook helps you connect and share with the people in your life.
        </h2>
    </div>
  );
}

export default Banner;
