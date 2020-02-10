import React, { Component } from 'react'
import XMXO from './XMXO'


export default class App extends Component {
  constructor(props){
        super(props)

        this.state = {
            colorHolder: '#fff'
        }
    }
  onClickRefresh() {
    window.location.reload()
  }

  changeColor () {
      const colorCode = 'rgb(' + (Math.floor(Math.random() * 156)+150) + ',' + (Math.floor(Math.random() * 156)+150) + ',' + (Math.floor(Math.random() * 156)+150) + ')'

      this.setState(() => ({
          colorHolder: colorCode
      }))

  }

  componentDidMount() {
    this.changeColor()
  }

  render() {
    return (
      <div style={{...styles.fill, background: this.state.colorHolder}}>
        <div className='flex flex-col justify-center items-center mt-16 sm:mt-16 md:mt-32 px-5'>
          <XMXO />
          <button className='border rounded border-gray-700 hover:text-white hover:border-transparent hover:bg-black px-5 py-2 mb-32' onClick={this.onClickRefresh}>Again</button>
          <footer className='text-xs'>Powered by <a href="https://developer.wordnik.com/" className='font-bold underline' target='_blank'>Wordnik API</a></footer>
        </div>
      </div>
    )

  }
}

let styles = {}

styles.fill = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
}
