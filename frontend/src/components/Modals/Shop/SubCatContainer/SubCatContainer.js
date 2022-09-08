import React from 'react'

function SubCatContainer({subs}) {
  return (

      <div className="sub-cat-container">
                  {subs.forEach(sub => {
                    {console.log('what is the sub?!:',sub)}
                   return <span>WHAT THE FUCK</span>
                  })}
    </div>
  )
}

export default SubCatContainer