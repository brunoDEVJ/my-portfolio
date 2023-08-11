import Image from 'next/image'
import { Experience } from './components/experience/experience'
import { Header } from './components/header/header'
import { Info } from './components/information/information'

import "./styles/home.scss"
import { EmailIcon } from './components/icons/email-icon'
import { SocialBtns } from './components/socialBtns/social-btns'
import { SectionTitle } from './components/sectionTitle/section-title'
import { MyProgress } from './components/myprogress/myprogress';

export default function Home() {
  return (
    <main className="container">
      <Header />
      <Experience />
      <Info />
      <div className="buttons">
        <SocialBtns />
        <a className="btn-primary" href="mailto:bruno.devj@gmail.com">
          contact me
          <EmailIcon />
        </a>
      </div>

      <SectionTitle text="My progress" /><br />
      <div className="cnt">
        <MyProgress href='#' img='./js.png' />
        <MyProgress href='#' img='./fundo.png' />
        <MyProgress href='#' img='./react.png' />
        <MyProgress href='#' img='./ts.png' />
        <MyProgress href='#' img='./next.svg' />
      </div>
    </main>
  )
}