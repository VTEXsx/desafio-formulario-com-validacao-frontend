import PropTypes from "prop-types";
function BtnSubmit({children}) {
 return (
   <button
     type="submit"
     className="bg-teal-500 hover:bg-teal-600 text-white/90 font-bold py-2 w-3/5 rounded-md mt-3 md:mt-4"
   >
     {children}
   </button>
 );
}

BtnSubmit.propTypes = {
 children: PropTypes.node.isRequired
};

export default BtnSubmit;