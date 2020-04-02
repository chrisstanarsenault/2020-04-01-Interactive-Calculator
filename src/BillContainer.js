import React, { Component } from "react";
import styled from "styled-components";

import CalculateTip from "./CalculateTip";

export default class BillTotal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      billTotal: "",
      isTotalShown: false
    };
    this.getBillTotal = this.getBillTotal.bind(this);
  }
  getBillTotal(event) {
    event.preventDefault();
    this.setState({
      billTotal: this.element.value,
      isTotalShown: true
    });
  }
  render() {
    return (
      <BillContainer>
        <BillTotalContainer>
          <H2>How much was your bill?</H2>
          <FormContainer onSubmit={this.getBillTotal}>
            <InputField
              type="text"
              placeholder="Enter Bill Total"
              ref={el => (this.element = el)}
            />
            <SubmitButton type="submit">Submit</SubmitButton>
          </FormContainer>
          {this.state.isTotalShown && (
            <BillTotalParagraph>
              Your bill total is:{" "}
              <BillTotalAmount>${this.state.billTotal}</BillTotalAmount>
            </BillTotalParagraph>
          )}
        </BillTotalContainer>

        {this.state.isTotalShown && (
          <CalculateTip
            billTotal={Number(this.state.billTotal)}
            totalShown={this.state.isTotalShown}
          />
        )}
      </BillContainer>
    );
  }
}

const BillContainer = styled.section`
  width: 800px;
  text-align: center;
`;

const BillTotalContainer = styled.article`
  border: 1px solid black;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 0 20px #0000001f;
  width: 100%;
`;

const H2 = styled.h2`
  font-size: 3rem;
  margin: 0;
`;

const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  padding-top: 4rem;
`;

const InputField = styled.input`
  font-size: 1.5rem;
  border-radius: 15px;
  border: 1px solid black;
  padding: 0.5rem;
`;

const SubmitButton = styled.button`
  font-size: 1.2rem;
  padding: 0.5rem 2rem;
  border-radius: 20px;
  border: 1px solid black;
  margin-left: 1rem;
  background: lightblue;
  color: white;
  font-weight: bold;
  letter-spacing: 1px;
  text-shadow: 0 0 2px black;
  cursor: pointer;
`;

const BillTotalParagraph = styled.p`
  padding-top: 20px;
  text-align: center;
  font-size: 1.7rem;
`;

const BillTotalAmount = styled.span`
  font-size: 2rem;
  font-weight: bold;
  color: green;
`;
