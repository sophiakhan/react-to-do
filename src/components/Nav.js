import React from 'react'
import { browserHistory } from 'react-router' 

class Nav extends React.Component {
    render() {
        return <div className="well">
         <button className="btn btn-default" type="button" onClick={() => browserHistory.push('/')}>View All Todos</button>
        <button className="btn btn-default" type="button" onClick={() => browserHistory.push('/completed')}>View Completed Todos</button>
        </div>
    }
}

export default Nav