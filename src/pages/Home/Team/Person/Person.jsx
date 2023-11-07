import PropTypes from "prop-types";

const Person = ({ person }) => {
  const { name, photo, designation } = person;

  return (
    <div className="border-2 border-base-200 hover:border-[#D70F64] rounded-xl p-5">
      <img src={photo} className=" rounded-full" alt="" />
      <div className="mt-5">
        <h2 className="text-2xl font-bold text-center">{name}</h2>
        <p className="font-semibold text-center">{designation}</p>
      </div>
    </div>
  );
};

Person.propTypes = {
  person: PropTypes.object.isRequired,
};

export default Person;
