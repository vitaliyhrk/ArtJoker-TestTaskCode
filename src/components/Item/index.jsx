import React from 'react';
import v4 from 'uuid/v4';
import PropTypes from 'prop-types';

import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import Delete from 'material-ui/svg-icons/content/clear';
import { red500, pink50 } from 'material-ui/styles/colors';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import FloatingActionButton from 'material-ui/FloatingActionButton';

class Item extends React.Component {
  state = {
    parameter: '',
    value: '',
    id: '',
  }

  componentDidMount() {
    this.setState({
      parameter: this.props.parameter,
      value: this.props.value,
      id: this.props.id,
    })
  }

  handleChange = (event, index, parameter) => {
    this.setState({ parameter });
    this.props.changeParameter(this.props.id, parameter);
  };

  handleInputChange = (event, value) => {
    this.setState({ value })
    this.props.changeValue(this.props.id, value);
  };

  handleDelClick = () => {
    this.props.delItem(this.props.id)
  };

  render() {
    return (
      <Toolbar style={{ backgroundColor: 'white' }}>
        <ToolbarGroup firstChild={true}>

          <SelectField
            value={this.state.parameter}
            onChange={this.handleChange}
            style={{
              width: 134,
              marginRight: 20,
            }}
            iconStyle={{
              fill: 'black',
              right: '-15px'
            }}
            underlineStyle={{ borderWidth: '2px' }}
          >
            <MenuItem value={'Single'} primaryText="Single" />
            <MenuItem value={'Twin'} primaryText="Twin" />
            <MenuItem value={'Triple'} primaryText="Triple" />
            <MenuItem value={'Quadro'} primaryText="Quadro" />
          </SelectField>

          <TextField
            style={{
              width: 40,
              display: 'inline-block',
              marginRight: 20,
            }}
            type='number'
            underlineStyle={{ borderWidth: '2px' }}
            id={v4()}
            onChange={this.handleInputChange}
            value={this.state.value}
          />

          <FloatingActionButton
            mini={true}
            backgroundColor={pink50}
            onClick={this.handleDelClick}
            style={{ boxShadow: 'none' }}
          >
            <Delete style={{ fill: red500 }} />
          </FloatingActionButton>

        </ToolbarGroup>
      </Toolbar>
    )
  }
}

Item.propTypes = {
  delItem: PropTypes.func.isRequired,
  changeParameter: PropTypes.func.isRequired,
  changeValue: PropTypes.func.isRequired,
  parameter: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Item;
