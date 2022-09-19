import {get} from './http'

function getInfo(){
    let url = '/s?wd=\'关键字\'&cl=3';
    console.log("========");
    return get(url,'');
};

export {getInfo};