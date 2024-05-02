
import PropTypes from 'prop-types';
import { IoBookmarkOutline } from "react-icons/io5";

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {title, cover, author, author_img,posted_date, reading_time, hashtags} = blog;
    return (
        <div className='mb-20 space-y-3'>
            <img className='w-full mb-8' src={cover} alt={`Cover picture of gthe title${title}`} />
            <div className='flex justify-between content-center mt-4'>
                <div className='flex p-2'>
                    <img src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>

                </div>
                <div>
                     <span>{reading_time} min read</span>
                     <button onClick={()=>handleAddToBookmark(blog)} 
                     className='ml-2'
                     >
                        <IoBookmarkOutline /></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p className='mt-5'>
                {
                    hashtags.map((hash, idx)=> 
                    <span 
                    key={idx}>
                        <a className='ml-5' href=''>#{hash}
                        </a></span>)
                }
            </p>
            <button 
            
            onClick={()=>handleMarkAsRead(reading_time)}
            className='text-purple-600 font-bold underline'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;