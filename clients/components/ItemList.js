import React from 'react';
import { ListGroup, ListGroupItem , Button } from 'reactstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchListAction} from  '../actions/fetchList-action.js';
import {deleteListAction} from  '../actions/deleteList-action.js';


class ItemList extends React.Component{
	constructor(props) {
		super(props)
	this.props.fetchList();
		};
		
	render(){
		return(
			<div>
			<ListGroup style={{width:50 +'%'}}>
			{this.props.products.map((value , index) =>
				(<ListGroupItem key={index}>{value.name}<Button color="danger" onClick = {()=>this.props.deleteItem(value._id)}>DELETE</Button></ListGroupItem>)
			)}
			 </ListGroup>
			 </div>
		);
	}


}
const mapStateToProps = state => ({
  products: state.FullItems.items,
  loading: state.FullItems.loading,
  error: state.FullItems.error
});
const mapDispatchToProps = (dispatch) => bindActionCreators({
	fetchList : fetchListAction,
	deleteItem : deleteListAction
},dispatch);

export default connect( mapStateToProps , mapDispatchToProps)(ItemList);