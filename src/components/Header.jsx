import moment from 'moment';
import logoImg from '../assets/logo.png'

const Header = () => {
    const localTime = moment().format('dddd, MMMM, Do, YYYY');
    return (
        <div className='my-7 space-y-3'>
            <img className='w-[300px] mx-auto' src={logoImg} alt="" />
            <h2 className='text-lg text-[#706F6F] text-center'>Journalism Without Fear or Favour</h2>
            <p className='font-medium text-xl text-[#706F6F] text-center'><span>{localTime}</span></p>
        </div>
    );
};

export default Header;