import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";
const Blog = ({blog, handelAddToBookmarks,handelMarkAsRead}) => {
   const {id, title, cover,author,author_img,posted_date, reading_time,hashtags} = blog;
    return (
        <div className='mb-20 space-y-4'>
        <img className='w-full mb-8' src={cover} alt='{cover picture of the title ${title}}'/>
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14' src={author_img}/>
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                    
                </div>
                <div>
                <span>{reading_time}min read</span>
                <button 
                     onClick={() => handelAddToBookmarks(blog)}
                  className='ml-2 text-2xl text-red-600'>
                  <FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
         <p>
            {
                hashtags.map((hash, idx) => <span key={idx}><a href=''>#{hash}</a></span>)
            }
         </p>
         <button
          onClick={() => handelMarkAsRead(id,  reading_time)} 
          className='text-purple-700 font-bold underline'>Mark As Read</button>
        </div>
    );
};
Blog.PropTypes = {
    blog: PropTypes.object.isRequired,
    handelAddToBookmarks: PropTypes.func,
    handelMarkAsRead: PropTypes.func
}
export default Blog;