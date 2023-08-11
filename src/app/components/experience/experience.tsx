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
        <Skill image="./react.png" measure={2} years="1 Years" />
        <Skill image="./ts.png" measure={1} years="4 Months" />
        <Skill image="./js.png" measure={3} years="2 Years:" />
      </div>
    </div>
  )
}