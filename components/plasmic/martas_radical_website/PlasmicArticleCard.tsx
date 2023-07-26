// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7kHHtmp7kw7v5e6mQsr6wa
// Component: FpGeBZ3fSu

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
import Tag from "../../Tag"; // plasmic-import: D4A_nzoplA/component
import { CmsRowField } from "@plasmicpkgs/plasmic-cms"; // plasmic-import: w6HdOz-Pcn/codeComponent
import { CmsRowImage } from "@plasmicpkgs/plasmic-cms"; // plasmic-import: dj_Vc2QmFA/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_martas_radical_website.module.css"; // plasmic-import: 7kHHtmp7kw7v5e6mQsr6wa/projectcss
import sty from "./PlasmicArticleCard.module.css"; // plasmic-import: FpGeBZ3fSu/css

createPlasmicElementProxy;

export type PlasmicArticleCard__VariantMembers = {};
export type PlasmicArticleCard__VariantsArgs = {};
type VariantPropType = keyof PlasmicArticleCard__VariantsArgs;
export const PlasmicArticleCard__VariantProps = new Array<VariantPropType>();

export type PlasmicArticleCard__ArgsType = {
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicArticleCard__ArgsType;
export const PlasmicArticleCard__ArgProps = new Array<ArgPropType>("children");

export type PlasmicArticleCard__OverridesType = {
  root?: p.Flex<"a"> & Partial<LinkProps>;
  articleCardContainer?: p.Flex<"article">;
  tag?: p.Flex<typeof Tag>;
  cmsEntryImage?: p.Flex<typeof CmsRowImage>;
  img?: p.Flex<typeof p.PlasmicImg>;
};

export interface DefaultArticleCardProps {
  children?: React.ReactNode;
  className?: string;
}

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

function PlasmicArticleCard__RenderFunc(props: {
  variants: PlasmicArticleCard__VariantsArgs;
  args: PlasmicArticleCard__ArgsType;
  overrides: PlasmicArticleCard__OverridesType;
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

  return (
    <p.PlasmicLink
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
      component={Link}
      href={`/${(() => {
        try {
          return $ctx.plasmicCmsArtigoItem.data.slug;
        } catch (e) {
          if (
            e instanceof TypeError ||
            e?.plasmicType === "PlasmicUndefinedDataError"
          ) {
            return "wonder-women-the-heroines-of-the-moving-image";
          }
          throw e;
        }
      })()}`}
      platform={"nextjs"}
    >
      {true ? (
        <article
          data-plasmic-name={"articleCardContainer"}
          data-plasmic-override={overrides.articleCardContainer}
          className={classNames(projectcss.all, sty.articleCardContainer)}
        >
          <Tag
            data-plasmic-name={"tag"}
            data-plasmic-override={overrides.tag}
            className={classNames("__wab_instance", sty.tag)}
          >
            {p.renderPlasmicSlot({
              defaultContents: (
                <React.Fragment>
                  {(() => {
                    try {
                      return $ctx.plasmicCmsArtigoCollections[1].data.tags;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "Writing";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              ),
              value: args.children
            })}
          </Tag>
          <CmsRowField
            className={classNames("__wab_instance", sty.cmsEntryField__kfP5D)}
          />

          <CmsRowImage
            data-plasmic-name={"cmsEntryImage"}
            data-plasmic-override={overrides.cmsEntryImage}
            className={classNames("__wab_instance", sty.cmsEntryImage)}
            srcProp={"src" as const}
          >
            <p.PlasmicImg
              data-plasmic-name={"img"}
              data-plasmic-override={overrides.img}
              alt={""}
              className={classNames(sty.img)}
              displayHeight={"auto" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"none" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"100%" as const}
              src={
                "https://studio.plasmic.app/static/img/placeholder-full.png" as const
              }
            />
          </CmsRowImage>
          <CmsRowField
            className={classNames("__wab_instance", sty.cmsEntryField__ibZ0)}
            field={"excerto" as const}
          />
        </article>
      ) : null}
    </p.PlasmicLink>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "articleCardContainer", "tag", "cmsEntryImage", "img"],
  articleCardContainer: ["articleCardContainer", "tag", "cmsEntryImage", "img"],
  tag: ["tag"],
  cmsEntryImage: ["cmsEntryImage", "img"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "a";
  articleCardContainer: "article";
  tag: typeof Tag;
  cmsEntryImage: typeof CmsRowImage;
  img: typeof p.PlasmicImg;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicArticleCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicArticleCard__VariantsArgs;
    args?: PlasmicArticleCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicArticleCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicArticleCard__ArgsType,
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
          internalArgPropNames: PlasmicArticleCard__ArgProps,
          internalVariantPropNames: PlasmicArticleCard__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicArticleCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicArticleCard";
  } else {
    func.displayName = `PlasmicArticleCard.${nodeName}`;
  }
  return func;
}

export const PlasmicArticleCard = Object.assign(
  // Top-level PlasmicArticleCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    articleCardContainer: makeNodeComponent("articleCardContainer"),
    tag: makeNodeComponent("tag"),
    cmsEntryImage: makeNodeComponent("cmsEntryImage"),
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicArticleCard
    internalVariantProps: PlasmicArticleCard__VariantProps,
    internalArgProps: PlasmicArticleCard__ArgProps
  }
);

export default PlasmicArticleCard;
/* prettier-ignore-end */
