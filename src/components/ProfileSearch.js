import { render } from "react-dom"
import {Form,Button} from "react-bootstrap"

const ProfileSerach=(props)=>{
    return(
        <div className="container">
            <form onSubmit={props.hanleOnSubmit}>
                <label className="text"> Enter Github User Id</label>
                <input value={props.ngitUser} onChange={props.handleOnChange} name="gitUser" type="text"></input>
                <input type="submit"></input>
                {/* <label>  {props.ngitUser}</label> */}
            </form>
            {/* <Form>
                
                <Form.Label>Github User</Form.Label>
                <Form.Control type="text" placeholder="ENter Github User Name" />
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                
                </Form> */}
        </div>
    );
}


export default ProfileSerach