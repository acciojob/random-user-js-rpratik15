

//your code here

// const getApiData=async()=>
// {
   
// var user=await fetch("https://randomuser.me/api").json()
// console.log("First "+user)
   
//      sessionStorage.setItem("userData",JSON.stringify(user.results[0]))
    
// }

async function getUsers() {
   
    let res = await  fetch('https://randomuser.me/api')
    //console.log(res)
    let data = await res.json()
    await sessionStorage.setItem("userData",JSON.stringify(data))
    displayData()
  }
  getUsers();



 const displayData=async()=>
{
    
   
    user=await JSON.parse(sessionStorage.getItem("userData"))
    data=await user.results[0]
    document.getElementById('fullname').innerHTML=`${data.name.title} ${data.name.first} ${data.name.last}`;
    document.getElementById('userimg').src=data.picture.large;
    document.getElementById("user-info").innerText=null
}

const userInfo=async(id)=>
{
    user=await JSON.parse(sessionStorage.getItem("userData"))
    data=await user.results[0]
    var info=""
    
    switch(id)
    {
        case '1':
            
            info= data.dob.age
            break
            case '2':
                info=data.email
                break
                case '3':
                    info=data.phone
                    break
                    default:
                    info=""
    }
    document.getElementById("user-info").innerText=info
    
}

const newbutton = document.getElementById("getUser");
console.log(newbutton)
element.addEventListener("click", getNewUser);

function getNewUser()
{
    getUsers();
}
// const getNewUser=()=>{
    
//     getUsers()
// }


// setTimeout(() => {
//     displayData()
// }, 1000);

// axios.get('https://randomuser.me/api/')
// .then((res)=>{
//     document.getElementById('fullname').innerHTML= res.data
//     })
// .catch(err=>console.log(err))

// console.log(result)