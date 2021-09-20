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
  text,
}) => {
  const Tag = href ? AniLink : "button";
  const target = outboundLink && "_blank";
  const rel = outboundLink && "noopener noreferrer";
  let link = true;

  href && (link = !href.includes("tel:", "mailto:"));

  return (
    <Tag
      className={`group relative inline-flex items-center font-body text-gray-900 font-semibold tracking-wide pl-4 pr-2.5 py-2.5 z-10 ${className}`}
      {...(link ? { fade: "true", to: href } : { href: href })}
      target={target}
      rel={rel}
      data-modal-open={modal}
      onClick={onClick}
      type={type}
      alt-style={altStyle}
    >
      <span>{text}</span>
      <i class="far fa-arrow-right text-lg ml-2.5"></i>
      <div className="absolute left-0 h-10 w-10 group-hover:w-full rounded-full group-hover:rounded-[20px] bg-primary-400/30 z-[-10] transition-all duration-500 ease-linear"></div>
    </Tag>
  );
};

export default Button;
