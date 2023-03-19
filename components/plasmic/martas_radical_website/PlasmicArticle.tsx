// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7kHHtmp7kw7v5e6mQsr6wa
// Component: WiFB8-VHiUE

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { Reveal } from "@plasmicpkgs/react-awesome-reveal"; // plasmic-import: R6s1FdhksG/codeComponent
import Ornament from "../../Ornament"; // plasmic-import: DXi2tuunkH/component
import { CmsQueryRepeater } from "@plasmicpkgs/plasmic-cms"; // plasmic-import: 8N9-WfZSaq/codeComponent
import { CmsRowField } from "@plasmicpkgs/plasmic-cms"; // plasmic-import: w6HdOz-Pcn/codeComponent
import Tag from "../../Tag"; // plasmic-import: D4A_nzoplA/component
import { CmsRowImage } from "@plasmicpkgs/plasmic-cms"; // plasmic-import: dj_Vc2QmFA/codeComponent
import BackButton from "../../BackButton"; // plasmic-import: 4iL8_Fj5jz/component

import { useScreenVariants as useScreenVariantsqd2M7Fh1C7FCr } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: qd2M7fh1c7fCR/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_martas_radical_website.module.css"; // plasmic-import: 7kHHtmp7kw7v5e6mQsr6wa/projectcss
import sty from "./PlasmicArticle.module.css"; // plasmic-import: WiFB8-VHiUE/css

export type PlasmicArticle__VariantMembers = {};
export type PlasmicArticle__VariantsArgs = {};
type VariantPropType = keyof PlasmicArticle__VariantsArgs;
export const PlasmicArticle__VariantProps = new Array<VariantPropType>();

export type PlasmicArticle__ArgsType = {};
type ArgPropType = keyof PlasmicArticle__ArgsType;
export const PlasmicArticle__ArgProps = new Array<ArgPropType>();

export type PlasmicArticle__OverridesType = {
  body?: p.Flex<"div">;
  reveal?: p.Flex<typeof Reveal>;
  articleContainer?: p.Flex<"div">;
  main?: p.Flex<"main">;
  cmsDataLoader?: p.Flex<typeof CmsQueryRepeater>;
  container?: p.Flex<"div">;
  heading?: p.Flex<"div">;
  tag?: p.Flex<typeof Tag>;
  cmsEntryImage?: p.Flex<typeof CmsRowImage>;
  img?: p.Flex<typeof p.PlasmicImg>;
  content?: p.Flex<"p">;
  backButton?: p.Flex<typeof BackButton>;
};

