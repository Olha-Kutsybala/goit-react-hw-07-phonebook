import PropTypes from 'prop-types';
import css from './filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';

function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div className={css.filter_container}>
      <label className={css.label_filter} htmlFor="filter">
        Filter
      </label>
      <input
        name="filter"
        type="text"
        value={filter}
        onChange={e => {
          dispatch(filter(e.currentTarget.value));
        }}
        className={css.input_filter}
      />
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
