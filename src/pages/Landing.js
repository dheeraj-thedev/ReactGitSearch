
import ProfileSerach from "../components/ProfileSearch"
import ProfileComponent from "../components/ProfileComponent"
import React,{useState} from "react"

function Landing(props){
    const [gitUserName, setGitUserName] = useState('') 
    const [gitUserData,setGitUserData]= useState({}) 
    const [gitFollowers,setGitFollowers]= useState([])

    const handleOnChange=(e)=>{
        let name =e.target.name  ;
        let value =e.target.value  ;
        setGitUserName(value);
    }


    const getFollowersGithub=(param)=>{
        fetch('https://api.github.com/users/'+param+'/followers')
          .then(response=>response.json())
          .then(json=>{
              console.log(json)
              setGitFollowers(prevState=>({
                 ...prevState,
                 ...json
             }))
          })
          .catch(error=>console.log(error))

          console.log("Logging state from api",gitFollowers)
    }

    const getDataFromGithub=(param)=>{
          fetch('https://api.github.com/users/'+param)
          .then(response=>response.json())
          .then(json=>{
              console.log(json)
             setGitUserData(prevState=>({
                 ...prevState,
                 ...json
             }))
          })
          .catch(error=>console.log(error))

          console.log("Logging state from api",gitUserData)
    }


    const hanleOnSubmit=(e)=>{
        e.preventDefault();
        getDataFromGithub(gitUserName)
        getFollowersGithub(gitUserName)
        console.log("Followers",gitFollowers)
    }

    return(
        <div>
            <ProfileSerach hanleOnSubmit={hanleOnSubmit} ngitUser={gitUserName} handleOnChange={handleOnChange} ></ProfileSerach>
            <ProfileComponent profile={gitUserData.avatar_url}></ProfileComponent>
            {/* Profile Image Viewer */}
            {/* {Follower iewr} */}
        </div>
    )
}

export default Landing