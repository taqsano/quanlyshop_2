import axios from 'axios'
import * as Config from '../const/Config'


export default function CallAPI(endpoint, method='GET',body){
    return(
        axios({
            method: method,
            url: `${Config.API_URL}/${endpoint}`,
            data:body
        }).catch(err => {
            console.log(err);
        })
    )
};