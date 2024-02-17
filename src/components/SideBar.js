import React, { Component } from "react";
import MultilevelSidebar from "react-multilevel-sidebar";
import "react-multilevel-sidebar/src/Sidebar.css";


let options = [
  {
    title: "Technology",
    titleIcon: <i className="fa fa-solid fa-microchip"></i>,
    content: [
      { id: 1, name: "Web Development", to: "/1" },
      { id: 2, name: "Mobile Development", to: "/2"},
      { id: 3, name: "Artificial intelligence", to: "/3" },
      { id: 4, name: "Data Science & Machine Learning", to: "/4" },
      { id: 5, name: "Cloud Computing", to: "/5" },
      { id: 6, name: "Software Engineering", to: "/6" },
      { id: 7, name: "Game Development", to: "/7" },
      { id: 8, name: "Design", to: "/8" },
      { id: 9, name: "3D Printing", to: "/9" },
      { id: 10, name: "Blockchain", to: "/10" },
      { id: 11, name: "Internet of Things (IoT)", to: "/11" },
      { id: 12, name: "Hardware Electronics", to: "/12" },
    ]
  },
  {
    title: "Wellbeing",
    titleIcon: <i className="fa fa-solid fa-spa"></i>,
    content: [
      { id: 13, name: "Physical Health", to: "/13" },
      { id: 14, name: "Mental Health", to: "/14" },
      { id: 15, name: "Personal Development", to: "/15" },
      { id: 16, name: "Relationships", to: "/16" },
      { id: 17, name: "Financial Wellness", to: "/17" },
      { id: 18, name: "Healthy Habits", to: "/18" },
    ]
  },
  {
    title: "Games",
    titleIcon: <i className="fa fa-solid fa-gamepad"></i>,
    content: [
      { id: 19, name: "Board Games", to: "/19" },
      { id: 20, name: "Video Games ", to: "/20" },
      { id: 21, name: "Card Games", to: "/21" },
    ]
  },
  {
    title: "Academic",
    titleIcon: <i className="fa fa-graduation-cap"></i>,
    content: [
      { id: 22, name: "Math", to: "/22" },
      { id: 23, name: "Science", to: "/23 " },
      { id: 24, name: "History ", to: "/24" },
      { id: 25, name: "Engineering", to: "/25" },
      { id: 26, name: "Literature ", to: "/26 " },
      { id: 27, name: "Languages", to: "/27" },
      { id: 28, name: "Social Sciences", to: "/28" },
      { id: 29, name: "Art History", to: "/29" },
    ]
  },
  {
    title: "Art",
    titleIcon: <i className="fa fa-solid fa-palette"></i>,
    content: [
      { id: 30, name: "Music", to: "/30" },
      { id: 31, name: "Theatre", to: "/31" },
      { id: 32, name: "Cinema", to: "/32" },
      { id: 33, name: "Dancing", to: "/33" },
      { id: 34, name: "Drawing", to: "/34" },
    ]
  },
  {
    title: "Lifestyle & Leisure",
    titleIcon: <i className="fa fa-solid fa-futbol"></i>,
    content: [
      { id: 35, name: "Cooking & Baking", to: "/35" },
      { id: 36, name: "Travel & Culture", to: "/36" },
      { id: 37, name: "hobbies-interests", to: "/37" },
    ]
  },
];

export class SideBar extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
  }

  //   you can also use this function on any of your event to open/close the sidebar
  handleSidebarToggle = isOpen => {
    this.setState({ isOpen });
  };

  handleClick = itemOptions => {
    /* 
        do something with the item you clicked.
        you can also send custom properties of your choice
        in the options array you'll be getting those here
        whenever you click that item
    */
  };

  render() {
    return (
      <div>
        <MultilevelSidebar
          open={this.state.isOpen}
          onToggle={this.handleSidebarToggle}
          options={options}
          header="Categories"
          onItemClick={this.handleClick}
        />
        {/* using in our button to open the sidebar */}
        <button className="btn btn-light" id="hamburger-menu" onClick={() => this.handleSidebarToggle(true)}><i className="fa fa-solid fa-bars"></i></button>
      </div>
    );
  }
}