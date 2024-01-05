import { Modal } from "components/Modal/Modal";
import { Component } from "react";

export class ImageGalleryItem extends Component {

    state = {
        isModal: false
    }

    toggleModal = () => {
        console.log("Toggle");
        this.setState((prevState)=>({isModal: !prevState.isModal}))
    }

    render = () => (
        <>
            <li className="ImageGalleryItem">
                <img src={this.props.image.webformatURL} 
                alt={this.props.image.tags} 
                className="ImageGalleryItem-image"
                onClick={()=>this.toggleModal()}/>
            </li> 
            {this.state.isModal && <Modal 
                imageURL={this.props.image.largeImageURL} 
                tags={this.props.image.tags}
                onToggle={this.toggleModal}/>}  
        </> 
    )
}