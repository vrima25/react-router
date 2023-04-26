import './App.css';
import {AddCourse, EditCourse, TypeList, CourseList} from "./pages"
import Constants from "./constants";
import NavBar from "./components/NavBar";
import React from "react";

const {ROUTES} = Constants


function App() {
  const [screenName, setScreenName] = React.useState(ROUTES.COURSE_LIST)
  let Page;
  switch (screenName){
    case ROUTES.TYPE_LIST :
      Page = TypeList;
      break;
    case ROUTES.ADD_COURSE :
      Page = AddCourse;
      break;
    case ROUTES.EDIT_COURSE :
      Page = EditCourse;
      break;
    case ROUTES.COURSE_LIST :
      Page = CourseList;
      break;
    default :
      Page = CourseList
          break;
  }

  const onNavigate = (screen) => {
    setScreenName(screen)
  }
  return (
    <div className="App">
      <NavBar onNavigate={onNavigate}/>
      <Page/>
    </div>
  );
}

export default App;