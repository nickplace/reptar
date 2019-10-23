


import React from 'react';
import Typeout from './Typeout'
import Typewriter from 'typewriter-effect';
import './Console.css';

const CONSOLE_TYPE_SPEED = 60;
const CONSOLE_PAUSE_LENGTH = 2500;


class Console extends React.Component {
    state = {
        commandQueue: [],
        currentCommand: null,
        currentDOM: []
    }

    constructor(props) {
        super(props);
        this.state.commandQueue = this.props.commands;
    }


    componentDidMount() {
        this.nextCommand()
        setTimeout(function () {
            window.scrollTo(0, 1);
        }, 1000);

    }

    promptFinished() {
        if (!this.state.currentCommand.input) {
            if (this.state.commandQueue.length > 0)
                setTimeout(() => this.nextCommand(), CONSOLE_PAUSE_LENGTH, this)
        }
    }

    handleOptionSelected(e) {
        this.nextCommand()
    }

    DOMFromCommand(command) {
        var dom = [
            <Typeout className="typeout" typewriterStrings={[
                command.prompt
            ]} config={{
                delayBetweenLetters: CONSOLE_TYPE_SPEED,
                delayBetweenWords: CONSOLE_TYPE_SPEED * 10,
                blinkCaret: true,
                caretType: 'vertical',
                callback: (e) => this.promptFinished(e)
            }}
            />
        ]

        if (command.input && command.input.type == "radio") {
            var buttons = command.input.options.map((option) => <a class="option" onClick={e => this.handleOptionSelected(e)}>{option}</a>)
            dom.push(
                <div className="multiple-choice">
                    {buttons}
                </div>
            )
        }


        if (command.input && command.input.type == "number") {
            var input = [<input type="number" suffix=" mpg"></input>]

            dom.push(
                <div className="input-group">
                    {input}
                </div>
            )
        }

        if (command.cta) {

            dom.push(
                <a className="command-cta">
                    {command.cta}
                </a>
            )
        }


        return <div class="command">{dom}</div>

    }


    nextCommand() {

        var currentCommand = this.state.commandQueue[0]
        var currentDom = this.DOMFromCommand(currentCommand)

        this.setState({
            currentCommand: currentCommand,
            commandQueue: this.state.commandQueue.slice(1, this.state.commandQueue.length),
            currentDOM: [
                ...this.state.currentDOM,
                currentDom
            ]
        })
    }


    handleOptionSelected(e) {
        this.nextCommand();
    }

    render() {
        return (
            <div className="console">
                {this.state.currentDOM}
            </div>
        );
    }
}

export default Console;
