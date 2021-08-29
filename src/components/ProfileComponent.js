

const ProfileComponent=(props)=>{
    return(
        // border-radius: 50%;
    
        <img style= {{ borderRadius: '50%'}} src={props.profile}></img>
    )
}

export default ProfileComponent