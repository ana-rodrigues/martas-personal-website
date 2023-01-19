// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7kHHtmp7kw7v5e6mQsr6wa
import * as React from "react";
import { CmsCredentialsProvider } from "@plasmicpkgs/plasmic-cms"; // plasmic-import: OREVbGCcgN/codeComponent
import { EmbedCss } from "@plasmicpkgs/plasmic-embed-css"; // plasmic-import: qF0uJxFztB/codeComponent
import { ParallaxProviderWrapper } from "@plasmicpkgs/react-scroll-parallax"; // plasmic-import: L6MfauX2Cw/codeComponent

export interface GlobalContextsProviderProps {
  children?: React.ReactElement;
  cmsCredentialsProviderProps?: Partial<
    Omit<React.ComponentProps<typeof CmsCredentialsProvider>, "children">
  >;
  embedCssProps?: Partial<
    Omit<React.ComponentProps<typeof EmbedCss>, "children">
  >;
  parallaxProviderWrapperProps?: Partial<
    Omit<React.ComponentProps<typeof ParallaxProviderWrapper>, "children">
  >;
}

export default function GlobalContextsProvider(
  props: GlobalContextsProviderProps
) {
  const {
    children,
    cmsCredentialsProviderProps,
    embedCssProps,
    parallaxProviderWrapperProps
  } = props;

  return (
    <CmsCredentialsProvider
      {...cmsCredentialsProviderProps}
      databaseId={
        cmsCredentialsProviderProps &&
        "databaseId" in cmsCredentialsProviderProps
          ? cmsCredentialsProviderProps.databaseId!
          : ("8mnSnJbcLPpRAndno8nxsu" as const)
      }
      databaseToken={
        cmsCredentialsProviderProps &&
        "databaseToken" in cmsCredentialsProviderProps
          ? cmsCredentialsProviderProps.databaseToken!
          : ("0nloF4Jay00Ti3SsxHWHZHjtgY7WWFkc69DvVuO92HYz7winstHEaKrCuAdQLf3XtDFJ8Hmy9O0d9Ea5t69ng" as const)
      }
      host={
        cmsCredentialsProviderProps && "host" in cmsCredentialsProviderProps
          ? cmsCredentialsProviderProps.host!
          : ("https://studio.plasmic.app" as const)
      }
      locale={
        cmsCredentialsProviderProps && "locale" in cmsCredentialsProviderProps
          ? cmsCredentialsProviderProps.locale!
          : undefined
      }
    >
      <EmbedCss
        {...embedCssProps}
        css={
          embedCssProps && "css" in embedCssProps
            ? embedCssProps.css!
            : ("/* CSS snippet */\nhtml {\n    background-color: #7100B3;\n}" as const)
        }
      >
        <ParallaxProviderWrapper
          {...parallaxProviderWrapperProps}
          scrollAxis={
            parallaxProviderWrapperProps &&
            "scrollAxis" in parallaxProviderWrapperProps
              ? parallaxProviderWrapperProps.scrollAxis!
              : ("vertical" as const)
          }
        >
          {children}
        </ParallaxProviderWrapper>
      </EmbedCss>
    </CmsCredentialsProvider>
  );
}
