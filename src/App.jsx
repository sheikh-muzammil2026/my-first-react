
import './App.css';
import Todo from './Todo';
import Condition from './6-conditional-way';
import Maping from './maping';
import PracticeObject from './object';
import UseState from './state';
import GetRuns from './runs'

function App() {

const array = ['salman', 'matobbar', 'anjom', 'miksar'];

const songs = [
  {
  id: 1,
  title: "Hasbi Rabbi",
  artist: "Sami Yusuf",
  language: "Arabic",
  genre: "Nasheed",
  year: 2005,
  isPopular: true
},
{
   id: 2,
  title: "Ya Nabi Salam Alayka",
  artist: "Maher Zain",
  language: "Arabic",
  genre: "Islamic Song",
  year: 2009,
  isPopular: true
},
{
   id: 3,
  title: "Kun Anta",
  artist: "Humood AlKhudher",
  language: "Arabic",
  genre: "Nasheed",
  year: 2015,
  isPopular: true
}

]



  return (
    <>
      <Header></Header>

      <Main></Main>
      <UseState></UseState>
      <GetRuns></GetRuns>
     {
        songs.map(song => <PracticeObject key={song.id} song={song}></PracticeObject>)
     }
     
      <Device name='Mobile' brand='Iphone'></Device>
      <Device name='Leptop' brand='HP'></Device>
      <Device name='Tablet' brand='Sumsung'></Device>
      <Device name='Desktop' brand='Walton'></Device>
      
      <Student></Student>
      <Developer name="Sakib" language="Java"></Developer>
      <Developer name="Muhammad" language="Python"></Developer>
      <Developer name="Abadullah" language="C++"></Developer>
      <Developer name="Jaber" language="PHP"></Developer>

      <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Revise JS" isDone={false}></Todo>
      <Todo task="Take a shower" isDone={true}></Todo>

      <Condition salary={30000} decision="Cancel" duration={6} isDone={false}></Condition>
      <Condition salary= {25000} decision="Will stay" duration={6} isDone={true}></Condition>
     
     {
  array.map(arr => <Maping arr={arr}></Maping>)
      }

     
      <Footer></Footer>
    </>
  )
}



function Header() {
  return (
    <>
    {/* ক্লাসের 3rd ইউজেস */}
  <h1 style= {  
    {
      textAlign: 'center',
      color: 'green',
      textShadow: '2px 2px gray'
    }
  }
  >React notes book</h1>
  <p>রিয়েক্টের সকল নোটগুলো আমি এখানে লিখে রাখব।</p>
    </>
  )
}

function Main() {
  return (
    <div style={{
      textAlign: 'left'
    }}>
    <ul>
        <li>Any browser | vite.dev | Get Started | npm create vite@latest my-first-app -- --template react | yes |</li>
        <li>লাইভ দেখার জন্য টার্মিনালে npm run dev কমান্ড দিলে লিঙ্ক চলে আসবে।</li>
        <li>কম্পোনেন্ট তৈরি করার সময় ফাংশনের রিটার্ন কী এর পরে একাধিক এলিমেন্ট থাকলে empty ক্লোজিং ও ওপেনিং ট্যাগ দিতে হয়।  </li>
      </ul>
  </div>
  )
}


function Student() {
  const name = "sobuj";
  const mark = 80;
  return (
    <div className='card'> {/* ক্লাসের ১ম ইউজেস */}
    <p>First boy : {name}</p>
    <p>Total mark : {mark}</p>
    </div>
    
  )
}

// props এর প্রাথমিক ইউজেস
function Device(props) {
  return(
   <div className='card'> 
   <Heading></Heading>
    <h3>Device : {props.name}</h3>
    <p>Brand :{props.brand}</p>
   </div>
  )
};

function Heading() {
  return <p>Example of props</p>  
}

// props কে ডিস্ট্রাকচারিং করেও ইউজ করা যায়। 
// আগে ডিস্ট্রাকচারিং করা হত এভাবেঃ  {name, language} = {name: 'Sakib', language: 'Python'};
// কিন্তু এখন শর্ট ফাংশনের প্যারামিটার হিসেবে দিয়ে দিলেই হয় এভাবেঃ  {name, language}


function Developer( {name, language}) {
 
  return (
    <div style={{textAlign: 'left'}}>
    <h6>All developer information</h6>
    <p>Developer : {name}</p>
    <p>Language : {language}</p>
    </div>
  )
}

 {/* class এর ২য় প্রকার ইউজেস */}
const textColor = {
  color: 'black',
  textAlign: 'center',
  opacity: 0.5
};

function Footer() {
  return (
    <div  className='card'>
      <p>Follow us in <a href="https://google.com">google.com</a> and <a href="https://youtube.com">youtube.com</a></p>
      <p style={textColor}>All right is riserved</p>  
    </div>
  )
}
export default App
