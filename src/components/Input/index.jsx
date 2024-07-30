import PropTypes from "prop-types";

function Input({ type, text, id, register }) {
  return (
    <div className="flex flex-col">
      <label className="text-white/50 font-bold mb-2" htmlFor={id}>
        {text}
      </label>
      <input
        className="px-2 lg:py-1 py-2 border-[1px] border-white/30 rounded-md"
        type={type}
        id={id}
        {...register}
      />
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.string,
  register: PropTypes.object.isRequired,
};

export default Input;
