// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7kHHtmp7kw7v5e6mQsr6wa
// Component: Gp2gyPlsjU

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

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_martas_radical_website.module.css"; // plasmic-import: 7kHHtmp7kw7v5e6mQsr6wa/projectcss
import sty from "./PlasmicButtonGhost.module.css"; // plasmic-import: Gp2gyPlsjU/css

export type PlasmicButtonGhost__VariantMembers = {};
export type PlasmicButtonGhost__VariantsArgs = {};
type VariantPropType = keyof PlasmicButtonGhost__VariantsArgs;
export const PlasmicButtonGhost__VariantProps = new Array<VariantPropType>();

export type PlasmicButtonGhost__ArgsType = {
  label?: React.ReactNode;
};
type ArgPropType = keyof PlasmicButtonGhost__ArgsType;
export const PlasmicButtonGhost__ArgProps = new Array<ArgPropType>("label");

export type PlasmicButtonGhost__OverridesType = {
  root?: p.Flex<"a"> & Partial<LinkProps>;
  label?: p.Flex<"div">;
};

export interface DefaultButtonGhostProps {
  label?: React.ReactNode;
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

function PlasmicButtonGhost__RenderFunc(props: {
  variants: PlasmicButtonGhost__VariantsArgs;
  args: PlasmicButtonGhost__ArgsType;
  overrides: PlasmicButtonGhost__OverridesType;
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
      href={undefined}
      platform={"nextjs"}
    >
      <div
        data-plasmic-name={"label"}
        data-plasmic-override={overrides.label}
        className={classNames(projectcss.all, sty.label)}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Get in Touch",
          value: args.label,
          className: classNames(sty.slotTargetLabel)
        })}
      </div>
    </p.PlasmicLink>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "label"],
  label: ["label"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "a";
  label: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicButtonGhost__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicButtonGhost__VariantsArgs;
    args?: PlasmicButtonGhost__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicButtonGhost__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicButtonGhost__ArgsType,
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
          internalArgPropNames: PlasmicButtonGhost__ArgProps,
          internalVariantPropNames: PlasmicButtonGhost__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicButtonGhost__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButtonGhost";
  } else {
    func.displayName = `PlasmicButtonGhost.${nodeName}`;
  }
  return func;
}

export const PlasmicButtonGhost = Object.assign(
  // Top-level PlasmicButtonGhost renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    label: makeNodeComponent("label"),

    // Metadata about props expected for PlasmicButtonGhost
    internalVariantProps: PlasmicButtonGhost__VariantProps,
    internalArgProps: PlasmicButtonGhost__ArgProps
  }
);

export default PlasmicButtonGhost;
/* prettier-ignore-end */
