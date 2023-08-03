import './information.scss'
import { SectionTitle } from './../sectionTitle/section-title';

export function Info() {
  return (
    <div className="information">
      <SectionTitle text='Languages' />
      <div className="languages-info"></div>
      <span>(🇺🇸) EN - Intermediary</span>
      <span>(🇧🇷) PT-BR - Nativo</span>
      <SectionTitle text='Education' />
      <div className="education-info">
        <span>(icon)</span>
        <span>TODO:</span>
      </div>
    </div>
  )
}