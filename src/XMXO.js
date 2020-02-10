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
            apiLimit: false,
            static: false,
            error: false
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
                    randomNoun.data.message
                        ?   this.setState(() => ({
                                apiLimit: true,
                                nounIsReady: false
                            }))
                        :   this.setState(() => ({
                                noun: `${randomNoun.data.word[0].toUpperCase()}${randomNoun.data.word.slice(1)}`,
                                nounIsReady: true
                            }))
                }).catch(({ message }) => {
                    this.setState({
                        error: true
                    })
                })

        this.state.static === true
            ? this.setState(() => ({
                verb: 'test',
                verbIsReady: true
            }))
            : getRandomVerb()
                .then((randomVerb) => {
                    randomVerb.data.message
                        ?   this.setState(() => ({
                                apiLimit: true,
                                verbIsReady: false
                            }))
                        :   this.setState(() => ({
                                verb: `${randomVerb.data.word[0].toUpperCase()}${randomVerb.data.word.slice(1)}`,
                                verbIsReady: true
                            }))
                }).catch(({ message }) => {
                    this.setState({
                        error: true
                    })
                })

    }

    render() {
        return (
            <h1 className='block text-xl md:text-2xl text-center mb-16 sm:mb-16 md:mb-32'>
                {this.state.apiLimit || this.state.error
                    ? `Pipe's clogged! Try again in a few seconds.`
                    :   <div>
                            <span className='block'>When I'm tired of</span>
                            <span className='block text-2xl sm:text-2xl md:text-3xl font-bold'><abbr title='Laughing My Ass Off'>LMAO</abbr></span>
                            <span className='block mb-8 sm:mb-8 md:mb-16'>I will</span>
                            <div className='text-4xl sm:text-5xl md:text-6xl font-bold'>
                                {this.state.verbIsReady && this.state.nounIsReady
                                    ? `${this.state.verb} My ${this.state.noun} Off`
                                    : `...`
                                }
                            </div>
                        </div>
                }
            </h1>
        )
    }
}
