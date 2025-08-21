function Footer() {
  return (
    <footer className="pb-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-center font-medium">
      <div>
        <h3 className="text-3xl mb-2 mt-4 pt-4">Contact Us</h3>
        <p>Phone: 1-760-343-8622</p>
        <p>Email: dionicio.madrid@advancepestsolutions.net</p>
        <p>Address: Indio, CA</p>
      </div>
      <div>
        <h3 className="text-3xl mb-2 mt-4">Hours</h3>
        <p>Monday - Friday: 8AM - 5PM</p>
        <p> Saturday: 8AM - 2PM</p>
        <p>Sunday: Closed</p>
      </div>
      <div>
        <h3 className="text-3xl mb-2 mt-4">Keep In Touch</h3>
        <div className="flex justify-around w-full">
          <a
            href="https://www.facebook.com/profile.php?id=61568345716075#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./facebook.svg" alt="Facebook" width={40} />
          </a>
          <a
            href="https://www.instagram.com/advancepestsolutions/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./instagram.svg" alt="Instagram" width={40} />
          </a>
          {/* <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src="./google.svg" alt="Google" width={40} />
          </a> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
