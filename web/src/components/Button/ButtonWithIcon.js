import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Button = ({
  className,
  href,
  outboundLink,
  onClick,
  type,
  altStyle,
  text,
}) => {
  const Tag = href ? AniLink : "button";
  const target = outboundLink && "_blank";
  const rel = outboundLink && "noopener noreferrer";
  let link = true;

  href && (link = !href.includes("tel:", "mailto:"));

  return (
    <Tag
      className={`group uppercase tracking-widest leading-[22px] inline-flex items-center justify-center space-x-6 underline ${
        altStyle ? `text-white` : `text-primary-400 hover:text-primary-400`
      } ${className}`}
      {...(link ? { fade: "true", to: href } : { href: href })}
      target={target}
      rel={rel}
      onClick={onClick}
      type={type}
      alt-style={altStyle}
    >
      <div>{text}</div>

      <div className="w-10 h-10 border border-solid border-primary-400 rounded-full flex items-center">
        <svg
          width="30"
          height="9"
          viewBox="0 0 30 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative -left-4 group-hover:-left-2 transition-all duration-300 ease-linear"
        >
          <path
            d="M29.3536 4.85355C29.5488 4.65829 29.5488 4.34171 29.3536 4.14645L26.1716 0.964465C25.9763 0.769203 25.6597 0.769203 25.4645 0.964465C25.2692 1.15973 25.2692 1.47631 25.4645 1.67157L28.2929 4.5L25.4645 7.32843C25.2692 7.52369 25.2692 7.84027 25.4645 8.03553C25.6597 8.23079 25.9763 8.23079 26.1716 8.03553L29.3536 4.85355ZM2.18557e-08 5L29 5L29 4L-2.18557e-08 4L2.18557e-08 5Z"
            fill="#AE9659"
          />
        </svg>
      </div>
    </Tag>
  );
};

export default Button;
