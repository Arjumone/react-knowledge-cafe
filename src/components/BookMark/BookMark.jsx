import PropTypes from 'prop-types';

const BookMark = ({bookMark}) => {
    const{title}=bookMark
    return (
        <div className="bg-slate-500 mb-2 m-3 p-2 rounded">
            <h3 className="text-2xl font-semibold text-white">{title}</h3>
        </div>
    );
};
BookMark.propTypes={
    bookMark:PropTypes.object.isRequired
}
export default BookMark;