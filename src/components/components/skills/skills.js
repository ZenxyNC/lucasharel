import Cards from './components/cards'
import './skills.css';


export default function Skills() {
  const skillsProperty = [
    {
      appIcon: <div className='cards-image' style={{ backgroundImage: `url('https://cdn-icons-png.flaticon.com/128/1051/1051277.png')` }}></div>,
      appName: "HTML"
    },
    { 
      appIcon: <div className='cards-image' style={{ backgroundImage: `url('https://cdn-icons-png.flaticon.com/128/732/732190.png')` }}></div>,
      appName: "CSS"
    },
    { 
      appIcon: <div className='cards-image' style={{ backgroundImage: `url('https://cdn-icons-png.flaticon.com/128/5968/5968292.png')` }}></div>,
      appName: "JavaScript"
    },
    { 
      appIcon: <div className='cards-image' style={{ backgroundImage: `url('https://img.icons8.com/?size=48&id=54087&format=png')` }}></div>,
      appName: "NodeJS"
    },
    { 
      appIcon: <div className='cards-image' style={{ backgroundImage: `url('https://cdn-icons-png.flaticon.com/128/5968/5968350.png')` }}></div>,
      appName: "Python"
    },
    { 
      appIcon: <div className='cards-image' style={{ backgroundImage: `url('https://img.icons8.com/?size=80&id=asWSSTBrDlTW&format=png')`}}></div>,
      appName: "ReactJS"
    },
    { 
      appIcon: <div className='cards-image' style={{ backgroundImage: `url('https://img.icons8.com/?size=50&id=kg46nzoJrmTR&format=png')`, filter: 'invert(100%)' }}></div>,
      appName: "Express"
    },
    { 
      appIcon: <div className='cards-image' style={{ backgroundImage: `url('https://cdn-icons-png.flaticon.com/128/733/733609.png')`, filter: 'invert(100%)'}}></div>,
      appName: "GitHub"
    },
    { 
      appIcon: <div className='cards-image' style={{ backgroundImage: `url('https://cdn-icons-png.flaticon.com/128/5968/5968705.png')`}}></div>,
      appName: "Figma"
    },
    { 
      appIcon: <div className='cards-image' style={{ backgroundImage: `url('https://cdn-icons-png.flaticon.com/128/5968/5968472.png')`}}></div>,
      appName: "Adobe Illustrator"
    },
    { 
      appIcon: <div className='cards-image' style={{ backgroundImage: `url('https://cdn-icons-png.flaticon.com/128/5968/5968520.png')`}}></div>,
      appName: "Adobe Photoshop"
    },
    { 
      appIcon: <div className='cards-image' style={{ backgroundImage: `url('https://cdn-icons-png.flaticon.com/128/888/888867.png')`}}></div>,
      appName: "Microsoft Office"
    },
  ]

  const projectsProperty = [
    {
      appIcon: <div className='cards-image-projects' style={{ backgroundImage: `url(https://zenxync.github.io/zencore/static/media/gh-cmd-gen.ce49416fd732120a4105.png)`}}></div>,
      appName: "Git Helper",
      appCapt: "Generate Git commands. Deploy? Commit? 404 Issues? No more forgotten command, just generate it.",
      url: "https://zenxync.github.io/gh-cmd-gen"
    },
    {
      appIcon: <div className='cards-image-projects' style={{ backgroundImage: `url(https://zenxync.github.io/zencore/static/media/ZenScreen.b90f834f82f2c2a2b085.png)`}}></div>,
      appName: "ZenScreen",
      appCapt: "Need a screen saver? ZenScreen got you. Clock, stopwatch, pomodoro, all at once with built-in anti-burn in feature.",
      url: "https://zenxync.github.io/zenscreen"
    },
    {
      appIcon: <div className='cards-image-projects' style={{ backgroundImage: `url(https://zenxync.github.io/zencore/static/media/ZenEngine.d5c7395d37e5e4c9660d0468f1497500.svg)`}}></div>,
      appName: "ZenEngine",
      appCapt: "Don’t you tired making all same complexed functions every new projects? Let ZenEngine fix that.",
      url: "https://zenxync.github.io/zenengine"
    }
  ]

  return (
    <>
      <div id="skills-maindiv">
        <div id='skills-contentwrapper'>
          <Cards 
            title="Skills"
            purpose="skills"
            content={skillsProperty}
          />
          <Cards 
            title="Selected Projects"
            purpose="projects"
            content={projectsProperty}
          />
        </div>
      </div>
    </>
  )
}