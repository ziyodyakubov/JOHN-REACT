import './style.css'
import React from 'react'

const info = [
  {title: "Making a design system from scratch",data: "12 Feb 2020",field: "Design, Pattern",desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."},
  {title: "Creating pixel perfect icons in Figma",data: "12 Feb 2020",field: "Figma, Icon Design",desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."},
]

function Section_2() {
  return (
    <>
      <section id="section-2">
        <div className="container-2 section2_wrapper">
          {
          info.map((item,index)=>(
            <div className="section2_first" key={index}>
            <div className="card">
              <h2>{item.title}</h2>

              <div className="date-wrapper">
                <h3>{item.data}</h3>
                <h3>{item.field}</h3>
              </div>

              <p>{item.desc}</p>
            </div>
          </div>
          ))
        }
        </div>
      </section>
    </>
  )
}

export default Section_2
