import { Header } from './components/header/header'

import './styles/home.scss'

export default function Home() {
  return (
    <main className='container'>
      <Header />
      <div className="experience">
        <h3>experience</h3>
        <p>text</p>
        <div className="experience-time"></div>
        <div className="experience-time"></div>
        <div className="experience-time"></div>
      </div>
      <div className="infos">
        <h3>Languages</h3>
        <div className="languages-info"></div>
        <span>EN - Intermediary</span>
        <span>PT-BR - Nativo</span>
      </div>
      <h3>Education</h3>
      <div className="education-info">
        <span>(icon)</span>
        <span>texto</span>
      </div>
      <div className="buttons">
        <div className="social"></div>
        <button>Contact me</button>
      </div>


    </main>
  )
}
