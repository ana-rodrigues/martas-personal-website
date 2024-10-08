// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7kHHtmp7kw7v5e6mQsr6wa
// Component: oGDcZ7dAly

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { useScreenVariants as useScreenVariantsqd2M7Fh1C7FCr } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: qd2M7fh1c7fCR/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_martas_radical_website.module.css"; // plasmic-import: 7kHHtmp7kw7v5e6mQsr6wa/projectcss
import sty from "./PlasmicHero.module.css"; // plasmic-import: oGDcZ7dAly/css

createPlasmicElementProxy;

export type PlasmicHero__VariantMembers = {};
export type PlasmicHero__VariantsArgs = {};
type VariantPropType = keyof PlasmicHero__VariantsArgs;
export const PlasmicHero__VariantProps = new Array<VariantPropType>();

export type PlasmicHero__ArgsType = {};
type ArgPropType = keyof PlasmicHero__ArgsType;
export const PlasmicHero__ArgProps = new Array<ArgPropType>();

export type PlasmicHero__OverridesType = {
  root?: Flex__<"div">;
  panelLeft?: Flex__<"div">;
  img?: Flex__<typeof PlasmicImg__>;
  panelRight?: Flex__<"div">;
  p?: Flex__<"p">;
};

export interface DefaultHeroProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHero__RenderFunc(props: {
  variants: PlasmicHero__VariantsArgs;
  args: PlasmicHero__ArgsType;
  overrides: PlasmicHero__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsqd2M7Fh1C7FCr()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <Stack__
        as={"div"}
        data-plasmic-name={"panelLeft"}
        data-plasmic-override={overrides.panelLeft}
        hasGap={true}
        className={classNames(projectcss.all, sty.panelLeft)}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text___25S3
          )}
        >
          {"Art curator"}
        </div>
        <PlasmicImg__
          data-plasmic-name={"img"}
          data-plasmic-override={overrides.img}
          alt={""}
          className={classNames(sty.img)}
          displayHeight={"100%"}
          displayMaxHeight={"60%"}
          displayMaxWidth={"none"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={
            hasVariant(globalVariants, "screen", "mobileOnly") ? "80%" : "auto"
          }
          loading={"lazy"}
          src={{
            src: "/plasmic/martas_radical_website/images/_555453A069C74Ec3A60294Cdf88D97311583000002517D066A0FJpg.jpg",
            fullWidth: 749,
            fullHeight: 1124,
            aspectRatio: undefined
          }}
        />

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__epqC
          )}
        >
          {"& researcher"}
        </div>
      </Stack__>
      <div
        data-plasmic-name={"panelRight"}
        data-plasmic-override={overrides.panelRight}
        className={classNames(projectcss.all, sty.panelRight)}
      >
        <p
          data-plasmic-name={"p"}
          data-plasmic-override={overrides.p}
          className={classNames(
            projectcss.all,
            projectcss.p,
            projectcss.__wab_text,
            sty.p
          )}
        >
          {
            "Independent curator and researcher, works on subjects like queer and feminist studies in relation to contemporary art and other matters of everyday life. Other interests include books, witchcraft and contributing to the end of capitalism."
          }
        </p>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "panelLeft", "img", "panelRight", "p"],
  panelLeft: ["panelLeft", "img"],
  img: ["img"],
  panelRight: ["panelRight", "p"],
  p: ["p"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  panelLeft: "div";
  img: typeof PlasmicImg__;
  panelRight: "div";
  p: "p";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHero__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHero__VariantsArgs;
    args?: PlasmicHero__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHero__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHero__ArgsType,
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
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHero__ArgProps,
          internalVariantPropNames: PlasmicHero__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHero__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHero";
  } else {
    func.displayName = `PlasmicHero.${nodeName}`;
  }
  return func;
}

export const PlasmicHero = Object.assign(
  // Top-level PlasmicHero renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    panelLeft: makeNodeComponent("panelLeft"),
    img: makeNodeComponent("img"),
    panelRight: makeNodeComponent("panelRight"),
    p: makeNodeComponent("p"),

    // Metadata about props expected for PlasmicHero
    internalVariantProps: PlasmicHero__VariantProps,
    internalArgProps: PlasmicHero__ArgProps
  }
);

export default PlasmicHero;
/* prettier-ignore-end */
