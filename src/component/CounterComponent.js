import React, { Component } from 'react';
import { Button, Box } from '@material-ui/core';
import { inject, observer } from 'mobx-react';
import CounterStore from '../store/CounterStore';

@inject('value') // 여러 스토어중, 카운터 스토어를 주입함
@observer // 아래의 컴포넌트가 state를 주시하고있다
class CounterComponent extends Component {
  render() {
    const { value } = this.props;

    return (
      <div>
        <Button
          onClick={() => value.decrement()}
          variant='contained'
          color='primary'
          size='large'
        >
          {' '}
          -{' '}
        </Button>

        <Box component='span' m={5}>
          {value.count}
        </Box>

        <Button
          onClick={() => value.increament()}
          variant='contained'
          color='primary'
          size='large'
        >
          {' '}
          +{' '}
        </Button>
      </div>
    );
  }
}

export default CounterComponent;
