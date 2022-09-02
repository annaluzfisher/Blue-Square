import './submitbutton.css'

function SubmitButton({name}) {

  return (
   <input type="submit" value={name} />
  )
}

export default SubmitButton