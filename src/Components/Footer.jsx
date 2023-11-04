import { BsFacebook, BsLinkedin, BsInstagram,BsTwitter } from 'react-icons/bs'


const Footer = () => {
  return (
    <>
    <footer className="bg-dark text-center text-light border ">
      <div className="container p-4 pb-0">
        <section className="mb-1">
          <span className="fs-3 px-2">
            <BsFacebook/>
          </span>
          <span className="fs-3 px-2">
            <BsLinkedin/>
          </span>
          <span className="fs-3 px-2">
            <BsInstagram/>
          </span>
          <span className="fs-3 px-2">
            <BsTwitter/>
          </span>
          <span className="fs-3 px-2"> 
            <BsFacebook/>
          </span>

          
        </section>
      </div>

      <div
        className="text-center p-3"
       
      >
        © {new Date().getFullYear()}
        
      </div>
    </footer>
    </>
  );
};

export default Footer;
