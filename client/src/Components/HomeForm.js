import React from 'react';

class HomeForm extends React.Component {
  render() {
    return (
        <div className="tabContent">
            <h3 className="title" >Welcome To My Website</h3>
            <p>
            This website was created to detail the experiences I had during my CO-OP work terms, starting 
            at the Co-operators (Guelph location). I spent my term working with the Build Automation and 
            Release (BAR) team where we were responsible for the automation of testing, release activities,
             and building/maintaining environments. My hope is by looking through this website, you will 
             learn more about my experiences and skills gained throughout my Software Engineering CO-OP 
             program at the University of Guelph.</p> <br></br>
             <label>To view my work term one report</label> <br></br>
             <button>Click Here</button>
             <br></br>
        </div>
    );
  }
}


export default HomeForm;