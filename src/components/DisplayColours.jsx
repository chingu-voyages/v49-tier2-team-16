function DisplayColours({ color }) {
  return (
    <div className="mx-5 px-5 flex">
      <div className="text-brand-light-green w-1/4">
      <p className="flex flex-col items-start text-left">{color.hex}</p>
      <p className="flex flex-col items-start text-left pb-4">{color.name}</p>
      </div>
      <div className="w-3/4">
      <p className="flex flex-col pb-4">
        {color.description}
      </p>
      </div>
    </div>
  );
}

export default DisplayColours;
