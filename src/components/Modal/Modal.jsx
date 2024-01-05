import { Component } from "react";

export class Modal extends Component{

    componentDidMount() {
        window.addEventListener('keydown', this.onKeyDown);
    }
      componentWillUnmount() {
        window.removeEventListener('keydown', this.onKeyDown);
    }

    onKeyDown = (e) => {
        if (e.code === "Escape")
            this.props.onToggle();
    }
    onClick = () => {
        this.props.onToggle();
    }

    render = () => (
        <div className="Overlay" onClick={this.onClick}>
            <div className="Modal">
                <img src={this.props.imageURL} alt={this.props.tags} />
            </div>
        </div>
    )
}