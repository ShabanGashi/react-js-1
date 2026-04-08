import Header from './components/app/header/Header'
import Counter from './components/app/studentcounter/StudentCounter'
import Course from './components/app/courses/courses'
import Students from './components/app/showstudents/ShowStudents'
import FormSubmit from './components/form/FormSubmit'

function App() {
  return (
    <>
      <Header />
      <Counter />
      <Course />
      <Students />
      <hr />
      <FormSubmit />
    </>
  )
}


export default App
