import '../skills.css'

export default function Cards({ title, purpose, content }) {

  return (
    <>
      <div 
        id="cards-maindiv"
        className='default-container'  
      >
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