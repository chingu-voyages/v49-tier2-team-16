export default function FooterVoyager({ liUrl, ghUrl, voyager }) {
  return (
    <div className="flex gap-0.5 items-center md:text-nowrap">
      <a href={liUrl}>
        <img
          className="pl-[1px] drop-shadow-md drop-shadow-[0_0_6px_0_rgba(235, 192, 193, 1)]"
          src="/src/img/linkedin.svg"
          alt="linkedin icon"
        />
      </a>
      <a href={ghUrl}>
        <img
          className="drop-shadow-md drop-shadow-[0_0_6px_0_rgba(235, 192, 193, 1)]"
          src="/src/img/github.svg"
          alt="github icon"
        />
      </a>
      <p>{voyager}</p>
    </div>
  );
}
