import '../skills.css'
import DarkVeil from './darkveil'

export default function Cards({ title, purpose, content }) {

  return (
    <>
      <div 
        id="cards-maindiv"
        className='default-container'  
      >
        <div style={{ 
          width: '1000px', 
          height: '70dvh', 
          position: 'absolute', 
          zIndex: '-9999', 
          top: '0px', 
          left: '0px' 
          }}
        >
          <DarkVeil 
            hueShift={10}
            noiseIntensity={0}
            scanlineIntensity={0}
            speed={0.8}
            scanlineFrequency={5}
            warpAmount={1}
            resolutionScale={1}
          />
        </div>

        <h2 className='default-title'>{title}</h2>
        {purpose === "skills" && 
          <div id='cards-contentwrapper'>
            {content.map((item, index) => (
              <div className="default-container cards-container" key={index}>
                {item.appIcon}
                <p>{item.appName}</p>
              </div>
            ))}
          </div>
        }
        {purpose === "projects" && 
          <div id='cards-contentwrapper'>
            {content.map((item, index) => (
              <div 
                className="default-container cards-container-projects" 
                key={index}
                onClick={() => window.open(`${item.url}`)}
              >
                {item.appIcon}
                <div className='cards-title-projects'>{item.appName}</div>
                <p>{item.appCapt}</p>
              </div>
            ))}
          </div>
        }
      </div>
    </>
  )
}