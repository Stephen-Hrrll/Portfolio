import App from './App.js'
import {createBrowserRouter} from 'react-router-dom'
import About from './routes/About'
import Contact from './routes/Contact'
import Projects from './routes/Projects'
import LRSlider from './LRSlider'


export const Router = createBrowserRouter([
  {
    path: '/portfolio',
    element: <LRSlider Route={<About />} left="/contact" right="/projects" />,
  },
  {
    path: '/contact',
    element: <LRSlider Route={<Contact />} left="/projects" right="/portfolio" />,
  },
  {
    path: '/projects',
    element: <LRSlider Route={<Projects />} left="/portfolio" right="/contact" />,
  }
])
