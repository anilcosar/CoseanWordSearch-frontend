import React from 'react';
import ReactLoading from 'react-loading';

class Loading extends React.Component {
   render() {
      if (this.props.loading) {
         return <ReactLoading color={'rgba(0, 0, 0,0.5)'} type={'spin'} height='450px' width='450px' />
      } else {
         return <div>{this.props.children}</div>
      }
   }
}

export default Loading