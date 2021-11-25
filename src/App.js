import React, { Component } from "react";

class App extends Component {
  state = {
    Time: 0,
    Person: {
      fullName: "Adebayo Idris",
      bio: "I am a young man trying to achieve my goals and desire as a Full-stack software developer. There is way lot to say about myself but if am to keep it short i can say i am pretty honest and a blunt person because i do not hide my feelings from anything or anyone. Life is simple when you live it simple, we live once so i try to get the best out of life before we go 6feet under..",
      imgSrc: "./image.jpg",
      profession: "Software developer",
    },
    shows: false,
  };

  openProfile = () => {
    this.setState({
      Person: {
        fullName: "Adebayo",
        bio: "I am a young man trying to achieve my goals and desire as a Full-stack software developer. There is way lot to say about myself but if am to keep it short i can say i am pretty honest and a blunt person because i do not hide my feelings from anything or anyone. Life is simple when you live it simple, we live once so i try to get the best out of life before we go 6feet under..",
        imgSrc: "./image.jpg",
        profession: "Software developer",
      },
      shows: true,
    });
  };

  closeProfile = () => {
    this.setState({
      Person: {
        fullName: "",
        bio: "",
        imgSrc: "",
        profession: "",
      },
      shows: false,
    });
  };
  tick() {
    this.setState((state) => ({
      Time: state.Time + 1,
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }
  render() {
    return (
      <div>
        <img Src={this.state.Person.imgSrc} alt="" />
        <h3> {this.state.Person.fullName} </h3>
        <h3> {this.state.Person.bio} </h3>
        <h3> {this.state.Person.profession} </h3>
        <h5> this component was mounted {this.state.Time}s ago</h5>
        <button
          onClick={
            this.state.shows === "true" ? this.openProfile : this.closeProfile
          }
        >
          {this.state.shows === "true" ? "show" : "hide"}
        </button>
      </div>
    );
  }
}

export default App;
