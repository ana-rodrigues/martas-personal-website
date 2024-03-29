// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7kHHtmp7kw7v5e6mQsr6wa
// Component: 4iL8_Fj5jz

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

import { useScreenVariants as useScreenVariantsqd2M7Fh1C7FCr } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: qd2M7fh1c7fCR/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_martas_radical_website.module.css"; // plasmic-import: 7kHHtmp7kw7v5e6mQsr6wa/projectcss
import sty from "./PlasmicBackButton.module.css"; // plasmic-import: 4iL8_Fj5jz/css

createPlasmicElementProxy;

export type PlasmicBackButton__VariantMembers = {
  targetAbout: "targetAbout";
};
export type PlasmicBackButton__VariantsArgs = {
  targetAbout?: SingleBooleanChoiceArg<"targetAbout">;
};
type VariantPropType = keyof PlasmicBackButton__VariantsArgs;
export const PlasmicBackButton__VariantProps = new Array<VariantPropType>(
  "targetAbout"
);

export type PlasmicBackButton__ArgsType = {};
type ArgPropType = keyof PlasmicBackButton__ArgsType;
export const PlasmicBackButton__ArgProps = new Array<ArgPropType>();

export type PlasmicBackButton__OverridesType = {
  root?: p.Flex<"nav">;
  link?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultBackButtonProps {
  targetAbout?: SingleBooleanChoiceArg<"targetAbout">;
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

function PlasmicBackButton__RenderFunc(props: {
  variants: PlasmicBackButton__VariantsArgs;
  args: PlasmicBackButton__ArgsType;
  overrides: PlasmicBackButton__OverridesType;
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

  const stateSpecs = React.useMemo(
    () => [
      {
        path: "targetAbout",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.targetAbout
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries,
    $refs
  });

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsqd2M7Fh1C7FCr()
  });

  return (
    true ? (
      <p.Stack
        as={"nav"}
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        hasGap={true}
        className={classNames(
          projectcss.all,
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          projectcss.plasmic_tokens,
          sty.root,
          {
            [sty.roottargetAbout]: hasVariant(
              $state,
              "targetAbout",
              "targetAbout"
            )
          }
        )}
      >
        <p.PlasmicLink
          data-plasmic-name={"link"}
          data-plasmic-override={overrides.link}
          className={classNames(
            projectcss.all,
            projectcss.a,
            projectcss.__wab_text,
            sty.link,
            {
              [sty.linktargetAbout]: hasVariant(
                $state,
                "targetAbout",
                "targetAbout"
              )
            }
          )}
          component={Link}
          href={
            hasVariant($state, "targetAbout", "targetAbout")
              ? ("/#about" as const)
              : ("/#articles" as const)
          }
          platform={"nextjs"}
        >
          {"Back"}
        </p.PlasmicLink>
      </p.Stack>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "link"],
  link: ["link"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "nav";
  link: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBackButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBackButton__VariantsArgs;
    args?: PlasmicBackButton__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBackButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicBackButton__ArgsType,
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
          internalArgPropNames: PlasmicBackButton__ArgProps,
          internalVariantPropNames: PlasmicBackButton__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicBackButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBackButton";
  } else {
    func.displayName = `PlasmicBackButton.${nodeName}`;
  }
  return func;
}

export const PlasmicBackButton = Object.assign(
  // Top-level PlasmicBackButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    link: makeNodeComponent("link"),

    // Metadata about props expected for PlasmicBackButton
    internalVariantProps: PlasmicBackButton__VariantProps,
    internalArgProps: PlasmicBackButton__ArgProps
  }
);

export default PlasmicBackButton;
/* prettier-ignore-end */
