function DisplayColours({ color }) {
  return (
    <div className="mx-5 px-5 flex">
      <div className="text-brand-light-green">
      <p className="flex flex-col items-start text-left w-1/4">{color.hex}</p>
      <p className="flex flex-col items-start text-left pb-4 w-1/4">{color.name}</p>
      </div>
      <div className="ml-8">
      <p className="flex flex-col items-start text-left w-3/4 md:w-[460px] pb-4">
        {color.description}
      </p>
      </div>
    </div>
  );
}

export default DisplayColours;
