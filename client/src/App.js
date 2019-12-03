import React from 'react';
import './App.css';
import Modal from 'react-modal';
import AboutMeForm from "./Components/AboutMeForm";
import HomeForm from "./Components/HomeForm";
import ContactForm from "./Components/Contact";
import WorkTermOneBlogForm from "./Components/WorkTermOneBlogForm";
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import MediaQuery  from 'react-responsive';
import CheeseburgerMenu from 'cheeseburger-menu';
import HamburgerMenu from 'react-hamburger-menu';
import { SocialIcon } from 'react-social-icons';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
let history = createBrowserHistory();

let myModalStyle = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.75)'
  },
  content: {
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px',
    height: '400px',
    width: '900px',
    position: 'fixed',
    alignItems: 'center',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  }
};

const mobileOptions = {
  backgroundColor: "white",
  color: 'black', 
  textAlign: 'center',
  fontSize: '24px',
  paddingTop: "10px",
  paddingBottom: "10px",
  textDecoration: 'none',
  border: "1px solid grey",
}


const tabStyle = {
  backgroundColor: "transparent",
  color: 'grey', 
  textAlign: 'center',
  fontSize: '30px',
  marginLeft: "30px",
  marginRight: "30px",
  textDecoration: 'none',
  borderBottom: "3px solid transparent"
};

