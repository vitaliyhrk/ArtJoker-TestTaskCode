import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';

import Item from '../Item';

const Form = ({
  list,
  addItem,
  delItem,
  changeParameter,
  changeValue,
}) => {
  const items = list.map(item => (
    <Item
      delItem={delItem}
      id={item.id}
      key={item.id}
      changeParameter={changeParameter}
      parameter={item.parameter}
      changeValue={changeValue}
      value={item.value}
    />
  ));

  return (
    <form>
      {items}
      <FlatButton
        label="Добавить"
        primary={true}
        onClick={addItem}
        style={{ marginLeft: '-15px' }}
      />
    </form>
  );
};

Form.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  addItem: PropTypes.func.isRequired,
  delItem: PropTypes.func.isRequired,
  changeParameter: PropTypes.func.isRequired,
  changeValue: PropTypes.func.isRequired,
};

Form.defaultProps = {
  list: [],
};

export default Form;
