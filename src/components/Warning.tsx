interface WarningProps {
  className?: string;
}

const Warning = ({ className }: WarningProps) => {
  return (
    <svg
      className={className}
      width={68}
      height={78}
      viewBox="0 0 68 78"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        transform="matrix(-1 0 0 1 68 0)"
        fill="url(#pattern0_73_265)"
        d="M0 0H68V78H0z"
      />
      <defs>
        <pattern
          id="pattern0_73_265"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use
            xlinkHref="#image0_73_265"
            transform="matrix(.00054 0 0 .00046 -.634 0)"
          />
        </pattern>
        <image
          id="image0_73_265"
          width={4096}
          height={2160}
        />
      </defs>
    </svg>
  );
};

export default Warning;