import PropTypes from "prop-types";

const Person = ({ person }) => {
  const { name, photo, designation } = person;

  return (
    <div>
      <img src={photo} className="border-4 border-black rounded-full" alt="" />
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
