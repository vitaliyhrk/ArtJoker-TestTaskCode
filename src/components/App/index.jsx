import React, { Component } from 'react';
import v4 from 'uuid/v4';
// material.ui
import Dialog from 'material-ui/Dialog';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { grey200, grey300, grey900 } from 'material-ui/styles/colors';
// components
import Form from '../Form';
// style
import './index.css';
// helpers
import LocalStorage from '../../helpers/LocalStorage';

class App extends Component {
  state = {
    isModalOpen: true,
    items: [],
  };

  componentDidMount() {
    this.setState({
      items: LocalStorage.getItem('items') || [],
    })
  }

  onClose = () => this.setState({
    isModalOpen: false,
    items: [],
  });

  onSave = () => {
    LocalStorage.setItem('items', this.state.items);
    this.setState({
      isModalOpen: false,
    });
  }

  onAddItem = () => {
    const item = {
      id: v4(),
      parameter: '',
      value: '',
    }
    this.setState(prevState => (
      { items: [...prevState.items, item] }
    ));
  };

  onChangeParameter = (id, parameter) => {
    const { items } = this.state;
    const newItem = items.filter(el => el.id === id)[0];
    const idx = items.indexOf(newItem);
    newItem.parameter = parameter;
    items[idx] = newItem;
    this.setState({
      items,
    })
  }

  onChangeValue = (id, value) => {
    const { items } = this.state;
    const newItem = items.filter(el => el.id === id)[0];
    const idx = items.indexOf(newItem);
    newItem.value = value;
    items[idx] = newItem;
    this.setState({
      items,
    })
  }

  onDeleteItem = id => {
    this.setState(prevState => (
      { items: prevState.items.filter(item => item.id !== id) }
    ));
  };

  render() {
    const actions = [
      <RaisedButton
        label='Сохранить'
        primary={true}
        onClick={this.onSave}
        buttonStyle={{ borderRadius: 5 }}
        style={{
          marginRight: 10,
          boxShadow: 'none',
        }}
      />,
      <FlatButton
        label='Отмена'
        onClick={this.onClose}
        style={{ borderRadius: 5 }}
      />,
    ];

    return (
      <div className='App'>
        <Dialog
          actions={actions}
          actionsContainerStyle={{
            textAlign: 'left',
            padding: '0px 50px 30px',
          }}
          autoScrollBodyContent={true}
          open={this.state.isModalOpen}
          modal={true}
          contentStyle={{ width: '500px' }}
          bodyStyle={{ padding: '30px' }}
        >
          <AppBar
            title='Структура номеров'
            iconElementRight={
              <IconButton onClick={this.onClose}>
                <NavigationClose color={grey900} />
              </IconButton>}
            showMenuIconButton={false}
            style={{
              backgroundColor: grey200,
              borderBottom: `2px solid ${grey300}`,
              boxShadow: 'none',
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              paddingTop: 10,
              paddingBottom: 10,
            }}
            titleStyle={{ color: grey900 }}
          />
          <Form
            list={this.state.items}
            addItem={this.onAddItem}
            delItem={this.onDeleteItem}
            changeParameter={this.onChangeParameter}
            changeValue={this.onChangeValue}
          />
        </Dialog>
      </div>
    );
  }
}

export default App;
