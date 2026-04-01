
import State from './components/State'
import UseEffect from './components/UseEffect'
import UseStateComponent from './components/UseStateComponent'
import Click from './components/Click'
import OnChange from './components/OnChange'
import TwoStateComponent from './components/TwoState'
import DarkMode from './components/DarkMode'
import RenderList from './components/lists/RenderList'
import RenderListObject from './components/lists/RenderListObject'
import Courses from './components/lists/Courses'
import Movies from './components/Movies'

function App() {
  const courses = [
    {
      id: "1",
      title: "react",
      instructor: "egzon",
      price: "34",
    },
    {
      id: "2",
      title: "react",
      instructor: "egzon",
      price: "34",
    },
    {
      id: "3",
      title: "react",
      instructor: "egzon",
      price: "34",
    },
  ]

  const movies = [
    {
      id: '1',
      Movietitle: 'Kosova',
      MovieDesc: 'lofjerfergehgherhghgehg',
      IsAvailable: true,
      MovieRate: '9.0',
    },
    {
      id: '2',
      Movietitle: 'Kosova 2',
      MovieDesc: 'Another description',
      IsAvailable: true,
      MovieRate: '8.5',
    },
    {
      id: '3',
      Movietitle: 'Kosova 3',
      MovieDesc: 'Yet another description',
      IsAvailable: false,
      MovieRate: '7.9',
    },
  ]

  return (
    <>
      <State />
      <UseEffect />
      <UseStateComponent />
      <hr />
      <Click />
      <hr />
      <OnChange />
      <TwoStateComponent />
      <hr />
      <DarkMode />
      <hr />
      <RenderList />
      <RenderListObject />
      {
        courses.map(course => (
          <Courses
            key={course.id}
            title={course.title}
            instructor={course.instructor}
            price={course.price}
          />
        ))
      }
      {
        movies.map(movie => (
          <Movies
            key={movie.id}
            Movietitle={movie.Movietitle}
            MovieDesc={movie.MovieDesc}
            IsAvailable={movie.IsAvailable}
            MovieRate={movie.MovieRate}
          />
        ))
      }
    </>
  )
}

export default App
