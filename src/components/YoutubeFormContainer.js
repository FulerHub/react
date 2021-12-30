import YoutubeForm from "./YoutubeForm";
import {actionGetInfo} from "../redux/reducers/appReducer";
import {connect} from 'react-redux';


function mapDispatchToProps(dispatch) {
    return {
        LoadInfo(id){
            dispatch(actionGetInfo(id));
        },
    };
}

export default connect(null,mapDispatchToProps)(YoutubeForm);


