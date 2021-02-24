//Reusable custom hook to handle errors during the API fetch.

//Imports
import {useState, useEffect} from 'react';
import response from './blogDatabase.json'
//Error handling and API/Database fetch.
const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoadingBlogs, setIsLoadingBlogs] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        // fetch(url)  //Enter your API/DB url here.
        //     .then(response => {
        //         if (!response.ok){            //If response is NOT ok then it throws an error message.
        //             throw Error('Could not fetch the data. Error!')        //Customize your error message here.
        //         }
        //     return response.json()
        // })
        // .then ((data) => {
        //     setData(data)
        //     setIsLoadingBlogs(false)       //Stops the loading message.
        //     setError(null)                 //No error received obviously so it will be null. 
        // })
        // .catch((loadingError) => {         //.catch function for catching errors.
        //     setError(loadingError.message) //Basically assigns the error message to to set error so it can be rendered onto the website.
        //     setIsLoadingBlogs(false)       //Will not display the loading message since an error has occured. 
        // })


        setIsLoadingBlogs(true)
        setTimeout(() => {
            
            setIsLoadingBlogs(false)

            let request = url.split("/")
            request = request.slice(3)
            let newResponse = undefined
            request.forEach(element => {
                if(newResponse){
                    newResponse = newResponse[element]
                    return
                }
                newResponse = response[element]
            });
            console.log(newResponse)
            setData(newResponse)
        }, 2000);


    }, [url]) //<------ Dependency arrary 

    return {data, isLoadingBlogs, error}
}

export default useFetch;