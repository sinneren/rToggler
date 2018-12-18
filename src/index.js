import React from 'react';

import './index.css';

export default class RToggler extends React.Component {
    constructor(props) {
        super(props);
        this.changeHandler = this.changeHandler.bind(this);
        this.state = {
            checked: this.props.checked ? this.props.checked : false,
            disabled: this.props.disabled ? this.props.disabled : false,
            labelSuccess: this.props.labelSuccess ? this.props.labelSuccess : null,
            labelError: this.props.labelError ? this.props.labelError : null,
        }
    }
    changeHandler(event) {
        this.setState({
            checked: event.currentTarget.checked,
        });
    }
    renderLabel() {
        if (this.state.labelError && this.state.labelSuccess) {
            return <div className="jtoggler-label">{this.state.checked ? this.state.labelSuccess : this.state.labelError}</div>
        } else {
            return null;
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.onChange) {
            this.props.onChange(prevState, this.state);
        }
    }
    render() {
        return (
            <label className="jtoggler-wrapper">
                <input type="checkbox" className="jtoggler" disabled={this.props.disabled} checked={this.state.checked} onChange={this.changeHandler} />
                <div className="jtoggler-control">
                    <div className="jtoggler-handle"></div>
                </div>
                {this.renderLabel()}
            </label>
        );
    }
}