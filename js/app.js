
const btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    //getPerson(getData);
    //ajax.then(data=>showData(data)).catch(error=>console.log(error));
    //fetch('https://randomuser.me/api/').then(data=>data.json()).then(data=>showData(data)).catch(error=>console.log(error));
    getData().then(data=>showData(data)).catch(error=>console.log(error));
})

/*function getPerson(cb){
    const url =`https://randomuser.me/api/`;
    const ajax =  new XMLHttpRequest();
    ajax.open('GET', url, true);

    ajax.onload=function(){
        if(this.status===200){
            cb(this.responseText, showData);
        }else{
            console.log(this.statusText);
        }
    }
    ajax.onerror=function(){
        console.log('There is an error');
    }
    ajax.send();
}

function getData(response, cb){
    const data = JSON.parse(response);
    const {name:{first}, name:{last}, picture:{large}, location:{street},phone, email} = data.results[0];
    cb(first, last, large, street, phone, email);
}

function showData(first, last, large, street, phone, email){
    //console.log(data);
    document.getElementById('first').textContent=first;
    document.getElementById('last').textContent=last;
    document.getElementById('street').textContent=street;
    document.getElementById('phone').textContent=phone;
    document.getElementById('email').textContent=email;
    document.getElementById('photo').src=large ;
}

*/
/*const ajax=new Promise((resolve, reject)=>{
    const xhr = new XMLHttpRequest();
    const url = `https://randomuser.me/api/`;
    xhr.open('GET', url, true);
    xhr.onload=()=>{
        //console.log(xhr.responseText);
        if(xhr.status===200){
            resolve(xhr.responseText);
            //console.log(xhr.responseText);
        }else{
            reject(Error('there is an error occured'));
        }
    };
    xhr.onerror=()=>{
        reject(Error(`there is an error`));
    };
    xhr.send();
}) */

function showData(data){

    //const response = JSON.parse(data);
    const {name:{first}, name:{last}, picture:{large}, location:{street},phone, email} = data.results[0];
    console.log(data);
    document.getElementById('first').textContent=first;
    document.getElementById('last').textContent=last;
    document.getElementById('street').textContent=street;
    document.getElementById('phone').textContent=phone;
    document.getElementById('email').textContent=email;
    document.getElementById('photo').src=large ;
}

const getData = async function(){
    const url='https://randomuser.me/api/';
    const result = await fetch(url);
    const response=await result.json();
    return response;
};