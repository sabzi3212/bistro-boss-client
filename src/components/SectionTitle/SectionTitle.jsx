/* eslint-disable react/prop-types */
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8 mb-5">
            <p className="text-yellow-700">---{heading}---</p>
            <h3 className="text-3xl uppercase border-y-2 py-4">{subHeading}</h3>
        </div>
    );
};

export default SectionTitle;