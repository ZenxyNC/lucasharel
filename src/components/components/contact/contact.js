import { useState, useEffect } from "react"
import Beams from "./components/beams"
import GlassSurface from "./components/glass"
import emailjs from '@emailjs/browser'
import SnackbarExample from "./components/snackbar";


export default function Contact() {
  const [isMobile, setIsMobile] = useState(true);
  const [inputMargin, setInputMargin] = useState(15)
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
      setIsMobile(newIsMobile); // No need for ternary operator
      setInputMargin(newIsMobile ? 15 : 5);
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
          <GlassSurface
            width = {isMobile ? '100%' : 'calc(50% - 10px)'}
            height = {50}
            borderRadius = {40}
            borderWidth = {0.1}
            brightness = {70}
            opacity = {1}
            blur = {50}
            displace = {5}
            backgroundOpacity = {0.08}
            saturation = {0.7}
            distortionScale = {-180}
            redOffset = {0}
            greenOffset = {10}
            blueOffset = {30}
            xChannel = "R"
            yChannel = "G"
            mixBlendMode = "difference"
            style={{ marginBottom: `${inputMargin}px` }}
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
          </GlassSurface>

          <GlassSurface
            width = {isMobile ? '100%' : 'calc(50% - 10px)'}
            height = {50}
            borderRadius = {40}
            borderWidth = {0.1}
            brightness = {70}
            opacity = {1}
            blur = {50}
            displace = {5}
            backgroundOpacity = {0.08}
            saturation = {0.7}
            distortionScale = {-180}
            redOffset = {0}
            greenOffset = {10}
            blueOffset = {30}
            xChannel = "R"
            yChannel = "G"
            mixBlendMode = "difference"
            style={{ marginBottom: `${inputMargin}px` }}
          >
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
          </GlassSurface>

          <GlassSurface
            width = "100%"
            height = {`${isMobile ? 'calc(100% - 130px - 50px - 15px)' : 'calc(100% - 140px)'}`}
            borderRadius = {`${isMobile ? 30 : 30}`}
            borderWidth = {0.1}
            brightness = {70}
            opacity = {1}
            blur = {50}
            displace = {5}
            backgroundOpacity = {0.08}
            saturation = {0.7}
            distortionScale = {-180}
            redOffset = {0}
            greenOffset = {10}
            blueOffset = {30}
            xChannel = "R"
            yChannel = "G"
            mixBlendMode = "difference"
            style={{ marginBottom: `${inputMargin}px` }}
          >
            <textarea 
              type="email" 
              id="contact-input-ideas" 
              placeholder={`${userForm.name === "" ? 'Share your ideas, but tell us your name first.' : `Any ideas, ${userForm.name}?`}`}
              required

              value={userForm.message}
              onInput={(e) => setUserForm({
                ...userForm,
                message: e.target.value
              })}
              autoComplete="off"
            />
          </GlassSurface>
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