import React from 'react';
import './Typeout.css';

class Typeout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentString: '', // Current string being displayed,
            displayCarat: true
        };

        this.loopTypewriter = this.loopTypewriter.bind(this);
        this.typewriter = this.typewriter.bind(this);
    }

    componentDidMount() {
        // Once the component has mounted, start the typewriter animation
        this.loopTypewriter(0);
    }

    loopTypewriter(index) {
        // First make sure that the given index is valid
        if (index >= this.props.typewriterStrings.length) {
            index = 0;
        }

        // Remove the old string
        this.setState({ currentString: '' });

        // start a typewriter animation for the next string in the array
        let string = this.props.typewriterStrings[index];
        this.typewriter(string, 0, index);
    }

    // types one character in the typwriter
    // keeps calling itself until the string is finished
    typewriter(string, index, wordIndex) {
        const { delayBetweenLetters, delayBetweenWords } = this.props.config;

        if (index >= string.length) {
            // Reset the typewriter with the next string
            setTimeout(() => {
                this.setState({ displayCarat: false });
                this.props.config.callback()
            }, delayBetweenLetters * 10, this)
            this.setState({ currentString: this.state.currentString + "\n" });

            return;
        }

        let character = string[index];
        let displayString = this.state.currentString += character;
        this.setState({ currentString: displayString });

        // Wait a bit in between characters
        setTimeout(this.typewriter.bind(null, string, ++index, wordIndex), delayBetweenLetters);
    }

    render() {
        const { displayCaret, caretType, caretStyle } = this.props.config;
        return (
            <div className={this.props.className}>
                {this.state.currentString}
                {(this.state.displayCarat) &&
                    <span className="vertical-caret">
                    </span>
                }
            </div>
        );
    }
}

export default Typeout;
