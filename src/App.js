import './App.css';
import React from "react";
import 'antd/dist/antd.css';
import YoutubeList from "./components/YoutubeList";
import YoutubeFormContainer from "./components/YoutubeFormContainer";


class App extends React.Component {

  render() {
    return (
        <div className="container">
            <YoutubeFormContainer/>
            <YoutubeList/>
        </div>
    );
  }
}



export default App;