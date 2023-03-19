// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7kHHtmp7kw7v5e6mQsr6wa
// Component: xiHfOpwUTy3

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
import { CmsQueryRepeater } from "@plasmicpkgs/plasmic-cms"; // plasmic-import: 8N9-WfZSaq/codeComponent
import Ornament from "../../Ornament"; // plasmic-import: DXi2tuunkH/component
import { CmsRowField } from "@plasmicpkgs/plasmic-cms"; // plasmic-import: w6HdOz-Pcn/codeComponent
import Tag from "../../Tag"; // plasmic-import: D4A_nzoplA/component
import { CmsRowImage } from "@plasmicpkgs/plasmic-cms"; // plasmic-import: dj_Vc2QmFA/codeComponent
import BackButton from "../../BackButton"; // plasmic-import: 4iL8_Fj5jz/component

import { useScreenVariants as useScreenVariantsqd2M7Fh1C7FCr } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: qd2M7fh1c7fCR/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_martas_radical_website.module.css"; // plasmic-import: 7kHHtmp7kw7v5e6mQsr6wa/projectcss
import sty from "./PlasmicAtNightAllCats.module.css"; // plasmic-import: xiHfOpwUTy3/css

export type PlasmicAtNightAllCats__VariantMembers = {};
export type PlasmicAtNightAllCats__VariantsArgs = {};
type VariantPropType = keyof PlasmicAtNightAllCats__VariantsArgs;
export const PlasmicAtNightAllCats__VariantProps = new Array<VariantPropType>();

export type PlasmicAtNightAllCats__ArgsType = {
  expoSlug?: string;
};
type ArgPropType = keyof PlasmicAtNightAllCats__ArgsType;
export const PlasmicAtNightAllCats__ArgProps = new Array<ArgPropType>(
  "expoSlug"
);

export type PlasmicAtNightAllCats__OverridesType = {
  body?: p.Flex<"div">;
  reveal?: p.Flex<typeof Reveal>;
  exhibitionContainer?: p.Flex<"div">;
  main?: p.Flex<"main">;
  cmsDataLoader?: p.Flex<typeof CmsQueryRepeater>;
  container?: p.Flex<"div">;
  heading?: p.Flex<"div">;
  tag?: p.Flex<typeof Tag>;
  cmsEntryImage?: p.Flex<typeof CmsRowImage>;
  img?: p.Flex<typeof p.PlasmicImg>;
  content?: p.Flex<"p">;
  freeBox?: p.Flex<"div">;
  text?: p.Flex<"div">;
  backButton?: p.Flex<typeof BackButton>;
};

export interface DefaultAtNightAllCatsProps {}

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

