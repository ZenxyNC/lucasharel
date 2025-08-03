import { useState, useEffect } from "react"
import Beams from "./components/beams"
import emailjs from '@emailjs/browser'
import SnackbarExample from "./components/snackbar";


export default function Contact() {
  const [isMobile, setIsMobile] = useState(true);
  const [userForm, setUserForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [snackbar, setSnackbar] = useState({
    isOpened: false,
    message: 'Hello World!',
    duration: 3000,
  })

  function sendMail(e) {
    e.preventDefault();
    setSnackbar({
      isOpened: true,
      message: 'Sending...',
      duration: 2000
    })

    const templateParams = {
      name: userForm.name,
      contact: userForm.email,
      message: userForm.message
    }
    try {
      if (userForm.name.trim() === '' || userForm.email.trim() === '' || userForm.message.trim() === '') {
        throw new Error('Please fill all inputs.')
      }

      emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, templateParams, process.env.REACT_APP_EMAILJS_PUBLIC_KEY).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setSnackbar({
            isOpened: true,
            message: 'Message sent.',
            duration: 3000
          });

          setUserForm({
            name: '',
            email: '',
            message: ''
          })
        },
        (error) => {
          console.log('FAILED...', error);
          setSnackbar({
            isOpened: true,
            message: 'Message failed to sent!',
            duration: 3000
          })
        },
      );
    } catch(error) {
      console.log('error.')
      setSnackbar({
        isOpened: true,
        memssage: "Message not sent.",
        duration: 3000
      })
    }
  }

  //Listen to window resizing, then declare if the screen size is in mobile category.
  useEffect(() => {
    function handleResize() {
      const newIsMobile = window.innerWidth <= 999;
      setIsMobile(newIsMobile);
    }
    
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <>
      <div id="contact-maindiv">
        <div style={{ 
          width: '100%', 
          height: '100%', 
          position: 'absolute', 
          zIndex: "-999",
          top: '0px',
          left: '0px'
        }}>
          <Beams
            beamWidth={isMobile ? 5 : 4}
            beamHeight={30}
            beamNumber={20}
            lightColor="#0F131A99"
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={30}
          />
        </div>
        <h2 id="contact-title" className="default-title">Let's Create Something Creative</h2>
        <form
          id="contact-form"
          onSubmit={(e) => sendMail(e)}
        >
          <input 
              type="text" 
              id="contact-input-name" 
              placeholder="Name"
              required

              value={userForm.name}
              onInput={(e) => setUserForm({
                ...userForm,
                name: e.target.value
              })}
              autoComplete="off"
            />

            <input 
              type="email" 
              id="contact-input-email" 
              placeholder="Email"
              required

              value={userForm.email}
              onInput={(e) => setUserForm({
                ...userForm,
                email: e.target.value
              })}
              autoComplete="off"
            />

            <textarea 
              type="email" 
              id="contact-input-ideas" 
              placeholder={`${userForm.name.trim() === "" ? 'Share your ideas, but tell us your name first.' : `Any ideas, ${userForm.name}?`}`}
              required

              value={userForm.message}
              onInput={(e) => setUserForm({
                ...userForm,
                message: e.target.value
              })}
              autoComplete="off"
            />
          <button type="submit" id="contact-input-submit">Send</button>
        </form>
      </div>
      {snackbar.isOpened && 
        <SnackbarExample 
          message={snackbar.message} 
          duration={snackbar.duration} 
          onClose={() => setSnackbar({ 
            isOpened: false,
            message: '',
            duration: 3000
          })}
        />
      }
    </>
  )
}