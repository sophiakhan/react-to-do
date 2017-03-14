import React from 'react';
//import Image from './Image'; 
import Todos from './Todos';

class App extends React.Component {
    render() {
        
        // let Images = []
        // for (let i=0; i < 50; i++) {
        //     Images.push(<Image number={i} />); 
        // }

        return <div className="container">
                    <Todos />
             </div>
    }
}

export default App;