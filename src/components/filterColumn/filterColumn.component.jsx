import React from 'react';
import { connect } from 'react-redux';
import {
  setGroupSelectedValue,
  setLevelSelectedValue,
  filterGames,
} from '../../redux/gameCatalog/action';
import './filterColumn.styles.scss';

const FilterColumn = ({
  groupValue,
  levelValue,
  groupSelectedValue,
  levelSelectedValue,
  FormOnSubmit,
}) => (
  <div className='filter-column'>
    <div className='filter-column-header'>
      <h3>Filter by</h3>
    </div>
    <form
      action=''
      className='filter-by'
      onSubmit={(e) => {
        e.preventDefault();
        FormOnSubmit();
      }}
    >
      <label htmlFor='groups' className='label'>
        Groups
      </label>
      <select
        id='groups'
        value={groupValue}
        onChange={(e) => groupSelectedValue(e.target.value)}
        name='groups'
        className='select'
      >
        <option value=''>Select Group</option>
        <option value='Academic'>Academic</option>
        <option value='Financial Literacy'>Financial Literacy</option>
      </select>

      <label htmlFor='levels' className='label'>
        Levels
      </label>
      <select
        id='levels'
        value={levelValue}
        onChange={(e) => levelSelectedValue(e.target.value)}
        name='levels'
        className='select'
      >
        <option value=''>Select Level</option>
        <option value='Key Stage 1'>Key Stage 1</option>
        <option value='Financial Literacy'>Financial Literacy</option>
        <option value='Key Stage 2'>Key Stage 2</option>
      </select>
      <button type='submit' className='filter-by-btn'>
        Filter
      </button>
    </form>
  </div>
);

const mapStateToProps = (state) => ({
  groupValue: state.gameCatalogData.groupSelectedValue,
  levelValue: state.gameCatalogData.levelSelectedValue,
});

const dispatchStateToProps = (dispatch) => ({
  groupSelectedValue: (value) => dispatch(setGroupSelectedValue(value)),
  levelSelectedValue: (value) => dispatch(setLevelSelectedValue(value)),
  FormOnSubmit: () => dispatch(filterGames())
});

export default connect(mapStateToProps, dispatchStateToProps)(FilterColumn);
