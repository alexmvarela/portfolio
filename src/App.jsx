import { useRef, useState } from 'react';
import './App.css';
import { Button, Card, CardContent, CardHeader, Carousel, CarouselItem, Dialog, Divider, IconButton } from 'ui-neumorphism';
import 'ui-neumorphism/dist/index.css';

import photo from './assets/img/photo.png';

import fit1 from './assets/img/fit-tracker/fit-1.png';
import fit2 from './assets/img/fit-tracker/fit-2.png';
import fit3 from './assets/img/fit-tracker/fit-3.png';
import fit4 from './assets/img/fit-tracker/fit-4.png';
import fit5 from './assets/img/fit-tracker/fit-5.png';
import fit6 from './assets/img/fit-tracker/fit-6.png';
import fit7 from './assets/img/fit-tracker/fit-7.png';
import fit8 from './assets/img/fit-tracker/fit-8.png';
import fit9 from './assets/img/fit-tracker/fit-9.png';
import fit10 from './assets/img/fit-tracker/fit-10.png';
import fit11 from './assets/img/fit-tracker/fit-11.png';
import fit12 from './assets/img/fit-tracker/fit-12.png';
import fit13 from './assets/img/fit-tracker/fit-13.png';
import fit14 from './assets/img/fit-tracker/fit-14.png';

import reelations1 from './assets/img/reelations/reelations-1.png';
import reelations2 from './assets/img/reelations/reelations-2.png';
import reelations3 from './assets/img/reelations/reelations-3.png';
import reelations4 from './assets/img/reelations/reelations-4.png';
import reelations5 from './assets/img/reelations/reelations-5.png';

import mario1 from './assets/img/super-mario/super-mario-1.png';
import mario2 from './assets/img/super-mario/super-mario-2.png';
import mario3 from './assets/img/super-mario/super-mario-3.png';
import mario4 from './assets/img/super-mario/super-mario-4.png';
import mario5 from './assets/img/super-mario/super-mario-5.png';
import mario6 from './assets/img/super-mario/super-mario-6.png';
import mario7 from './assets/img/super-mario/super-mario-7.png';

import columns1 from './assets/img/columns/columns-1.png';
import columns2 from './assets/img/columns/columns-2.png';
import columns3 from './assets/img/columns/columns-3.png';
import columns4 from './assets/img/columns/columns-4.png';
import columns5 from './assets/img/columns/columns-5.png';
import columns6 from './assets/img/columns/columns-6.png';
import columns7 from './assets/img/columns/columns-7.png';
import columns8 from './assets/img/columns/columns-8.png';

