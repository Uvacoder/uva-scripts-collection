import React from "react";
import { Blocks, HeaderBasic } from "@blocks/react";
export default () => (
  <Blocks.Root>
    <HeaderBasic>
      <HeaderBasic.Logo
        to="#https://github.com/uvacoder"
        sx={{
          pt: 1,
          pb: 1,
          pr: 1,
          pl: 1,
          color: "accent",
          bg: "highlight",
          fontFamily: "inherit",
          fontWeight: "heading",
          lineHeight: "body",
          fontSize: 2,
          mt: 1,
          mb: 1,
          mr: 1,
          ml: 1,
        }}
      >
        uvacoder
      </HeaderBasic.Logo>
      <HeaderBasic.Nav
        sx={{
          color: "accent",
          bg: "highlight",
          fontFamily: "heading",
          fontWeight: "heading",
          lineHeight: "body",
          fontSize: 2,
        }}
      >
        <HeaderBasic.Link to="/about">About</HeaderBasic.Link>
        <HeaderBasic.Link to="/blog">Blog</HeaderBasic.Link>
        <HeaderBasic.Link to="/contact">Contact</HeaderBasic.Link>
      </HeaderBasic.Nav>
    </HeaderBasic>
  </Blocks.Root>
);