export interface DefaultArticleProps {}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicArticle__RenderFunc(props: {
  variants: PlasmicArticle__VariantsArgs;
  args: PlasmicArticle__ArgsType;
  overrides: PlasmicArticle__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsqd2M7Fh1C7FCr()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <title key="title">{PlasmicArticle.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicArticle.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicArticle.pageMetadata.title}
        />

        <meta
          key="og:image"
          property="og:image"
          content={PlasmicArticle.pageMetadata.ogImageSrc}
        />
        <meta
          key="twitter:image"
          name="twitter:image"
          content={PlasmicArticle.pageMetadata.ogImageSrc}
        />
        <link ref="canonical" href={PlasmicArticle.pageMetadata.canonical} />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"body"}
          data-plasmic-override={overrides.body}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.body
          )}
        >
          <Reveal
            data-plasmic-name={"reveal"}
            data-plasmic-override={overrides.reveal}
            className={classNames("__wab_instance", sty.reveal)}
            damping={0.5 as const}
            delay={0 as const}
            duration={1000 as const}
            triggerOnce={true}
          >
            {true ? (
              <div
                data-plasmic-name={"articleContainer"}
                data-plasmic-override={overrides.articleContainer}
                className={classNames(projectcss.all, sty.articleContainer)}
              >
                {true ? (
                  <main
                    data-plasmic-name={"main"}
                    data-plasmic-override={overrides.main}
                    className={classNames(projectcss.all, sty.main)}
                  >
                    <Ornament
                      className={classNames(
                        "__wab_instance",
                        sty.ornament__uiwsZ
                      )}
                    />

                    <CmsQueryRepeater
                      data-plasmic-name={"cmsDataLoader"}
                      data-plasmic-override={overrides.cmsDataLoader}
                      className={classNames(
                        "__wab_instance",
                        sty.cmsDataLoader
                      )}
                      desc={false}
                      emptyMessage={
                        <ph.DataCtxReader>
                          {$ctx => (
                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__xerEo
                              )}
                            >
                              {"No matching published entries found."}
                            </div>
                          )}
                        </ph.DataCtxReader>
                      }
                      filterField={"slug" as const}
                      filterValue={(() => {
                        try {
                          return $ctx.params.slug;
                        } catch (e) {
                          if (e instanceof TypeError) {
                            return undefined;
                          }
                          throw e;
                        }
                      })()}
                      forceEmptyState={false}
                      forceLoadingState={false}
                      limit={1 as const}
                      loadingMessage={
                        <ph.DataCtxReader>
                          {$ctx => (
                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__bV1Wm
                              )}
                            >
                              {"Loading..."}
                            </div>
                          )}
                        </ph.DataCtxReader>
                      }
                      noAutoRepeat={false}
                      noLayout={false}
                      table={"artigo" as const}
                      useDraft={false}
                    >
                      <ph.DataCtxReader>
                        {$ctx =>
                          true ? (
                            <div
                              data-plasmic-name={"container"}
                              data-plasmic-override={overrides.container}
                              className={classNames(
                                projectcss.all,
                                sty.container
                              )}
                            >
                              {true ? (
                                <div
                                  data-plasmic-name={"heading"}
                                  data-plasmic-override={overrides.heading}
                                  className={classNames(
                                    projectcss.all,
                                    sty.heading
                                  )}
                                >
                                  <CmsRowField
                                    className={classNames(
                                      "__wab_instance",
                                      sty.cmsEntryField__gc4Fb
                                    )}
                                  />

                                  <Tag
                                    data-plasmic-name={"tag"}
                                    data-plasmic-override={overrides.tag}
                                    className={classNames(
                                      "__wab_instance",
                                      sty.tag
                                    )}
                                  />
                                </div>
                              ) : null}

                              <CmsRowImage
                                data-plasmic-name={"cmsEntryImage"}
                                data-plasmic-override={overrides.cmsEntryImage}
                                className={classNames(
                                  "__wab_instance",
                                  sty.cmsEntryImage
                                )}
                                srcProp={"src" as const}
                              >
                                <p.PlasmicImg
                                  data-plasmic-name={"img"}
                                  data-plasmic-override={overrides.img}
                                  alt={""}
                                  className={classNames(sty.img)}
                                  displayHeight={
                                    hasVariant(
                                      globalVariants,
                                      "screen",
                                      "tablet"
                                    )
                                      ? ("auto" as const)
                                      : ("auto" as const)
                                  }
                                  displayMaxHeight={"none" as const}
                                  displayMaxWidth={"none" as const}
                                  displayMinHeight={
                                    hasVariant(
                                      globalVariants,
                                      "screen",
                                      "mobileOnly"
                                    )
                                      ? ("560px" as const)
                                      : ("70vh" as const)
                                  }
                                  displayMinWidth={"0" as const}
                                  displayWidth={
                                    hasVariant(
                                      globalVariants,
                                      "screen",
                                      "tablet"
                                    )
                                      ? ("100%" as const)
                                      : ("auto" as const)
                                  }
                                  src={
                                    "https://studio.plasmic.app/static/img/placeholder-full.png" as const
                                  }
                                />

                                <CmsRowField
                                  className={classNames(
                                    "__wab_instance",
                                    sty.cmsEntryField__x4XRt
                                  )}
                                  field={"imagemCapaAltText" as const}
                                />
                              </CmsRowImage>

                              {true ? (
                                <p
                                  data-plasmic-name={"content"}
                                  data-plasmic-override={overrides.content}
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.p,
                                    sty.content
                                  )}
                                >
                                  <CmsRowField
                                    className={classNames(
                                      "__wab_instance",
                                      sty.cmsEntryField__jgtmi
                                    )}
                                    field={"excerto" as const}
                                  />

                                  <CmsRowField
                                    className={classNames(
                                      "__wab_instance",
                                      sty.cmsEntryField__eznBk
                                    )}
                                    field={"conteudo" as const}
                                  />
                                </p>
                              ) : null}

                              <CmsRowField
                                className={classNames(
                                  "__wab_instance",
                                  sty.cmsEntryField__bj4Z1
                                )}
                                field={"bibliografia" as const}
                              />
                            </div>
                          ) : null
                        }
                      </ph.DataCtxReader>
                    </CmsQueryRepeater>
                  </main>
                ) : null}

                <Ornament
                  bottom={true}
                  className={classNames("__wab_instance", sty.ornament__if3VL)}
                />

                {true ? (
                  <BackButton
                    data-plasmic-name={"backButton"}
                    data-plasmic-override={overrides.backButton}
                    className={classNames("__wab_instance", sty.backButton)}
                  />
                ) : null}
              </div>
            ) : null}
          </Reveal>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  body: [
    "body",
    "reveal",
    "articleContainer",
    "main",
    "cmsDataLoader",
    "container",
    "heading",
    "tag",
    "cmsEntryImage",
    "img",
    "content",
    "backButton"
  ],
  reveal: [
    "reveal",
    "articleContainer",
    "main",
    "cmsDataLoader",
    "container",
    "heading",
    "tag",
    "cmsEntryImage",
    "img",
    "content",
    "backButton"
  ],
  articleContainer: [
    "articleContainer",
    "main",
    "cmsDataLoader",
    "container",
    "heading",
    "tag",
    "cmsEntryImage",
    "img",
    "content",
    "backButton"
  ],
  main: [
    "main",
    "cmsDataLoader",
    "container",
    "heading",
    "tag",
    "cmsEntryImage",
    "img",
    "content"
  ],
  cmsDataLoader: [
    "cmsDataLoader",
    "container",
    "heading",
    "tag",
    "cmsEntryImage",
    "img",
    "content"
  ],
  container: ["container", "heading", "tag", "cmsEntryImage", "img", "content"],
  heading: ["heading", "tag"],
  tag: ["tag"],
  cmsEntryImage: ["cmsEntryImage", "img"],
  img: ["img"],
  content: ["content"],
  backButton: ["backButton"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  body: "div";
  reveal: typeof Reveal;
  articleContainer: "div";
  main: "main";
  cmsDataLoader: typeof CmsQueryRepeater;
  container: "div";
  heading: "div";
  tag: typeof Tag;
  cmsEntryImage: typeof CmsRowImage;
  img: typeof p.PlasmicImg;
  content: "p";
  backButton: typeof BackButton;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicArticle__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicArticle__VariantsArgs;
    args?: PlasmicArticle__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicArticle__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicArticle__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicArticle__ArgProps,
          internalVariantPropNames: PlasmicArticle__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicArticle__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "body") {
    func.displayName = "PlasmicArticle";
  } else {
    func.displayName = `PlasmicArticle.${nodeName}`;
  }
  return func;
}

export const PlasmicArticle = Object.assign(
  // Top-level PlasmicArticle renders the root element
  makeNodeComponent("body"),
  {
    // Helper components rendering sub-elements
    reveal: makeNodeComponent("reveal"),
    articleContainer: makeNodeComponent("articleContainer"),
    main: makeNodeComponent("main"),
    cmsDataLoader: makeNodeComponent("cmsDataLoader"),
    container: makeNodeComponent("container"),
    heading: makeNodeComponent("heading"),
    tag: makeNodeComponent("tag"),
    cmsEntryImage: makeNodeComponent("cmsEntryImage"),
    img: makeNodeComponent("img"),
    content: makeNodeComponent("content"),
    backButton: makeNodeComponent("backButton"),

    // Metadata about props expected for PlasmicArticle
    internalVariantProps: PlasmicArticle__VariantProps,
    internalArgProps: PlasmicArticle__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Marta Espiridião, Researcher and Curator",
      description: "",
      ogImageSrc:
        "https://site-assets.plasmic.app/45f0ab1c21f0f763e8e2890c45d4df4f.png",
      canonical: "http://www.martaespiridiao.com"
    }
  }
);

export default PlasmicArticle;
/* prettier-ignore-end */
