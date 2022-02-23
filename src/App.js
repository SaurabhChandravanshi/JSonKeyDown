import './App.css';
import React, { useEffect, useState } from 'react';
import moment from 'moment'

function App() {

  const [theme, setTheme] = useState('light-theme')
  const [themeTitle, setThemeTitle] = useState('Dark Theme')
  const [clock, setClock] = useState(moment().format('hh:mm:ss A'))

  const [eventData, setEventData] = useState([])

  setInterval(()=> {
    setClock(moment().format('hh:mm:ss A'))
  }, 1000)

  useEffect(() => {
    document.getElementById('html').className = theme;
    theme === 'light-theme' ? setThemeTitle('Dark Theme') : setThemeTitle('Light Theme')
  }, [theme])

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      setEventData([
        {name:'event.key', value:event.key},
        {name:'event.location', value:event.location},
        {name:'event.code', value:event.code},
        {name:'event.which (deprecated)', value:event.which}
      ])
    })
  }, [])


  function switchTheme() {
    theme === 'light-theme' ? setTheme('dark-theme') : setTheme('light-theme')
  }

  return (
    <div>
      <div className='Header'>
        <button className='Button' onClick={switchTheme}>{themeTitle}</button>
        <button className='Button'>{clock}</button>
      </div>
      <div className='container-text-info'>
      <p className='text-info' style={{display:eventData.length > 0 ? 'none' : 'block'}}>Press any key to get the JavaScript keycodes</p>
      </div>
      <div className='App'>
        <p>{eventData.length >= 4 ? eventData[3].value : ''}</p> 
        <div className='cards flex'>
          {
            eventData.map((event) => {
              return (
                <div className='card'>
                  <div className='card-header'>{event.name}</div>
                  <div className='card-body'>
                  <div className='card-desc'>{event.value}</div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <span className='footer'>
        Made with React - fork or suggest edit on <a href='https://github.com/SaurabhChandravanshi/JSonKeyDown'>Github</a>.
      </span>
    </div>
  );
}

export default App;
