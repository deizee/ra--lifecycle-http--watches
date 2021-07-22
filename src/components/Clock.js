import ClockBody from "./ClockBody";
import PropTypes from "prop-types";
import {logDOM} from "@testing-library/react";

const Clock = (props) => {
  const onDelete = (event) => {
    props.deleteClock(event.target.id);
  }

  return (
    <div className="clockElement">
      <h3 className="clockTitle">{props.title}</h3>
      <ClockBody timeZone={props.timeZone} />
      <button className="clockButtonDel" id={props.id} onClick={onDelete}>
        x
      </button>
    </div>
  );
};

Clock.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    timeZone: PropTypes.string.isRequired,
    deleteClock: PropTypes.func.isRequired
}

export default Clock;
