import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog,handleAddToBookMarks,handleReadTime}) => {
    const{id,cover,title,author,author_img,hashtags,posted_date,reading_time}=blog
    return (
        <div className='my-5'>
            
                <img className='w-full' src={cover} alt={`Cover picture of the title${title}`} />
                <div className='flex justify-between'>
                    <div className=' my-4 flex'>
                        <img className='w-14 rounded-full mr-2' src={author_img} alt="" />
                        <div>
                            <h1 className='font-bold'>{author}</h1>
                            <p>{posted_date}</p>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <span>{reading_time}read time</span>
                        <button onClick={()=>handleAddToBookMarks(blog)} className="ml-3 text-red-600 text-2xl"><FaBookmark></FaBookmark></button>
                    </div>
                </div>
                <h1 className='text-3xl font-semibold'>{title}</h1>
                <p className='my-3'>
                    {
                        hashtags.map((hash,idx)=><span key={idx}><a href=''>#{hash}</a></span>)
                    }
                </p>
            <button onClick={()=>handleReadTime(id,reading_time)} className='underline text-purple-900 font-black text-xl'>Mark as read</button>
        </div>
    );
};
Blog.propTypes={
    blog:PropTypes.object.isRequired,
    handleAddToBookMarks:PropTypes.func.isRequired,
    handleReadTime:PropTypes.func.isRequired
}

export default Blog;