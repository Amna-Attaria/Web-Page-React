import React from 'react'
import './FirstSection.css'
function FirstSection(props) {
  return (
   <>
<div className='first'>
<h1 className='d-flex justify-content-center two mt-5 text-center'>{props.title}</h1>
<p className='d-flex justify-content-center text-center mt-5'>{props.desc}</p>
</div>

<div className="container">
   <img src="/section.png"/>
</div>
<p className='text-center'>
{props.subdesc}
</p>
   </>
  )
}

export default FirstSection