function App() {

  const [ copied, setCopied ] = useState(false);
  const [ showDialog, setShowDialog ] = useState(false);
  const project = useRef('');
  
  const handleCopy = () => {
    const email = 'alejandromartinezvarel@gmail.com';
    navigator.clipboard.writeText(email)
      .then(()=> {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => console.error('Error copying to clipboard: ', err));
  }
  
  const handleDialog = (projectName) => {
    project.current = projectName;
    setShowDialog(!showDialog);
  }

  return (
    <div className='container mb-5'>

      <nav className='navbar sticky-top justify-content-evenly py-4'>
        <a href='#about-me'><i className="bi bi-person-fill"></i> About me</a>
        <a href='#projects'><i className="bi bi-file-code-fill"></i> Projects</a>
        <a href='#contact'><i className="bi bi-envelope-fill"></i> Contact</a>
      </nav>

      <div className='about' id='about-me'>
        <div className='photo'>
          <img src={photo} alt='Profile image' />
        </div>
        <div className='name'>
          <h2>ALEJANDRO MARTINEZ</h2>
          <h3>web developer</h3>
        </div>
        <Card rounded={true} inset={true} style={{maxWidth: '85%', paddingBottom: '10px'}} elevation={1}>
          <CardHeader style={{textAlign: 'center'}}><i className="bi bi-person-fill"></i> About me</CardHeader>
          <Divider className={'mb-3'}></Divider>
          <CardContent className={'ms-4 me-4'}>Hi! I'm Alex, a web developer with a solid background in Business Administration.<br/>My passion for technology and web development has motivated me to evolve into a full-stack developer.<br/><br/>I am dedicated to continuous growth in this dynamic field and strive to add significant value to every team's success.<br/>I thrive on tackling new challenges and I am committed to lifelong learning, adapting quickly to new technologies and methodologies.<br/><br/>My strong sense of responsibility and ability to work effectively in team environments drive me to approach tasks with dedication and make a positive impact through collaboration.</CardContent>
        </Card>
        <div className='mt-4 mb-4 row text-center w-75 mx-auto mb-4'>
          <div className="col my-2">
            <i className="fa-brands fa-js fa-2xl my-4"></i><br/>JavaScript
          </div>
          <div className="col my-2">
            <i className="fa-brands fa-node fa-2xl my-4"></i><br/>Node.js
          </div>
          <div className="col my-2">
            <svg fill="#000000" width="50px" height="50px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>mongodb</title><path d="M15.821 23.185s0-10.361 0.344-10.36c0.266 0 0.612 13.365 0.612 13.365-0.476-0.056-0.956-2.199-0.956-3.005zM22.489 12.945c-0.919-4.016-2.932-7.469-5.708-10.134l-0.007-0.006c-0.338-0.516-0.647-1.108-0.895-1.732l-0.024-0.068c0.001 0.020 0.001 0.044 0.001 0.068 0 0.565-0.253 1.070-0.652 1.409l-0.003 0.002c-3.574 3.034-5.848 7.505-5.923 12.508l-0 0.013c-0.001 0.062-0.001 0.135-0.001 0.208 0 4.957 2.385 9.357 6.070 12.115l0.039 0.028 0.087 0.063q0.241 1.784 0.412 3.576h0.601c0.166-1.491 0.39-2.796 0.683-4.076l-0.046 0.239c0.396-0.275 0.742-0.56 1.065-0.869l-0.003 0.003c2.801-2.597 4.549-6.297 4.549-10.404 0-0.061-0-0.121-0.001-0.182l0 0.009c-0.003-0.981-0.092-1.94-0.261-2.871l0.015 0.099z"></path></g></svg><br/>MongoDB
          </div>
          <div className="col my-2">
            <i className="fa-brands fa-react fa-2xl my-4"></i><br/>React
          </div>
          <div className="col my-2">
            <i className="fa-brands fa-html5 fa-2xl my-4"></i><br/>HTML
          </div>
          <div className="col my-2">
            <i className="fa-brands fa-css3-alt fa-2xl my-4"></i><br/>CSS
          </div>
          <div className="col my-2">
            <i className="fa-brands fa-bootstrap fa-2xl my-4"></i><br/>Bootstrap
          </div>
        </div> 
      </div>

      <div className='projects' id='projects'>
        <Card rounded={true} inset={true} style={{ margin: '50px 0px', width: '90%' }}>
          <CardHeader style={{ textAlign: 'center' }}><i className="bi bi-file-code-fill"></i> Projects</CardHeader>
          <Divider className={'mb-4'}></Divider>
          <CardContent style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5'>

              <div className='col d-flex'>
                <Card rounded={true} elevation={1} className='flex-fill d-flex flex-column' style={{ padding: '10px' }}>
                  <div className='img-container'>
                    <img src={fit1} alt='Fit Tracker' className='img-fluid' />
                  </div>
                  <CardHeader><b>Fit Tracker</b></CardHeader>
                  <CardContent className='flex-grow-1' style={{ textAlign: 'left' }}>
                    <p>
                      Full Stack MERN App designed to plan and record fitness and nutritional activity.<br /><br />
                      The app includes detailed information on over 1300 exercises, allows you to create your own routines, or choose those created by other users.<br />
                      All your logged information will be accessible through a calendar. It also features a graphing system that provides useful insights for users based on the recorded data, including the main macronutrients in their diet and their progress in each exercise.<br /><br />
                      <b>Key technologies:</b> React, JavaScript, Node.js, Express, MongoDB, API RESTful.<br />
                      Project deployed on Fly.io using Docker.
                    </p>
                  </CardContent>
                  <div className='container mt-auto d-flex flex-column'>
                    <div className='d-flex justify-content-between my-4'>
                      <a href='https://github.com/nacho-alex/project-module-3'><Button outlined={true}><i className="fa-brands fa-github fa-xl me-1"></i> Github</Button></a>
                      <a href='https://fit-tracker.fly.dev'><Button outlined={true}><i className="fa-solid fa-link fa-xl me-1"></i> Link</Button></a>
                    </div>
                    <Button onClick={() => handleDialog('fit')} rounded={true} block={true} className='mb-4 mt-3'><i className="fa-regular fa-images fa-xl me-1"></i> Screenshots</Button>
                  </div>
                </Card>
              </div>

              <div className='col d-flex'>
                <Card rounded={true} elevation={1} className='flex-fill d-flex flex-column' style={{ padding: '10px' }}>
                  <div className='img-container'>
                    <img src={reelations1} alt='Reelations' className='img-fluid' />
                  </div>
                  <CardHeader><b>Reelations</b></CardHeader>
                  <CardContent className='flex-grow-1' style={{ textAlign: 'left' }}>
                    <p>
                      If you're passionate about movies, this is the website for you!<br/><br/>
                      The database offers detailed information on over 10,000 movies, available in both Spanish and English.<br/>
                      You can create reviews and personalized lists, find movies using the search feature, or perhaps discover something new with the random search. You can also apply filters (such as genre, decade, user ratings), among other features.<br/><br/>
                      <b>Key technologies:</b> JavaScript, Node.js, Express, MongoDB, Handlebars.<br/>
                      Project deployed on Fly.io.
                    </p>
                  </CardContent>
                  <div className='container mt-auto d-flex flex-column'>
                    <div className='d-flex justify-content-between my-4'>
                      <a href='https://github.com/alexmvarela/project-module2-reelations'><Button outlined={true}><i className="fa-brands fa-github fa-xl me-1"></i> Github</Button></a>
                      <a href='https://project-module2.fly.dev'><Button outlined={true}><i className="fa-solid fa-link fa-xl me-1"></i> Link</Button></a>
                    </div>
                    <Button onClick={() => handleDialog('reelations')} rounded={true} block={true} className='mb-4 mt-3'><i className="fa-regular fa-images fa-xl me-1"></i> Screenshots</Button>
                  </div>
                </Card>
              </div>

              <div className='col d-flex'>
                <Card rounded={true} elevation={1} className='flex-fill d-flex flex-column' style={{ padding: '10px' }}>
                  <div className='img-container'>
                    <img src={mario1} alt='Super Mario' className='img-fluid' />
                  </div>
                  <CardHeader><b>Super Mario</b></CardHeader>
                  <CardContent className='flex-grow-1' style={{ textAlign: 'left' }}>
                    <p>
                      2D Platformer Game.<br/>
                      Captures the essence of the original with Vanilla JavaScript development.<br/><br/>
                      This project faithfully recreates the animations, mechanics, physics, and collision detection of the classic platformer video game.<br/>
                      Experience the authentic gameplay with smooth animations and precise game dynamics, all built from scratch.<br/><br/>
                      <b>Key technologies:</b> Vanilla JavaScript, HTML.<br/>
                      Project deployed on GitHub Pages.
                    </p>
                  </CardContent>
                  <div className='container mt-auto d-flex flex-column'>
                    <div className='d-flex justify-content-between my-4'>
                      <a href='https://github.com/alexmvarela/project-game-super-mario'><Button outlined={true}><i className="fa-brands fa-github fa-xl me-1"></i> Github</Button></a>
                      <a href='https://alexmvarela.github.io/project-game-super-mario'><Button outlined={true}><i className="fa-solid fa-link fa-xl me-1"></i> Link</Button></a>
                    </div>
                    <Button onClick={() => handleDialog('mario')} rounded={true} block={true} className='mb-4 mt-3'><i className="fa-regular fa-images fa-xl me-1"></i> Screenshots</Button>
                  </div>
                </Card>
              </div>

              <div className='col d-flex'>
                <Card rounded={true} elevation={1} className='flex-fill d-flex flex-column' style={{ padding: '10px' }}>
                  <div className='img-container'>
                    <img src={columns2} alt='Columns' className='img-fluid' />
                  </div>
                  <CardHeader><b>Columns</b></CardHeader>
                  <CardContent className='flex-grow-1' style={{ textAlign: 'left' }}>
                    <p>
                      2D Tetris-like Game.<br/>
                      Developed with Vanilla JavaScript.<br/><br/>
                      The design is fully responsive, seamlessly adapting to different screen sizes. Additionally, the game is playable on mobile devices thanks to the implementation of touch controls, providing a smooth experience on both desktop and mobile platforms.<br/><br/>
                      <b>Key technologies:</b> JavaScript, HTML, CSS.<br/>
                      Project deployed on GitHub Pages.
                    </p>
                  </CardContent>
                  <div className='container mt-auto d-flex flex-column'>
                    <div className='d-flex justify-content-between my-4'>
                      <a href='https://github.com/alexmvarela/game-columns'><Button outlined={true}><i className="fa-brands fa-github fa-xl me-1"></i> Github</Button></a>
                      <a href='https://alexmvarela.github.io/game-columns/'><Button outlined={true}><i className="fa-solid fa-link fa-xl me-1"></i> Link</Button></a>
                    </div>
                    <Button onClick={() => handleDialog('columns')} rounded={true} block={true} className='mb-4 mt-3'><i className="fa-regular fa-images fa-xl me-1"></i> Screenshots</Button>
                  </div>
                </Card>
              </div>

            </div>
          </CardContent>
        </Card>
      </div>

      <Dialog visible={showDialog} onClose={handleDialog} className={'container d-flex flex-column-reverse align-items-center'}>

        {project.current === 'fit' && (
          <Carousel className={'w-100'} showArrows hideDelimiters nextIcon={<IconButton size='small' bgColor={'rgba(255,255,255,0.5'} bordered={true} rounded={true} text={true}><i className=" fa-solid fa-chevron-right fa-2xs" /></IconButton>} prevIcon={<IconButton style={{marginBottom: '17px'}} size='small' bgColor={'rgba(255,255,255,0.5'} bordered={true} rounded={true} text={true}><i className="fa-solid fa-chevron-right fa-2xs" /></IconButton>}>
            <CarouselItem><img className='img-fluid h-100 object-fit-contain' src={fit1} alt='fit tracker'></img></CarouselItem>
            <CarouselItem><img className='img-fluid h-100 object-fit-contain' src={fit2} alt='fit tracker'></img></CarouselItem>
            <CarouselItem><img className='img-fluid h-100 object-fit-contain' src={fit3} alt='fit tracker'></img></CarouselItem>
            <CarouselItem><img className='img-fluid h-100 object-fit-contain' src={fit4} alt='fit tracker'></img></CarouselItem>
            <CarouselItem><img className='img-fluid h-100 object-fit-contain' src={fit5} alt='fit tracker'></img></CarouselItem>
            <CarouselItem><img className='img-fluid h-100 object-fit-contain' src={fit6} alt='fit tracker'></img></CarouselItem>
            <CarouselItem><img className='img-fluid h-100 object-fit-contain' src={fit7} alt='fit tracker'></img></CarouselItem>
            <CarouselItem><img className='img-fluid h-100 object-fit-contain' src={fit8} alt='fit tracker'></img></CarouselItem>
            <CarouselItem><img className='img-fluid h-100 object-fit-contain' src={fit9} alt='fit tracker'></img></CarouselItem>
            <CarouselItem><img className='img-fluid h-100 object-fit-contain' src={fit10} alt='fit tracker'></img></CarouselItem>
            <CarouselItem><img className='img-fluid h-100 object-fit-contain' src={fit11} alt='fit tracker'></img></CarouselItem>
            <CarouselItem><img className='img-fluid h-100 object-fit-contain' src={fit12} alt='fit tracker'></img></CarouselItem>
            <CarouselItem><img className='img-fluid h-100 object-fit-contain' src={fit13} alt='fit tracker'></img></CarouselItem>
            <CarouselItem><img className='img-fluid h-100 object-fit-contain' src={fit14} alt='fit tracker'></img></CarouselItem>
          </Carousel>
        )}

        {project.current === 'reelations' && (
          <Carousel className={'w-100'} showArrows hideDelimiters nextIcon={<IconButton size='small' bgColor={'rgba(255,255,255,0.5'} bordered={true} rounded={true} text={true}><i className=" fa-solid fa-chevron-right fa-2xs" /></IconButton>} prevIcon={<IconButton style={{marginBottom: '17px'}} size='small' bgColor={'rgba(255,255,255,0.5'} bordered={true} rounded={true} text={true}><i className="fa-solid fa-chevron-right fa-2xs" /></IconButton>}>
            <CarouselItem><img className='img-fluid h-100 object-fit-contain' src={reelations1} alt='reelations'></img></CarouselItem>
            <CarouselItem><img className='img-fluid h-100 object-fit-contain' src={reelations2} alt='reelations'></img></CarouselItem>
            <CarouselItem><img className='img-fluid h-100 object-fit-contain' src={reelations3} alt='reelations'></img></CarouselItem>
            <CarouselItem><img className='img-fluid h-100 object-fit-contain' src={reelations4} alt='reelations'></img></CarouselItem>
            <CarouselItem><img className='img-fluid h-100 object-fit-contain' src={reelations5} alt='reelations'></img></CarouselItem>
          </Carousel>
        )}

        {project.current === 'mario' && (
          <Carousel className={'w-100'} showArrows hideDelimiters nextIcon={<IconButton size='small' bgColor={'rgba(255,255,255,0.5'} bordered={true} rounded={true} text={true}><i className=" fa-solid fa-chevron-right fa-2xs" /></IconButton>} prevIcon={<IconButton style={{marginBottom: '17px'}} size='small' bgColor={'rgba(255,255,255,0.5'} bordered={true} rounded={true} text={true}><i className="fa-solid fa-chevron-right fa-2xs" /></IconButton>}>
            <CarouselItem><img className='img-fluid h-100 object-fit-contain' src={mario1} alt='super mario'></img></CarouselItem>
            <CarouselItem><img className='img-fluid h-100 object-fit-contain' src={mario2} alt='super mario'></img></CarouselItem>
            <CarouselItem><img className='img-fluid h-100 object-fit-contain' src={mario3} alt='super mario'></img></CarouselItem>
            <CarouselItem><img className='img-fluid h-100 object-fit-contain' src={mario4} alt='super mario'></img></CarouselItem>
            <CarouselItem><img className='img-fluid h-100 object-fit-contain' src={mario5} alt='super mario'></img></CarouselItem>
            <CarouselItem><img className='img-fluid h-100 object-fit-contain' src={mario6} alt='super mario'></img></CarouselItem>
            <CarouselItem><img className='img-fluid h-100 object-fit-contain' src={mario7} alt='super mario'></img></CarouselItem>
          </Carousel>
        )}

        {project.current === 'columns' && (
          <Carousel className={'w-100'} showArrows hideDelimiters nextIcon={<IconButton size='small' bgColor={'rgba(255,255,255,0.5'} bordered={true} rounded={true} text={true}><i className=" fa-solid fa-chevron-right fa-2xs" /></IconButton>} prevIcon={<IconButton style={{marginBottom: '17px'}} size='small' bgColor={'rgba(255,255,255,0.5'} bordered={true} rounded={true} text={true}><i className="fa-solid fa-chevron-right fa-2xs" /></IconButton>}>
            <CarouselItem><img className='img-fluid h-100 object-fit-contain' src={columns1} alt='columns'></img></CarouselItem>
            <CarouselItem><img className='img-fluid h-100 object-fit-contain' src={columns2} alt='columns'></img></CarouselItem>
            <CarouselItem><img className='img-fluid h-100 object-fit-contain' src={columns3} alt='columns'></img></CarouselItem>
            <CarouselItem><img className='img-fluid h-100 object-fit-contain' src={columns4} alt='columns'></img></CarouselItem>
            <CarouselItem><img className='img-fluid h-100 object-fit-contain' src={columns5} alt='columns'></img></CarouselItem>
            <CarouselItem><img className='img-fluid h-100 object-fit-contain' src={columns6} alt='columns'></img></CarouselItem>
            <CarouselItem><img className='img-fluid h-100 object-fit-contain' src={columns7} alt='columns'></img></CarouselItem>
            <CarouselItem><img className='img-fluid h-100 object-fit-contain' src={columns8} alt='columns'></img></CarouselItem>
          </Carousel>
        )}
        
        <IconButton className={'sticky-top'} size='large' text={false} rounded={true} onClick={handleDialog}><i className="fa-regular fa-circle-xmark fa-2xl"></i></IconButton> 

      </Dialog>

      <div className='contact mb-5' id='contact'>
        <Card rounded={true} inset={true} style={{ paddingBottom: '10px', margin: '50px 30px'}} elevation={1}>
          <CardHeader style={{textAlign: 'center'}}><i className="bi bi-envelope-fill"></i> Contact</CardHeader>
          <Divider className={'mb-4'}></Divider>
          <CardContent style={{textAlign: 'center', marginBottom: '20px'}}>
            <Card inset={true} className={'mx-auto p-3 mb-4'}>alejandromartinezvarel@gmail.com
              <IconButton text={false} size='small'style={{marginLeft: '10px'}} onClick={handleCopy}>{copied ? (<i className="fa-solid fa-check"></i>) : (<i className="fa-regular fa-copy"></i>)}</IconButton>
            </Card>
            <a  href='https://www.linkedin.com/in/alejandromartinez-webdeveloper/' className={'me-4'}><Button rounded={true} ><i className="fa-brands fa-linkedin fa-xl me-1"></i> LinkedIn</Button></a>
            <a  href='https://github.com/alexmvarela'><Button rounded={true}><i className="fa-brands fa-github fa-xl me-1"></i> Github</Button></a>
          </CardContent>
        </Card>
      </div>

      <footer>
        <p>Created by Alejandro Martínez</p> 
        <p className='smile'><i className="fa-regular fa-face-smile"></i> Thank you for the visit!</p>
      </footer>
        
    </div>
  )
}

export default App;
