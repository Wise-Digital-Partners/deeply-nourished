import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Button = ({
  className,
  href,
  outboundLink,
  modal,
  onClick,
  type,
  altStyle,
  icon,
  text,
}) => {
  const Tag = href ? AniLink : "button";
  const target = outboundLink && "_blank";
  const rel = outboundLink && "noopener noreferrer";
  let link = true;

  href && (link = !href.includes("tel:", "mailto:"));

  return (
    <Tag
      className={`group relative overflow-hidden px-5 py-3 min-w-[160px] h-11 md:h-[50px] rounded inline-flex items-center justify-center text-center font-body text-base font-semibold tracking-wide no-underline whitespace-nowrap ${
        altStyle
          ? "bg-white hover:bg-primary-400 text-primary-400 hover:text-white"
          : "bg-primary-400 hover:bg-white text-white hover:text-primary-400 hover:shadow-6xl"
      } ${className || ""}`}
      {...(link ? { fade: "true", to: href } : { href: href })}
      target={target}
      rel={rel}
      data-modal-open={modal}
      onClick={onClick}
      type={type}
      alt-style={altStyle}
    >
      {icon && (
        <i
          className={`mr-2 z-10 ${
            altStyle ? "text-white" : "text-white"
          } ${icon}`}
        ></i>
      )}
      {text}
    </Tag>
  );
};

export default Button;
