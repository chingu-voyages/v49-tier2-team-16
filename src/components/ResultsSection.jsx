function ResultsSection({ color }) {
  return (
    <div className="mx-5 px-5 flex">
      <div className="text-brand-light-green">
      <p className="flex flex-col items-start text-left">{color.hex}</p>
      <p className="flex flex-col items-start text-left">{color.name}</p>
      </div>
      <div className="ml-8">
      <p className="flex flex-col items-start text-left w-full md:w-[460px]">
        {color.description}
      </p>
      </div>
    </div>
  );
}

export default ResultsSection;
