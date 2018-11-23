import React from 'react';
import { Input , Button} from 'reactstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addListAction} from  '../actions/addList-action.js';
class AddList extends React.Component{ 
	 constructor(props) {
			super(props);
			this.state = this.initialState;
	   }
	   get initialState() {
			return {
				currentItem : '',
			};
		}
	   updateInput(e){
			e.preventDefault();
			this.setState({
				currentItem : e.target.value
			})
	   }
	render(){
		return(
			<div>
				<Input placeholder="itemname"  value = {this.state.currentItem}  onChange ={this.updateInput.bind(this)} />
				<Button color="success" onClick={() => {this.props.addItem(this.state.currentItem); this.setState(this.initialState);}}>ADD</Button>
			</div>
		)
	}


}
const mapStateToProps  =  (state) => ({
	itemLists : state.FullItems.lists
});
const mapDispatchToProps = (dispatch) => bindActionCreators({
	addItem : addListAction
},dispatch);


export default connect( mapStateToProps ,mapDispatchToProps )(AddList);