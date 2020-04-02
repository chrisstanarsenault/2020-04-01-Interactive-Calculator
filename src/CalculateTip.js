import React, { Component } from "react";
import styled from "styled-components";

export default class CalculateTip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderValue: 15
    };
  }

  render() {
    const handleTaxCalc = event => {
      let sliderVal;
      if (event.target.value < 10 && event.target.value > 0) {
        sliderVal = `0${event.target.value}`;
      } else {
        sliderVal = event.target.value;
      }
      this.setState({
        sliderValue: Number(sliderVal)
      });
    };
    return (
      <CalcTipContainer>
        <H2>How Much Would You like To Tip?</H2>

        <InputSlider
          type="range"
          min="0"
          max="99"
          defaultValue="15"
          step="1"
          onChange={handleTaxCalc}
        />
        <PercentageBox>{this.state.sliderValue}%</PercentageBox>

        {this.props.totalShown && (
          <article>
            {this.state.sliderValue < 10 ? (
              <ShamefulText>
                This tip is just shameful, you should feel embarrassed. I'm not
                even going to show you the answer to this.
              </ShamefulText>
            ) : (
              <div>
                <TaxTotalDisplay>
                  Your tip will be:
                  <Total>
                    {" $"}
                    {(
                      Number(`0.${this.state.sliderValue}`) *
                      this.props.billTotal
                    ).toFixed(2)}
                  </Total>
                </TaxTotalDisplay>
                <TaxTotalDisplay>
                  Bringing your total to:
                  <Total>
                    {" $"}
                    {(
                      this.props.billTotal +
                      Number(`0.${this.state.sliderValue}`) *
                        this.props.billTotal
                    ).toFixed(2)}{" "}
                  </Total>
                </TaxTotalDisplay>
              </div>
            )}
          </article>
        )}
      </CalcTipContainer>
    );
  }
}

const CalcTipContainer = styled.section`
  margin-top: 25px;
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

const InputSlider = styled.input`
  margin-top: 3rem;
  width: 30rem;
  margin-right: 2rem;
`;

const PercentageBox = styled.span`
  border: 1px solid green;
  border-radius: 50%;
  padding: 1rem;
  font-size: 1.7rem;
  color: green;
`;

const TaxTotalDisplay = styled.p`
  font-size: 1.6rem;
`;

const Total = styled.span`
  font-size: 1.8rem;
  color: green;
`;

const ShamefulText = styled.p`
  font-size: 1.6rem;
  color: red;
`;
