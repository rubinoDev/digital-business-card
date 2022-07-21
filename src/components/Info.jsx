export function Info(){
  return(
    <>
      <img className="info__img" src="../assets/LauraSmith.png" alt="Laura Smith"/>
      <h2 className="info__h2">Laura Smith</h2>
      <p className="info__p">Frontend Developer</p>
      <a className="info__website-link" href="#">laurasmith.website</a>

      <div className="info__buttons-container">

        <a className="info__email-link" href="#">
         <div className="info__email-container">
            <img src="../assets/Mail.svg"/>
            Email
          </div>
        </a>  

        <a className="info__linkedin-link" href="#">
          <div className="info__linkedin-container">
            <img src="../assets/linkedin.svg"/>
           LinkedIn
          </div>
        </a>

      </div>
    </>
  )
}