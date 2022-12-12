//your code here
fetch("https://randomuser.me/api")
.then((res)=>{
    return res.json()
})
.then((user)=>{
    // console.log( user.results)
    displayData(user.results[0])

})
.catch((error)=>console.log(error))

function displayData(data)
{
    console.log(data.picture.large)
    document.getElementById('fullname').innerHTML=`${data.name.title} ${data.name.first} ${data.name.last}`;
    document.getElementById('userimg').src=data.picture.large;
}
// axios.get('https://randomuser.me/api/')
// .then((res)=>{
//     document.getElementById('fullname').innerHTML= res.data
//     })
// .catch(err=>console.log(err))

// console.log(result)