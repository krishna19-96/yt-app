import React, {useState, useEffect} from 'react';
import youtube from '../apis/youtube';


const useVideos = (DefaultSearchKeyword) =>{
    const [video, setVideo] = useState([]);

    useEffect(()=>{
        Search(DefaultSearchKeyword);
    },[DefaultSearchKeyword])

    const Search = async (term) => {
        const response = await youtube.get('/search', {
             params:{
                 q:term
             }
         });
            
            setVideo(response.data.items)
            
         
        
         
     };

     return [video, Search];

}

export default useVideos;
