import React, {
    Component
} from 'react-native';

export default class FormModal extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        this.props.updateDisplayValue();
    }

    render() {
        return this.props.renderScene();
    }
}

FormModal.propTypes = {
    renderScene: React.PropTypes.func,
    updateDisplayValue: React.PropTypes.func
};