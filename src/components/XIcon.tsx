type XIconProps = {
  className?: string;
};

export const XIcon = ({ className }: XIconProps) => {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M18.244 2H21.5l-7.113 8.13L22.75 22h-6.548l-5.127-6.72L5.194 22H1.936l7.608-8.694L1.5 2h6.714l4.634 6.133L18.244 2Zm-1.143 18h1.804L7.228 3.895H5.29L17.101 20Z" />
    </svg>
  );
};
