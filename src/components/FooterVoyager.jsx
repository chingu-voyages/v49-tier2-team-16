export default function FooterVoyager({ liUrl, ghUrl, voyager }) {
  return (
    <div className="flex gap-0.5 items-center text-nowrap">
      <a href={liUrl}>
        <img
          className="pl-[1px]"
          src="/src/img/linkedin.svg"
          alt="linkedin icon"
        />
      </a>
      <a href={ghUrl}>
        <img src="/src/img/github.svg" alt="github icon" />
      </a>
      <p>{voyager}</p>
    </div>
  );
}
