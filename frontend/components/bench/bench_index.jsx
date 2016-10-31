import React from 'react';
import BenchItem from './bench_item';
import {values} from 'lodash';

export default class BenchIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.requestBenches();
  }

  benchKeys(){
    return Object.keys(this.props.benches);
  }

  render() {
    const that = this;
    if (this.benchKeys().length > 0){
      return(
        <div>
          {values(this.props.benches).map( bench => (
              <BenchItem key={bench.id} bench={bench} />
            ))
          }
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}
