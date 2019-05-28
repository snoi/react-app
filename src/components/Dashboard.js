import React, {Component} from 'react';
// import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import SearchBar from './Searchbar'
import Youtube from '../containers/Youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import '../App.css';
import gambar from '../youtube.png'
import Navbar from './Navbar'
import user from '../user2.jpg'
import {Link} from 'react-router-dom'
      

class Dashboard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      videos: [],
      selectedVideo: null,
      findText: 'news indonesia',
      token: null,
      loadingText: 'Load More'
    }
  }
  

  handleSubmit = async (term) => {
    this.setState({findText: term})
    const response = await Youtube.get('/search', {
      params: {
        q: term
      }
    })

    console.log('submit')
    console.log(response)
    this.setState({
      videos: response.data.items
    })
  }

  handleLoadMore = async (term, token) => {
    this.setState({
      findText: term,
      loadingText: 'Loading.......'
    })
    const response = await Youtube.get('/search', {
      params: {
        q: term,
        pageToken: token
      }
    })

    this.setState({loadingText: 'Load More'})
    const videoExisting = this.state.videos
    const videoNew = videoExisting.concat(response.data.items)

    // console.log(videoNew)
    this.setState({
      videos: videoNew, //response.data.items,
      token: response.data.nextPageToken
    })
  }

  handleVideoSelect = (video) => {
    this.setState({selectedVideo: video})
  }

  handleLogout = event => {
    event.preventDefault();
    localStorage.removeItem('isLogin')
    this.props.history.push('/')
  }

  async componentDidMount() {
    
    console.log(localStorage.getItem('isLogin'))
    if (!localStorage.getItem('isLogin')) {
      this.props.history.push('/')
    }
    
    const response = await Youtube.get('/search', {
      params: {
        q: this.state.findText
      }
    })

    console.log(response)

    this.setState({
      videos: response.data.items,
      token: response.data.nextPageToken
    })
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: 50, backgroundColor: '#fff'}}>  
        {/* <Navbar style={{marginBottom: 20}} />       */}
        <div className='ui grid'>
          
          <div className='ui row' style={{backgroundColor: '#fff'}}>
            <div className='sixteen wide column'>
            <Navbar home='active' />
            </div>
          </div>

          <div className='ui row' style={{backgroundColor: '#fff'}}>
            <div className='sixteen wide column'>
            <div style={{padding: 20, marginTop: 20}}>
              <h1 style={{fontSize: 35}}>Bukan <img src={gambar} alt='Bukan Youtube' 
              style={{width: 200, marginLeft: -30, marginTop: -10}}></img></h1>
            </div>
            </div>
          </div>

          <div className='ui row' style={{backgroundColor: '#fff'}}>
            <div className='eleven wide column'>
              
              <SearchBar handleFormSubmit={this.handleSubmit} />
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className='five wide column'>
              <VideoList handleVideoSelect={this.handleVideoSelect} 
                videos={this.state.videos} />
              
              <div style={{marginBottom: 70, textAlign: 'center', marginTop: 35}}>
                <button style={{padding: 10, textAlign: 'center', width: 300}}
                className='btn-primary' 
                onClick={() => {
                  this.handleLoadMore(this.state.findText, this.state.token)
                }                  
                }>
                  {this.state.loadingText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
