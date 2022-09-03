import '../button.css'

function SubmitButton({name}) {

  return (
   <input className='button' type="submit" value={name} />
  )
}

export default SubmitButton