const hoverTabStyle = {
  color: '#FFC30B',
  textAlign: 'center',
  fontSize: '30px',
  marginLeft: "30px",
  marginRight: "30px",
  textDecoration: 'none',
  borderBottom: "3px solid #FFC30B"
};


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      date: "",
      description: "",
      username: "",
      password: "",
      hoverHome: false,
      hoverAboutMe: false,
      hoverContactMe: false,
      modalIsOpen: false,
      menuOpen: false,
      hoverCooperators: false,
      selectReport: false,
      darkMode: false, 
      start: true,
      hoverArrow: false,
    };

    
    this.changeDropDown = this.changeDropDown.bind(this);
    this.addPosts = this.addPosts.bind(this);
    this.validateUser = this.validateUser.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);

    this.hoverHomeOn = this.hoverHomeOn.bind(this);
    this.hoverHomeOff = this.hoverHomeOff.bind(this);
    this.selectHome = this.selectHome.bind(this);

    this.hoverAboutMeOn = this.hoverAboutMeOn.bind(this);
    this.hoverAboutMeoff = this.hoverAboutMeoff.bind(this);
    this.selectAboutMe = this.selectAboutMe.bind(this);

    this.hoverContactMeOn = this.hoverContactMeOn.bind(this);
    this.hoverContactMeoff = this.hoverContactMeoff.bind(this);
    this.selectContactMe = this.selectContactMe.bind(this);
  
    this.closeModal = this.closeModal.bind(this);

    this.hoverArrowOn = this.hoverArrowOn.bind(this);
    this.hoverArrowOff = this.hoverArrowOff.bind(this);
    this.hoverCooperatorsOn = this.hoverCooperatorsOn.bind(this);
    this.hoverCooperatorsOff = this.hoverCooperatorsOff.bind(this);
    this.selectCooperators = this.selectCooperators.bind(this);
    this.changeDark = this.changeDark.bind(this);
    this.goToSite = this.goToSite.bind(this);
  }
  async hoverArrowOn(){
    await this.setState({ hoverArrow: true });
  }
  async hoverArrowOff(){
    await this.setState({ hoverArrow: false });
  }

  async goToSite(){
    await this.setState({ hoverArrow: true });
    await this.setState({ start: false });
  }

  async changeDark(){
    let current = this.state.darkMode;
    await this.setState({ darkMode: !current });
  }

  async selectCooperators() {
    this.setState({ hoverCooperators: true });
    this.setState({ selectReport: true });
    this.setState({ hoverAboutMe: false });
    this.setState({ hoverHome: false });
    this.setState({ hoverContactMe: false }); 
    await history.push("/Cooperators");
  }
  hoverCooperatorsOn(){
    this.setState({ hoverCooperators: true });
  }
  hoverCooperatorsOff(){ 
    if(history.location.pathname !== "/Cooperators") {
      this.setState({ hoverCooperators: false });
    }
  }

  changeDropDown(e) {
    this.setState({ selectedOption:  e.target.value});
  }

  openMenu() {
    this.setState({ menuOpen: true })
  }

  closeMenu() {
    this.setState({ menuOpen: false })
  }

  // Closes the modal that alerts the client they are making an insurance-less client
  closeModal() {
    this.setState({modalIsOpen: false});
  }

  async selectHome() {
    this.setState({ hoverAboutMe: false });
    this.setState({ hoverHome: true });
    this.setState({ selectReport: false });
    this.setState({ hoverCooperators: false });
    this.setState({ hoverContactMe: false }); 
    await history.push("/");
  }

  hoverHomeOn(){
    this.setState({ hoverHome: true });
  }

  hoverHomeOff(){ 
    if(history.location.pathname !== "/") {
      this.setState({ hoverHome: false });
    }
  }


  async selectAboutMe(){
    this.setState({ hoverAboutMe: true });
    this.setState({ hoverHome: false });
    this.setState({ selectReport: false });
    this.setState({ hoverCooperators: false });
    this.setState({ hoverContactMe: false }); 
    await history.push("/AboutMe");
  }

  hoverAboutMeOn(){
    this.setState({ hoverAboutMe: true });
  }

  hoverAboutMeoff(){ 
    if(history.location.pathname !== "/ContactMe") {
      this.setState({ hoverContactMe: false });    
    }
  }

  async selectContactMe(){
    this.setState({ hoverAboutMe: false });
    this.setState({ hoverHome: false });
    this.setState({ selectReport: false });
    this.setState({ hoverCooperators: false });
    this.setState({ hoverContactMe: true });
    await history.push("/ContactMe");
  }

  hoverContactMeOn(){
    this.setState({ hoverContactMe: true });
  }

  hoverContactMeoff(){ 
    if(history.location.pathname !== "/ContactMe") {
      this.setState({ hoverContactMe: false });    
    }
  }

  handleStateChange = async(e) => {
    await this.setState({ [e.target.id]: e.target.value });
  }

  validateUser = async(e) => {
    if(this.state.username !== "" && this.state.password !== "") {
      if(this.state.title !== "" && this.state.date !== "" && this.state.description !== "") {
        let response = await checkUser(this.state.username, this.state.password);

        if(response.error === "Verified") {
          console.log("Verified");
          let sendPost = await addPost(this.state.title, this.state.date, this.state.description);
          console.log(sendPost.error);
    
          if(sendPost.error === "Success") {
            this.setState({ modalIsOpen: false });
            this.seePosts();
          }
          else {
            alert('Invalid Login. Please try again.');
          }
        }
        else {
          alert('Invalid Login. Please try again.');
        }
      }
      else {
        alert("Please enter in a title, date and decription for your post.");
      }
    }
    else {
      alert("Please enter your username and password");
    }
  }

  addPosts = (e) => {
    this.setState({modalIsOpen: true});
  }

  render() {
      return(
        <div>
          <ReactCSSTransitionGroup
          transitionName="background"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}
        >
          {this.state.start === true &&
          <div className="startMenu" id="startMenu" style={{paddingTop: "50px"}}>
            <div style={{margin: "20px", padding: "30px", borderTop: "2px solid white", borderBottom: "2px solid white"}}>
            <div style={{float: "Center"}}>
              <img alt="Mackenzie Quigley Logo" src={require("./Components/MyText/compLogo.png")} style={{width: "100px", height: "100px"}}/>
          </div> <br></br>
            <label style={{fontSize: "60px",  paddingBottom: "10px", border: "none", backgroundColor: "transparent", color: "white"}}>Mackenzie Quigley</label> <br></br>
            <br></br>
            <label style={{fontSize: "30px", paddingTop: "30px", border: "none", backgroundColor: "transparent", color: "white"}}>I am a student studying Software Engineering at the University of Guelph.<br></br> Click below to see my full website.</label> <br></br>
            <input type="submit" onClick={this.goToSite} onMouseEnter={this.hoverArrowOn}  onMouseLeave={this.hoverArrowOff} style={this.state.hoverArrow ? {marginTop: "80px", fontSize: "60px", border: "none", backgroundColor: "transparent", color: "black"} : {marginTop: "80px", fontSize: "60px", border: "none", backgroundColor: "transparent", color: "white"} } value="↯" />
            <br></br>
            </div>
          </div>
           }
          </ReactCSSTransitionGroup>

      {this.state.start === false &&
      <div style={{width: "100%", height: "100%"}} style={this.state.darkMode ? {backgroundColor: "black"} : {backgroundColor: "white"} }>
        <Router>
        <MediaQuery query='(min-width: 1225px)'>
          <Modal
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal}
                style={myModalStyle}
                contentLabel="New Post"
              >
                <form>
                  <label>Name:</label> <input type="text"   onChange={this.handleStateChange} id={"username"} value={this.state.username}/> <br></br>
                  <label>Password:</label> <input type="text" onChange={this.handleStateChange} id={"password"} value={this.state.password}/> <br></br>
                  <label>Title:</label> <input type="text" onChange={this.handleStateChange} id={"title"}value={this.state.title}/> <br></br>
                  <label>Date:</label> <input type="date" onChange={this.handleStateChange} id={"date"} value={this.state.date}/> <br></br>
                  <br></br><label>Description:</label><br></br> <textarea rows = "5" cols = "60" className="descriptionBox" type="text" onChange={this.handleStateChange} id={"description"} value={this.state.description}/> <br></br>
                  <button className="cancelButton" onClick={this.closeModal}>Cancel</button> 
                  <button  onClick={this.validateUser} >Save</button>
                  </form>
              </Modal >
        </MediaQuery>

        
          <div>
            <div style={{display: "block", overflow: "auto"}}>
              <MediaQuery query='(min-width: 1225px)'>
                <div className={this.state.darkMode ? "myDarkHeader" : "myheader"}>
                <img alt="Mackenzie Quigley Logo" src={require("./Components/MyText/logo.png")} style={{float: "left", padding: "10px", marginLeft: "40px", width: "250px", height: "150px", display: "block"}}/>
               
                <nav className="tabHeader">
                
                  {history.location.pathname === "/" && 
                    <Link 
                    style={hoverTabStyle} 
                    to="/">
                    Home
                    </Link>
                  }

                  {history.location.pathname !== "/" &&
                    <Link 
                    style={this.state.hoverHome ? hoverTabStyle : tabStyle} 
                    onMouseEnter={this.hoverHomeOn} 
                    onMouseLeave={this.hoverHomeOff}  
                    onClick={this.selectHome} 
                    to="/">
                    Home
                    </Link>
                  }
                  

                  <div className="dropdown">
                    {(this.state.selectReport === true) &&
                      <label style={hoverTabStyle} >Work Term Reports</label>
                    }
                    {(this.state.selectReport !== true) &&
                      <label style={this.state.WorkTerm ? hoverTabStyle : tabStyle} >Work Term Reports</label>
                    }

                  <div className={this.state.darkMode ? "dropdown-contentDark" : "dropdown-content"}>
                      {history.location.pathname === "/Cooperators" &&
                      <div>
                        <Link style={hoverTabStyle} onMouseEnter={this.hoverCooperatorsOn}  onMouseLeave={this.hoverCooperatorsOff} onClick={this.selectCooperators}  to="/Cooperators">The Co-operators</Link> <br></br>
                      </div>
                      }
                      {history.location.pathname !== "/Cooperators" &&
                      <div>
                        <Link style={this.state.hoverCooperators ? hoverTabStyle : tabStyle} onMouseEnter={this.hoverCooperatorsOn}  onMouseLeave={this.hoverCooperatorsOff} onClick={this.selectCooperators} to="/Cooperators">The Co-operators</Link> <br></br>
                      </div>
                      }
                      </div>
                  </div>
                  
                {history.location.pathname === "/AboutMe" && 
                <Link
                style={ hoverTabStyle} 
                to="/AboutMe">
                  About Me
                  </Link>
              }

                {history.location.pathname !== "/AboutMe" && 
                <Link
                onClick={this.selectAboutMe} 
                style={this.state.hoverAboutMe ? hoverTabStyle : tabStyle} 
                onMouseEnter={this.hoverAboutMeOn} 
                onMouseLeave={this.hoverAboutMeoff} 
                to="/AboutMe">
                  About Me
                  </Link>
              } 


              {history.location.pathname === "/ContactMe" && 
                <Link
                style={ hoverTabStyle} 
                to="/ContactMe">
                  Contact Me
                  </Link>
              }

                {history.location.pathname !== "/ContactMe" && 
                <Link
                onClick={this.selectContactMe} 
                style={this.state.hoverContactMe ? hoverTabStyle : tabStyle} 
                onMouseEnter={this.hoverContactMeOn} 
                onMouseLeave={this.hoverContactMeoff} 
                to="/ContactMe">
                  Contact Me
                  </Link>
              }
              </nav>
              </div>
          </MediaQuery>

          <MediaQuery query='(max-width: 1224px)'>
          <div  >
            <div style={{padding: "10px", float: "left"}}>
                <CheeseburgerMenu
                  isOpen={this.state.menuOpen}
                  closeCallback={this.closeMenu.bind(this)}>
                        <Link onClick={this.closeMenu.bind(this)} style={{textDecoration: "none"}} to="/">
                          <p style={{mobileOptions}}>Home</p>
                        </Link>
                        <Link onClick={this.closeMenu.bind(this)} style={{textDecoration: "none"}} to="/Cooperators">
                          <p style={{mobileOptions}}>The Co-operators</p>
                        </Link>
                        <Link  onClick={this.closeMenu.bind(this)}style={{textDecoration: "none"}} to="/AboutMe">
                          <p style={{mobileOptions}}>About Me</p>
                        </Link>
                        <Link  onClick={this.closeMenu.bind(this)}style={{textDecoration: "none"}} to="/ContactMe">
                          <p style={{mobileOptions}}>Contact Me</p>
                        </Link>
                </CheeseburgerMenu>
          
                <HamburgerMenu
                  isOpen={this.state.menuOpen}
                  menuClicked={this.openMenu.bind(this)}
                  width={32}
                  height={24}
                  strokeWidth={3}
                  rotate={0}
                  color='black'
                  borderRadius={0}
                  animationDuration={0.5}
                />
            </div>
            <div style={{float: "Center"}}>
              <img alt="Mackenzie Quigley Logo" src={require("./Components/MyText/logo.png")} style={{width: "200px", height: "100px"}}/>
          </div>
           </div>
        </MediaQuery>
        </div>

        <MediaQuery query='(min-width: 1225px)'>
          <div style={{margin: "100px"}}/>
        </MediaQuery>
              <Switch>
                  <Route exact path="/"><HomeForm/></Route>
                  <Route exact path="/Cooperators"> <WorkTermOneBlogForm/> </Route>
                  <Route exact path="/ContactMe"> <ContactForm/> </Route>
                  <Route exact path="/AboutMe"><AboutMeForm/></Route>
              </Switch>
        </div>
      

      <div style={{margin: "50px"}}>
        <SocialIcon style={{margin: "20px", width: "30px", height: "30px"}} url="https://www.linkedin.com/in/mackenzie-quigley-9680ba14a/" />
        <br></br><label style={{backgroundColor: "transparent", fontSize: "20px"}}>Website Designed and Created By Mackenzie Quigley</label> <br></br>
        <button onClick={this.changeDark} >Light/Dark</button>
        <br></br><button style={{float: "right"}} onClick={this.addPosts} className="AddPost" id="AddPost">+</button> <br></br>
        </div>
        </Router>
      </div>
    }
    </div>
    );
  }
}

async function checkUser(username, password) {
  let info = {};
  info.username = username;
  info.password = password;
  console.log(info);

  let data = {};

  await (async () => {
    const rawResponse = await fetch('/api/v1/checkUser', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(info)
    });
    data = await rawResponse.json();
  })();

    return data;
}


async function addPost(title, date, description) {
  let info = {};
  info.title = title;
  info.description = description;
  info.date = date;

  console.log(info);

  let data = {};

  await (async () => {
    const rawResponse = await fetch('/api/v1/addPost', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(info)
    });
    data = await rawResponse.json();
  })();

    return data;
}


export default App;