function PlasmicAtNightAllCats__RenderFunc(props: {
  variants: PlasmicAtNightAllCats__VariantsArgs;
  args: PlasmicAtNightAllCats__ArgsType;
  overrides: PlasmicAtNightAllCats__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          expoSlug: undefined
        },
        props.args
      ),
    [props.args]
  );

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
        <title key="title">{PlasmicAtNightAllCats.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicAtNightAllCats.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicAtNightAllCats.pageMetadata.title}
        />

        <meta
          key="og:image"
          property="og:image"
          content={PlasmicAtNightAllCats.pageMetadata.ogImageSrc}
        />
        <meta
          key="twitter:image"
          name="twitter:image"
          content={PlasmicAtNightAllCats.pageMetadata.ogImageSrc}
        />
        <link
          ref="canonical"
          href={PlasmicAtNightAllCats.pageMetadata.canonical}
        />
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
                data-plasmic-name={"exhibitionContainer"}
                data-plasmic-override={overrides.exhibitionContainer}
                className={classNames(projectcss.all, sty.exhibitionContainer)}
              >
                {true ? (
                  <main
                    data-plasmic-name={"main"}
                    data-plasmic-override={overrides.main}
                    className={classNames(projectcss.all, sty.main)}
                  >
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
                                sty.text__vz8K4
                              )}
                            >
                              {"No matching published entries found."}
                            </div>
                          )}
                        </ph.DataCtxReader>
                      }
                      filterField={"expoSlug" as const}
                      filterValue={"at-night-all-cats" as const}
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
                                sty.text__t9XMr
                              )}
                            >
                              {"Loading..."}
                            </div>
                          )}
                        </ph.DataCtxReader>
                      }
                      noAutoRepeat={false}
                      noLayout={false}
                      table={"expos" as const}
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
                              <Ornament
                                className={classNames(
                                  "__wab_instance",
                                  sty.ornament___5RRaF
                                )}
                              />

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
                                      sty.cmsEntryField__ou25Z
                                    )}
                                  />

                                  <Tag
                                    data-plasmic-name={"tag"}
                                    data-plasmic-override={overrides.tag}
                                    className={classNames(
                                      "__wab_instance",
                                      sty.tag
                                    )}
                                  >
                                    {(() => {
                                      try {
                                        return $ctx.plasmicCmsExposItem.data
                                          .expoTag;
                                      } catch (e) {
                                        if (e instanceof TypeError) {
                                          return "Writing";
                                        }
                                        throw e;
                                      }
                                    })()}
                                  </Tag>
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
                                      "mobileOnly"
                                    )
                                      ? ("260px" as const)
                                      : hasVariant(
                                          globalVariants,
                                          "screen",
                                          "tablet"
                                        )
                                      ? ("auto" as const)
                                      : ("70vh" as const)
                                  }
                                  displayMaxHeight={"none" as const}
                                  displayMaxWidth={"none" as const}
                                  displayMinHeight={"0" as const}
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
                                      sty.cmsEntryField__lU2Wr
                                    )}
                                    field={"expoLocal" as const}
                                  />

                                  {true ? (
                                    <div
                                      data-plasmic-name={"freeBox"}
                                      data-plasmic-override={overrides.freeBox}
                                      className={classNames(
                                        projectcss.all,
                                        sty.freeBox
                                      )}
                                    >
                                      <CmsRowField
                                        className={classNames(
                                          "__wab_instance",
                                          sty.cmsEntryField__l8ISd
                                        )}
                                        dateFormat={"MMM D, YYYY" as const}
                                        field={"expoDataStart" as const}
                                      />

                                      <div
                                        data-plasmic-name={"text"}
                                        data-plasmic-override={overrides.text}
                                        className={classNames(
                                          projectcss.all,
                                          projectcss.__wab_text,
                                          sty.text
                                        )}
                                      >
                                        {"—"}
                                      </div>

                                      <CmsRowField
                                        className={classNames(
                                          "__wab_instance",
                                          sty.cmsEntryField__iMutJ
                                        )}
                                        dateFormat={"MMM D, YYYY" as const}
                                        field={"expoDataEnd" as const}
                                      />
                                    </div>
                                  ) : null}

                                  <CmsRowField
                                    className={classNames(
                                      "__wab_instance",
                                      sty.cmsEntryField__wsXcQ
                                    )}
                                    field={"expoExcerto" as const}
                                  />
                                </p>
                              ) : null}

                              <CmsRowField
                                className={classNames(
                                  "__wab_instance",
                                  sty.cmsEntryField___1Q8HD
                                )}
                                field={"expoConteudo" as const}
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
                  className={classNames("__wab_instance", sty.ornament__eIOo0)}
                />

                {true ? (
                  <BackButton
                    data-plasmic-name={"backButton"}
                    data-plasmic-override={overrides.backButton}
                    className={classNames("__wab_instance", sty.backButton)}
                    targetAbout={true}
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
    "exhibitionContainer",
    "main",
    "cmsDataLoader",
    "container",
    "heading",
    "tag",
    "cmsEntryImage",
    "img",
    "content",
    "freeBox",
    "text",
    "backButton"
  ],
  reveal: [
    "reveal",
    "exhibitionContainer",
    "main",
    "cmsDataLoader",
    "container",
    "heading",
    "tag",
    "cmsEntryImage",
    "img",
    "content",
    "freeBox",
    "text",
    "backButton"
  ],
  exhibitionContainer: [
    "exhibitionContainer",
    "main",
    "cmsDataLoader",
    "container",
    "heading",
    "tag",
    "cmsEntryImage",
    "img",
    "content",
    "freeBox",
    "text",
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
    "content",
    "freeBox",
    "text"
  ],
  cmsDataLoader: [
    "cmsDataLoader",
    "container",
    "heading",
    "tag",
    "cmsEntryImage",
    "img",
    "content",
    "freeBox",
    "text"
  ],
  container: [
    "container",
    "heading",
    "tag",
    "cmsEntryImage",
    "img",
    "content",
    "freeBox",
    "text"
  ],
  heading: ["heading", "tag"],
  tag: ["tag"],
  cmsEntryImage: ["cmsEntryImage", "img"],
  img: ["img"],
  content: ["content", "freeBox", "text"],
  freeBox: ["freeBox", "text"],
  text: ["text"],
  backButton: ["backButton"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  body: "div";
  reveal: typeof Reveal;
  exhibitionContainer: "div";
  main: "main";
  cmsDataLoader: typeof CmsQueryRepeater;
  container: "div";
  heading: "div";
  tag: typeof Tag;
  cmsEntryImage: typeof CmsRowImage;
  img: typeof p.PlasmicImg;
  content: "p";
  freeBox: "div";
  text: "div";
  backButton: typeof BackButton;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAtNightAllCats__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAtNightAllCats__VariantsArgs;
    args?: PlasmicAtNightAllCats__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAtNightAllCats__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicAtNightAllCats__ArgsType,
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
          internalArgPropNames: PlasmicAtNightAllCats__ArgProps,
          internalVariantPropNames: PlasmicAtNightAllCats__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAtNightAllCats__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "body") {
    func.displayName = "PlasmicAtNightAllCats";
  } else {
    func.displayName = `PlasmicAtNightAllCats.${nodeName}`;
  }
  return func;
}

export const PlasmicAtNightAllCats = Object.assign(
  // Top-level PlasmicAtNightAllCats renders the root element
  makeNodeComponent("body"),
  {
    // Helper components rendering sub-elements
    reveal: makeNodeComponent("reveal"),
    exhibitionContainer: makeNodeComponent("exhibitionContainer"),
    main: makeNodeComponent("main"),
    cmsDataLoader: makeNodeComponent("cmsDataLoader"),
    container: makeNodeComponent("container"),
    heading: makeNodeComponent("heading"),
    tag: makeNodeComponent("tag"),
    cmsEntryImage: makeNodeComponent("cmsEntryImage"),
    img: makeNodeComponent("img"),
    content: makeNodeComponent("content"),
    freeBox: makeNodeComponent("freeBox"),
    text: makeNodeComponent("text"),
    backButton: makeNodeComponent("backButton"),

    // Metadata about props expected for PlasmicAtNightAllCats
    internalVariantProps: PlasmicAtNightAllCats__VariantProps,
    internalArgProps: PlasmicAtNightAllCats__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "At night all cats",
      description: "",
      ogImageSrc:
        "https://site-assets.plasmic.app/45f0ab1c21f0f763e8e2890c45d4df4f.png",
      canonical: "http://www.martaespiridiao.com"
    }
  }
);

export default PlasmicAtNightAllCats;
/* prettier-ignore-end */
