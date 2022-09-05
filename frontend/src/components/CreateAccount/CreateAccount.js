import './createaccount.css'
import CreateAccountForm  from '../Forms/CreateAccount/CreateAccountForm'
import  Banner  from '../Banner/Banner'

function CreateAccount() {
  return (
    <div className="create-account">
      <Banner
        pageTitle={"CREATE ACCOUNT"}
        imgUrl={"BannerImages/Banner1.jpg"}
      />
      <div className='ca-page'>
      <CreateAccountForm />
      </div>
    </div>
  );
}

export default CreateAccount