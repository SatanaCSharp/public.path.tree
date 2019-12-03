import React, { Component} from "react";
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";
import { Loader} from "../../blocks";
import {treePending} from "../../../actions/treeActionCreator";

function Node({ paths }) {
    const nestedPath = (paths.children || []).map((path, index) => {
        return <Node key={index} paths={path} type="child" />
    });
    return (
        <div  style={{"marginLeft": "25px", "marginTop": "10px"}}>
            <div>{paths.name}</div>
            {nestedPath}
        </div>
    )
}

class TreeNode  extends Component {

    componentDidMount() {
        this.props.dispatch(treePending({pathId: this.props.match.params.id}))
    }
    render() {
        const {tree: {isLoading}, tree} = this.props;
        if(isLoading) return <Loader/>;
        return (
            <section className="tree-section">
                <section className="container">
                     <Node paths={tree}/>
                </section>
            </section>
        )
    }
}
const mapStateToProps = (state) =>({
    tree: state.tree
});
export default withRouter(connect(mapStateToProps)(TreeNode));
