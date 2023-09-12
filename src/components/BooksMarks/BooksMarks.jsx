import BookMark from "../BookMark/BookMark";
import PropTypes from 'prop-types';

const BooksMarks = ({bookMarks,readTime}) => {
    return (
        
        <div className="w-1/3 bg-slate-300 ml-7 mt-14">
            <h1 className="text-3xl mb-3 text-center">Spent Time Count:{readTime}</h1>
            <h1 className="text-3xl font-semibold text-center">BookMarks Count:{bookMarks.length}</h1>
            <div>
                {
                    bookMarks.map((bookMark,idx)=><BookMark key={idx} bookMark={bookMark}></BookMark>)
                }
            </div>
        </div>
    );
};
BooksMarks.propTypes={
    bookMarks:PropTypes.object.isRequired,
    readTime:PropTypes.object.isRequired
}
export default BooksMarks;