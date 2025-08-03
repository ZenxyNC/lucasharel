import Cards from './components/cards'
import './skills.css';


export default function Skills() {
  const skillsProperty = [
    {
      appIcon: <img className='cards-image' alt="" loading='lazy' src='https://cdn-icons-png.flaticon.com/128/1051/1051277.png' />,
      appName: "HTML"
    },
    {
      appIcon: <img className='cards-image' alt="" loading='lazy' src='https://cdn-icons-png.flaticon.com/128/732/732190.png' />,
      appName: "CSS"
    },
    {
      appIcon: <img className='cards-image' alt="" loading='lazy' src='https://cdn-icons-png.flaticon.com/128/5968/5968292.png' />,
      appName: "JavaScript"
    },
    {
      appIcon: <img className='cards-image' alt="" loading='lazy' src='https://img.icons8.com/?size=48&id=54087&format=png' />,
      appName: "NodeJS"
    },
    {
      appIcon: <img className='cards-image' alt="" loading='lazy' src='https://cdn-icons-png.flaticon.com/128/5968/5968350.png' />,
      appName: "Python"
    },
    {
      appIcon: <img className='cards-image' alt="" loading='lazy' src='https://img.icons8.com/?size=80&id=asWSSTBrDlTW&format=png' />,
      appName: "ReactJS"
    },
    {
      appIcon: <img className='cards-image' alt="" loading='lazy' src='https://img.icons8.com/?size=50&id=kg46nzoJrmTR&format=png' style={{ filter: 'invert(100%)' }} />,
      appName: "Express"
    },
    {
      appIcon: <img className='cards-image' alt="" loading='lazy' src='https://cdn-icons-png.flaticon.com/128/733/733609.png' style={{ filter: 'invert(100%)' }} />,
      appName: "GitHub"
    },
    {
      appIcon: <img className='cards-image' alt="" loading='lazy' src='https://cdn-icons-png.flaticon.com/128/5968/5968705.png' />,
      appName: "Figma"
    },
    {
      appIcon: <img className='cards-image' alt="" loading='lazy' src='https://cdn-icons-png.flaticon.com/128/5968/5968472.png' />,
      appName: "Adobe Illustrator"
    },
    {
      appIcon: <img className='cards-image' alt="" loading='lazy' src='https://cdn-icons-png.flaticon.com/128/5968/5968520.png' />,
      appName: "Adobe Photoshop"
    },
    {
      appIcon: <img className='cards-image' alt="" loading='lazy' src='https://cdn-icons-png.flaticon.com/128/888/888867.png' />,
      appName: "Microsoft Office"
    }
  ];

  const projectsProperty = [
    {
      appIcon: <img className='cards-image-projects' alt='' loading='lazy' src='https://zenxync.github.io/zencore/static/media/gh-cmd-gen.ce49416fd732120a4105.png' />,
      appName: "Git Helper",
      appCapt: "Generate Git commands. Deploy? Commit? 404 Issues? No more forgotten command, just generate it.",
      url: "https://zenxync.github.io/gh-cmd-gen"
    },
    {
      appIcon: <img className='cards-image-projects' alt='' loading='lazy' src='https://zenxync.github.io/zencore/static/media/ZenScreen.b90f834f82f2c2a2b085.png' />,
      appName: "ZenScreen",
      appCapt: "Need a screen saver? ZenScreen got you. Clock, stopwatch, pomodoro, all at once with built-in anti-burn in feature.",
      url: "https://zenxync.github.io/zenscreen"
    },
    {
      appIcon: <img className='cards-image-projects' alt='' loading='lazy' src='https://zenxync.github.io/zencore/static/media/ZenEngine.d5c7395d37e5e4c9660d0468f1497500.svg' />,
      appName: "ZenEngine",
      appCapt: "Don’t you tired making all same complexed functions every new projects? Let ZenEngine fix that.",
      url: "https://zenxync.github.io/zenengine"
    }
  ];


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