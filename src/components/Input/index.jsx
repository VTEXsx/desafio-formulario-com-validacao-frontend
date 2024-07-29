import PropTypes from "prop-types";

function Input({ tipo, text, ids, register }) {
  return (
    <>
      <label className="text-white/50 font-bold mb-2" htmlFor={ids}>
        {text}
      </label>
      <input
        className="px-3 py-2 border-[1px] border-white/30 rounded-md"
        type={tipo}
        id={ids}
        {...register}
      />
    </>
  );
}

Input.propTypes = {
  tipo: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  ids: PropTypes.string.isRequired,
  register: PropTypes.object.isRequired,
};

export default Input;
