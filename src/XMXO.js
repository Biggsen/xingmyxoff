import React, { Component } from 'react';
import { getRandomVerb, getRandomNoun } from './api'

export default class XMXO extends Component {
    constructor(props){
        super(props)

        this.state = {
            verb: '',
            noun: '',
            verbIsReady: false,
            nounIsReady: false,
            static: false,
        }
    }

    componentDidMount() {
        this.state.static === true
            ? this.setState(() => ({
                noun: 'test',
                nounIsReady: true
            }))
            : getRandomNoun()
                .then((randomNoun) => {
                    this.setState(() => ({
                        noun: `${randomNoun.data.word[0].toUpperCase()}${randomNoun.data.word.slice(1)}`,
                        nounIsReady: true
                    }))
                }).catch(({ message }) => {
                    this.setState({
                        error: message,
                        nounIsReady: true
                    })
                })

        this.state.static === true
            ? this.setState(() => ({
                verb: 'test',
                verbIsReady: true
            }))
            : getRandomVerb()
                .then((randomVerb) => {
                    this.setState(() => ({
                        verb: `${randomVerb.data.word[0].toUpperCase()}${randomVerb.data.word.slice(1)}`,
                        verbIsReady: true
                    }))
                }).catch(({ message }) => {
                    this.setState({
                        error: message,
                        verbIsReady: true
                    })
                })

    }

    render() {
        return (
            <div className='text-4xl sm:text-5xl md:text-6xl font-bold'>
                {this.state.verbIsReady && this.state.nounIsReady
                    ? `${this.state.verb} My ${this.state.noun} Off`
                    : `...`
                }
            </div>
        )
    }
}
