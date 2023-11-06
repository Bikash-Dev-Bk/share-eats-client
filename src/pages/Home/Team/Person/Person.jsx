import PropTypes from "prop-types";

const Person = ({ person }) => {
  const { name, photo, designation } = person;

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <img src={photo} className="border-4 border-black rounded-full" alt="" />
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="font-semibold">{designation}</p>
    </div>
  );
};

Person.propTypes = {
  person: PropTypes.object.isRequired,
};

export default Person;
