// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7kHHtmp7kw7v5e6mQsr6wa
// Component: fuGFWdbuZH1

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
import sty from "./PlasmicSonicMaterialities.module.css"; // plasmic-import: fuGFWdbuZH1/css

createPlasmicElementProxy;

export type PlasmicSonicMaterialities__VariantMembers = {};
export type PlasmicSonicMaterialities__VariantsArgs = {};
type VariantPropType = keyof PlasmicSonicMaterialities__VariantsArgs;
export const PlasmicSonicMaterialities__VariantProps =
  new Array<VariantPropType>();

export type PlasmicSonicMaterialities__ArgsType = {
  expoSlug?: string;
};
type ArgPropType = keyof PlasmicSonicMaterialities__ArgsType;
export const PlasmicSonicMaterialities__ArgProps = new Array<ArgPropType>(
  "expoSlug"
);

export type PlasmicSonicMaterialities__OverridesType = {
  body?: p.Flex<"div">;
  reveal?: p.Flex<typeof Reveal>;
  exhibitionContainer?: p.Flex<"div">;
  main?: p.Flex<"main">;
  cmsDataFetcher?: p.Flex<typeof CmsQueryRepeater>;
  container?: p.Flex<"div">;
  heading?: p.Flex<"div">;
  tag?: p.Flex<typeof Tag>;
  cmsEntryImage?: p.Flex<typeof CmsRowImage>;
  img?: p.Flex<typeof p.PlasmicImg>;
  content?: p.Flex<"p">;
  freeBox?: p.Flex<"div">;
  backButton?: p.Flex<typeof BackButton>;
};

export interface DefaultSonicMaterialitiesProps {}

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

