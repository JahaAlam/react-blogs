
import profile from '../../assets/blogs-image/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center o-4 border-b-2 max-w-7xl mx-auto'>
            <h1 className='text-4xl font-bold'>React Blogs</h1>
            <img src={profile} alt="profile" />
        </header>
    );
};

export default Header;