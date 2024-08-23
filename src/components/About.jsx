import Aboutimage from '../assets/Aboutimage.avif'
function About() {
  return (
    <>
    
  
    <div className="h-5/6  flex  items-center justify-between">
    <div id="image" className='h-[70%]  w-[40%]'>
        <img className='h-[100%] w-[100%]' src={Aboutimage} alt="" />

    </div>
    <div id="about" className='w-[50%]  text-justify font-italic'>
    <div className='bg-orange-500  rounded-md'>
    <h1 className="text-3xl text-center text-black ">About Us</h1>
    </div> <br />
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, voluptates magni ipsa earum rerum autem corporis enim reiciendis officia maiores, fuga cum reprehenderit facere eaque voluptas, ratione atque doloremque ab? Corporis quod corrupti omnis explicabo provident consequuntur praesentium. Quis itaque dolor, debitis atque quos molestiae cumque earum. Saepe quo, aut eaque cupiditate blanditiis repellendus ad. Sed nam, tenetur maiores deserunt aliquam hic, facere placeat distinctio nesciunt quidem debitis unde? Ea velit facilis sunt harum eveniet! Quaerat id, adipisci voluptatibus ullam omnis minus nesciunt excepturi rem aliquam consequuntur sint sapiente error aut corrupti nihil laudantium totam ab exercitationem, architecto voluptatum ad.</div>
        
    </div>
    
    </>

  )
}

export default About