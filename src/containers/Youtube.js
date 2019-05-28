import axios from 'axios'

const KEY = 'AIzaSyDzZ4pxJxuMar5VBCqafNyFDkw7SjfmQd0'
//  'AIzaSyAzvZENyjOCw5Q195rvMBZyRHaT3jLWTDw'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY
    }
})