function PlasmicSonicMaterialities__RenderFunc(props: {
  variants: PlasmicSonicMaterialities__VariantsArgs;
  args: PlasmicSonicMaterialities__ArgsType;
  overrides: PlasmicSonicMaterialities__OverridesType;
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
        <title key="title">
          {PlasmicSonicMaterialities.pageMetadata.title}
        </title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicSonicMaterialities.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicSonicMaterialities.pageMetadata.title}
        />

        <meta
          key="og:image"
          property="og:image"
          content={PlasmicSonicMaterialities.pageMetadata.ogImageSrc}
        />
        <meta
          key="twitter:image"
          name="twitter:image"
          content={PlasmicSonicMaterialities.pageMetadata.ogImageSrc}
        />
        <link
          ref="canonical"
          href={PlasmicSonicMaterialities.pageMetadata.canonical}
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
            delay={undefined}
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
                      data-plasmic-name={"cmsDataFetcher"}
                      data-plasmic-override={overrides.cmsDataFetcher}
                      className={classNames(
                        "__wab_instance",
                        sty.cmsDataFetcher
                      )}
                      desc={false}
                      emptyMessage={
                        <ph.DataCtxReader>
                          {$ctx => (
                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text___3Uus0
                              )}
                            >
                              {"No matching published entries found."}
                            </div>
                          )}
                        </ph.DataCtxReader>
                      }
                      filterField={"expoSlug" as const}
                      filterValue={
                        "sonic-materialities-andreia-santana" as const
                      }
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
                                sty.text__cfUWy
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
                                  sty.ornament__uf3Ke
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
                                      sty.cmsEntryField__b722X
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
                                    <React.Fragment>
                                      {(() => {
                                        try {
                                          return $ctx.plasmicCmsExposItem.data
                                            .expoTag;
                                        } catch (e) {
                                          if (
                                            e instanceof TypeError ||
                                            e?.plasmicType ===
                                              "PlasmicUndefinedDataError"
                                          ) {
                                            return "Writing";
                                          }
                                          throw e;
                                        }
                                      })()}
                                    </React.Fragment>
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
                                      ? ("560px" as const)
                                      : hasVariant(
                                          globalVariants,
                                          "screen",
                                          "tablet"
                                        )
                                      ? ("900px" as const)
                                      : ("700px" as const)
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
                                      sty.cmsEntryField__yYxf1
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
                                          sty.cmsEntryField___26IZ
                                        )}
                                        dateFormat={"MMM D, YYYY" as const}
                                        field={"expoDataStart" as const}
                                      />

                                      <div
                                        className={classNames(
                                          projectcss.all,
                                          projectcss.__wab_text,
                                          sty.text__byxdt
                                        )}
                                      >
                                        {"\u2014"}
                                      </div>
                                      <CmsRowField
                                        className={classNames(
                                          "__wab_instance",
                                          sty.cmsEntryField__cjwyk
                                        )}
                                        dateFormat={"MMM D, YYYY" as const}
                                        field={"expoDataEnd" as const}
                                      />
                                    </div>
                                  ) : null}
                                  <CmsRowField
                                    className={classNames(
                                      "__wab_instance",
                                      sty.cmsEntryField__tv1P
                                    )}
                                    field={"expoExcerto" as const}
                                  />
                                </p>
                              ) : null}
                              <CmsRowField
                                className={classNames(
                                  "__wab_instance",
                                  sty.cmsEntryField__aWtT9
                                )}
                                field={"expoConteudo" as const}
                              />
                            </div>
                          ) : null
                        }
                      </ph.DataCtxReader>
                    </CmsQueryRepeater>
                    <Ornament
                      bottom={true}
                      className={classNames(
                        "__wab_instance",
                        sty.ornament__aBn1Z
                      )}
                    />
                  </main>
                ) : null}
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
    "cmsDataFetcher",
    "container",
    "heading",
    "tag",
    "cmsEntryImage",
    "img",
    "content",
    "freeBox",
    "backButton"
  ],
  reveal: [
    "reveal",
    "exhibitionContainer",
    "main",
    "cmsDataFetcher",
    "container",
    "heading",
    "tag",
    "cmsEntryImage",
    "img",
    "content",
    "freeBox",
    "backButton"
  ],
  exhibitionContainer: [
    "exhibitionContainer",
    "main",
    "cmsDataFetcher",
    "container",
    "heading",
    "tag",
    "cmsEntryImage",
    "img",
    "content",
    "freeBox",
    "backButton"
  ],
  main: [
    "main",
    "cmsDataFetcher",
    "container",
    "heading",
    "tag",
    "cmsEntryImage",
    "img",
    "content",
    "freeBox"
  ],
  cmsDataFetcher: [
    "cmsDataFetcher",
    "container",
    "heading",
    "tag",
    "cmsEntryImage",
    "img",
    "content",
    "freeBox"
  ],
  container: [
    "container",
    "heading",
    "tag",
    "cmsEntryImage",
    "img",
    "content",
    "freeBox"
  ],
  heading: ["heading", "tag"],
  tag: ["tag"],
  cmsEntryImage: ["cmsEntryImage", "img"],
  img: ["img"],
  content: ["content", "freeBox"],
  freeBox: ["freeBox"],
  backButton: ["backButton"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  body: "div";
  reveal: typeof Reveal;
  exhibitionContainer: "div";
  main: "main";
  cmsDataFetcher: typeof CmsQueryRepeater;
  container: "div";
  heading: "div";
  tag: typeof Tag;
  cmsEntryImage: typeof CmsRowImage;
  img: typeof p.PlasmicImg;
  content: "p";
  freeBox: "div";
  backButton: typeof BackButton;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSonicMaterialities__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSonicMaterialities__VariantsArgs;
    args?: PlasmicSonicMaterialities__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSonicMaterialities__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSonicMaterialities__ArgsType,
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
          internalArgPropNames: PlasmicSonicMaterialities__ArgProps,
          internalVariantPropNames: PlasmicSonicMaterialities__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSonicMaterialities__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "body") {
    func.displayName = "PlasmicSonicMaterialities";
  } else {
    func.displayName = `PlasmicSonicMaterialities.${nodeName}`;
  }
  return func;
}

export const PlasmicSonicMaterialities = Object.assign(
  // Top-level PlasmicSonicMaterialities renders the root element
  makeNodeComponent("body"),
  {
    // Helper components rendering sub-elements
    reveal: makeNodeComponent("reveal"),
    exhibitionContainer: makeNodeComponent("exhibitionContainer"),
    main: makeNodeComponent("main"),
    cmsDataFetcher: makeNodeComponent("cmsDataFetcher"),
    container: makeNodeComponent("container"),
    heading: makeNodeComponent("heading"),
    tag: makeNodeComponent("tag"),
    cmsEntryImage: makeNodeComponent("cmsEntryImage"),
    img: makeNodeComponent("img"),
    content: makeNodeComponent("content"),
    freeBox: makeNodeComponent("freeBox"),
    backButton: makeNodeComponent("backButton"),

    // Metadata about props expected for PlasmicSonicMaterialities
    internalVariantProps: PlasmicSonicMaterialities__VariantProps,
    internalArgProps: PlasmicSonicMaterialities__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Sonic Materialities",
      description: "",
      ogImageSrc:
        "https://site-assets.plasmic.app/45f0ab1c21f0f763e8e2890c45d4df4f.png",
      canonical: "http://www.martaespiridiao.com"
    }
  }
);

export default PlasmicSonicMaterialities;
/* prettier-ignore-end */
