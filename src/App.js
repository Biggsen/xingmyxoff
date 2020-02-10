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
          <h1 className='block text-xl md:text-2xl text-center mb-16 sm:mb-16 md:mb-32'>
            <span className='block'>When I'm tired of</span>
            <span className='block text-2xl sm:text-2xl md:text-3xl font-bold'><abbr title='Laughing My Ass Off'>LMAO</abbr></span>
            <span className='block mb-8 sm:mb-8 md:mb-16'>I will</span>
            <XMXO />
          </h1>
          <button className='border rounded border-gray-700 hover:text-white hover:border-transparent hover:bg-black px-5 py-2' onClick={this.onClickRefresh}>Again</button>
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
