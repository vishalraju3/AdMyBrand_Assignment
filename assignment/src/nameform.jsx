// import React from "react";
// // import Dropdown from "react-dropdown";
// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     let [arrgrr, setArgarr] = this.useState({ MyArg: "false" });
//     this.state = {
//       value: "MyArg",
//       mybooleanstate: "undefined",
//       drpoptions: ["select...", "constant", "argument", "and", "or"],
//       selectedOpt: "select...",
//       myboolean: ["true", "false"],
//     };
//     // let optionarr = ["constant", "argument", "and", "or"];
//     this.handleChange = this.handleChange.bind(this);
//     this.handleArgChange = this.handleArgChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleoptionChange = this.handleoptionChange.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ mybooleanstate: event.target.value });
//   }
//   handleArgoptChange(event) {
//     let temparr = this.state.argarr;
//     let index = this.state.value;
//     temparr[index] = event.target.value;
//     this.setState({ argarr: temparr });
//   }
//   handleArgChange(event) {
//     this.setState({ value: event.target.value });
//   }
//   handleoptionChange(event) {
//     if (event.target.value === "constant") {
//       this.setState({ mybooleanstate: "false" });
//     }
//     this.setState({ selectedOpt: event.target.value });
//   }

//   handleSubmit(event) {
//     this.setState({ selectedOpt: "select..." });
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input type="text" value={this.state.value} />
//         <select
//           value={this.state.argarr[this.state.value]}
//           onChange={this.handleArgoptChange}
//         >
//           <option value="true">true</option>
//           <option value="false">false</option>
//         </select>
//         <br></br>
//         <br></br>
//         {this.state.selectedOpt === "select..." && (
//           <select
//             value={this.state.selectedOpt}
//             onChange={this.handleoptionChange}
//           >
//             {this.state.drpoptions.map((element) => {
//               if (element === "select...") {
//                 return (
//                   <option disabled value={element}>
//                     {element}
//                   </option>
//                 );
//               } else {
//                 return <option value={element}>{element}</option>;
//               }
//             })}
//           </select>
//         )}
//         {this.state.selectedOpt === "constant" && (
//           <select
//             value={this.state.mybooleanstate}
//             onChange={this.handleChange}
//           >
//             {this.state.myboolean.map((element) => {
//               return <option value={element}>{element}</option>;
//             })}
//           </select>
//         )}
//         <button>X</button>
//         <br></br>
//         <label>result : {this.state.mybooleanstate}</label>
//       </form>
//     );
//   }
// }

// export default NameForm;


import React from "react";
// import Dropdown from "react-dropdown";
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "MyArg",
      mybooleanstate: "undefined",
      drpoptions: ["select...", "constant", "argument", "and", "or"],
      argarr:{ MyArg: "false" },
      selectedOpt: "select...",
      myboolean: ["true", "false"],
    };
    // let optionarr = ["constant", "argument", "and", "or"];
    this.handleChange = this.handleChange.bind(this);
    this.handleArgChange = this.handleArgChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleoptionChange = this.handleoptionChange.bind(this);
  }

  handleChange(event) {
    this.setState({ mybooleanstate: event.target.value });
  }
  handleArgoptChange(event) {
    let temparr = this.state.argarr;
    let index = this.state.value;
    temparr[index] = event.target.value;
    this.setState({ argarr: temparr });
  }
  handleArgChange(event) {
    this.setState({ value: event.target.value });
  }
  handleoptionChange(event) {
    if (event.target.value === "constant") {
      this.setState({ mybooleanstate: "false" });
    }
    this.setState({ selectedOpt: event.target.value });
  }

  handleSubmit(event) {
    this.setState({ selectedOpt: "select..." });
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} />
        <select
          value={this.state.argarr[this.state.mybooleanstate]}
          onChange={this.handleChange}
        >
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
        <br></br>
        <br></br>
        {this.state.selectedOpt === "select..." && (
          <select
            value={this.state.selectedOpt}
            onChange={this.handleoptionChange}
          >
            {this.state.drpoptions.map((element) => {
              if (element === "select...") {
                return (
                  <option disabled value={element}>
                    {element}
                  </option>
                );
              } else {
                return <option value={element}>{element}</option>;
              }
            })}
          </select>
        )}
        {this.state.selectedOpt === "constant" && (
          <select
            value={this.state.mybooleanstate}
            onChange={this.handleChange}
          >
            {this.state.myboolean.map((element) => {
              return <option value={element}>{element}</option>;
            })}
          </select>
        )}
        <button>X</button>
        <br></br>
        <label>result : {this.state.mybooleanstate}</label>
      </form>
    );
  }
}

export default NameForm;