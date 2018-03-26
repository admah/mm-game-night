import React from "react";
import axios from "axios";
import styled from "styled-components";
import convert from "xml-js";
//import fastXmlParser from "fast-xml-parser";

const Form = styled.form`
  width: 50%;
  margin: 30px auto;
`;

export default class UserDataForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bggUser: "",
      showQuestionForm: false,
      bggUserCollection: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ bggUser: event.target.value });
  }

  handleCollection(data) {
    const collectionJson = convert.xml2js(data, {
      compact: true,
      spaces: 4
    });

    return collectionJson.items.item;
  }

  handleSubmit(event) {
    const bggUser = this.state.bggUser;
    axios
      .get(
        `https://www.boardgamegeek.com/xmlapi2/collection?username=${bggUser}&excludesubtype=boardgameexpansion`
      )
      .then(response => {
        if (response.data) {
          const collectionData = this.handleCollection(response.data);

          this.setState({
            showQuestionForm: true,
            bggUserCollection: collectionData
          });
        }
      });
    event.preventDefault();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <label>
          BGG Username:
          <input
            type="text"
            value={this.state.bggUser}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </Form>
    );
  }
}
