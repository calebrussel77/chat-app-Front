import React from 'react';
import {connect} from 'react-redux';
import Message from "../Message/Message";

const Messages = (props) => {
    return (
                <React.Fragment>
                {
                    props.messages.map( (message,i) =>
                        <div key={i}>
                            <Message message={message} name={props.name}/>
                        </div> )
                }
                </React.Fragment>
    )
};

const mapStateToProps = (state) => {
    return {
        name: state.chat.name
    }
};
export default connect(mapStateToProps)(Messages);