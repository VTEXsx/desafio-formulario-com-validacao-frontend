import PropTypes from "prop-types";

function OptionSelect({ value }) {
  return <option value={value}>{value}</option>;
}

OptionSelect.propTypes = {
  value: PropTypes.string,
};

export default OptionSelect;
