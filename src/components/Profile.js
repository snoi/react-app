import React, {Component} from 'react'
import Navbar from './Navbar'

class Profile extends Component 
{
    state = {
        profile: [
            { value: 'John Wick', key: 'Name' },
            { value: 'john@example.com', key: 'Email' },
            { value: '081xxxcxxxxx', key: 'Phone' },
            { value: 'Jakarta', key: 'City' },
            { value: 'Indonesia', key: 'Country' }
        ]
    }
    
    // videos.map((video, index) => {
    render() {
        return (
            // <div>
            <div className="ui container" style={{marginTop: 30}}>
                <div style={{marginTop: 50, paddingTop: 20}}>
                <Navbar profile='active'/>
                </div>
                <div className='ui grid'>

                {/* <div className='ui row' style={{backgroundColor: '#fff'}}>
                    <div className='sixteen wide column'>
                    <Navbar />
                    </div>
                </div> */}

                {/* </div> */}
                <div className="ui row" style={{padding: 20}}>
                    <div className="sixteen wide column">
                        <h1>My Profile</h1>
                    </div>
                </div>
                {this.state.profile.map((p, index) => {
                    return (
                        <div key={index} className="ui row" style={{paddingTop: 10}}>
                            <div className="four wide column" style={{textAlign: 'right'}}>
                                { p.key }
                            </div>
                            <div className="twelve wide column">
                                { p.value }
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
            // </div>
        )
    }
}

export default Profile