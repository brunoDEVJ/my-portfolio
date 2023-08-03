import Image from "next/image"
import { SectionTitle } from "../sectionTitle/section-title"

import "./experience.scss"
import { Skill } from "../skill/skill"

export function Experience() {
  return (
    <div className="experience">
      <SectionTitle text="Experience" />
      <p>4 years working as a Software Suport, in companys such as VLT, APPcontrol and VDG.</p>
      <div className="experience-time">
        <Skill image="./react.png" measure={2} years="TODO:" />
        <Skill image="./ts.png" measure={3} years="TODO:" />
        <Skill image="./js.png" measure={3} years="TODO:" />
      </div>
    </div>
  )
}