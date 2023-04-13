import React from "react";
// import Dropdown from "react-dropdown";
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "MyArg",
      isnewArg: false,
      newArgValue: "",
      mybooleanstate: "undefined",
      drpoptions: ["select...", "constant", "argument", "and", "or"],
      argarr: { MyArg: "false" },
      selectedOpt: "select...",
      myboolean: ["true", "false"],
    };

    // let optionarr = ["constant", "argument", "and", "or"];
    this.handleChange = this.handleChange.bind(this);
    this.handleAddArg = this.handleAddArg.bind(this);
    this.handleArgChange = this.handleArgChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleoptionChange = this.handleoptionChange.bind(this);
    this.handleNewArgChange = this.handleNewArgChange.bind(this);
  }

  handleChange(event) {
    console.log("handleChange");
    this.setState({ mybooleanstate: event.target.value });
  }
  handleAddArg(event) {
    console.log("handleAddArg");
    this.setState({ isnewArg: true });
  }
  handleArgoptChange(event) {
    console.log("handleArgoptChange");
    let temparr = this.state.argarr;
    let index = this.state.value;
    temparr[index] = event.target.value;
    this.setState({ argarr: temparr });
  }
  handleArgChange(event) {
    console.log("handleArgChange");
    this.setState({ value: event.target.value });
  }
  handleNewArgChange(event) {
    console.log("handleArgChange");
    this.setState({ newArgValue: event.target.value });
  }
  handleoptionChange(event) {
    this.setState({ selectedOpt: event.target.value });
    if (event.target.value == "constant") {
      this.setState({ mybooleanstate: "false" });
      this.setState({ selectedOpt: event.target.value });
    } else if (event.target.value == "argument") {
      let tempcValue = this.state.argarr[this.state.value];
      this.setState({ mybooleanstate: tempcValue });
    }
  }

  handleSubmit(event) {
    this.setState({ selectedOpt: "select..." });
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleArgChange}
        />
        <select
          value={this.state.argarr[this.state.mybooleanstate]}
          onChange={this.handleChange}
        >
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
        <br></br>
        <button onClick={this.handleAddArg}>+ add Arg</button>
        {!!this.state.isnewArg && (
          <div>
            <input
              type="text"
              value={this.state.newArgValue}
              onChange={this.handleNewArgChange}
            />
            <select
              value={this.state.argarr[this.state.mybooleanstate]}
              onChange={this.handleChange}
            >
              <option value="true">true</option>
              <option value="false">false</option>
            </select>
          </div>
        )}
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
        {this.state.selectedOpt === "argument" && (
          <select value={this.state.value} onChange={this.handleChange}>
            {Object.keys(this.state.argarr).map((keyName, i) => (
              <option key={i}>{keyName}</option>
            ))}
          </select>
        )}
        <button onClick={this.handleSubmit}>X</button>
        <br></br>
        <label>result : {this.state.mybooleanstate}</label>
      </form>
    );
  }
}

export default NameForm;
