import { Component } from "react/cjs/react.production.min";
import StatisticButtons from "./components/Lessons-2/hw-01/StatsButtons/StatisticButtons";
import Statistic from "components/Lessons-2/hw-01/Statistic/Statistic";
import Notification from "components/Lessons-2/hw-01/Notification/Notification";
import Section from "components/Lessons-2/hw-01/Section/Section";

class WidgetClass extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleStateCount = (option) => {
    this.setState((prevState) => ({ [option]: prevState[option] + 1 }));
  };

  countTotalFeedback = () => {
    return this.state["good"] + this.state["neutral"] + this.state["bad"];
  };

  countPositiveFeedbackPercentage = () => {
    return ((this.state["good"] / this.countTotalFeedback()) * 100).toFixed(2);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const keys = Object.keys(this.state);
    let total = this.countTotalFeedback();

    return (
      <>
        <Section title="Please leave feedback">
          <StatisticButtons
            options={keys}
            onIncrement={this.handleStateCount}
          />
        </Section>

        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              percent={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}

export default WidgetClass;
