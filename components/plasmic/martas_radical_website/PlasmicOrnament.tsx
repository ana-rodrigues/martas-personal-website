// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7kHHtmp7kw7v5e6mQsr6wa
// Component: DXi2tuunkH

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
import sty from "./PlasmicOrnament.module.css"; // plasmic-import: DXi2tuunkH/css

createPlasmicElementProxy;

export type PlasmicOrnament__VariantMembers = {
  bottom: "bottom";
};
export type PlasmicOrnament__VariantsArgs = {
  bottom?: SingleBooleanChoiceArg<"bottom">;
};
type VariantPropType = keyof PlasmicOrnament__VariantsArgs;
export const PlasmicOrnament__VariantProps = new Array<VariantPropType>(
  "bottom"
);

export type PlasmicOrnament__ArgsType = {};
type ArgPropType = keyof PlasmicOrnament__ArgsType;
export const PlasmicOrnament__ArgProps = new Array<ArgPropType>();

export type PlasmicOrnament__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultOrnamentProps {
  bottom?: SingleBooleanChoiceArg<"bottom">;
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

function PlasmicOrnament__RenderFunc(props: {
  variants: PlasmicOrnament__VariantsArgs;
  args: PlasmicOrnament__ArgsType;
  overrides: PlasmicOrnament__OverridesType;
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
        path: "bottom",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.bottom
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

  return (
    <p.Stack
      as={"div"}
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
        { [sty.rootbottom]: hasVariant($state, "bottom", "bottom") }
      )}
    >
      <div
        className={classNames(projectcss.all, sty.column__qc3B9, {
          [sty.columnbottom__qc3B9RtaNk]: hasVariant($state, "bottom", "bottom")
        })}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__jlDA,
            {
              [sty.textbottom__jlDArtaNk]: hasVariant(
                $state,
                "bottom",
                "bottom"
              )
            }
          )}
        >
          {"  "}
        </div>
      </div>
      <div
        className={classNames(projectcss.all, sty.column__vx2Uj, {
          [sty.columnbottom__vx2UjrtaNk]: hasVariant($state, "bottom", "bottom")
        })}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__tcueN,
            {
              [sty.textbottom__tcueNrtaNk]: hasVariant(
                $state,
                "bottom",
                "bottom"
              )
            }
          )}
        >
          {"  "}
        </div>
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicOrnament__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicOrnament__VariantsArgs;
    args?: PlasmicOrnament__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicOrnament__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicOrnament__ArgsType,
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
          internalArgPropNames: PlasmicOrnament__ArgProps,
          internalVariantPropNames: PlasmicOrnament__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicOrnament__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicOrnament";
  } else {
    func.displayName = `PlasmicOrnament.${nodeName}`;
  }
  return func;
}

export const PlasmicOrnament = Object.assign(
  // Top-level PlasmicOrnament renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicOrnament
    internalVariantProps: PlasmicOrnament__VariantProps,
    internalArgProps: PlasmicOrnament__ArgProps
  }
);

export default PlasmicOrnament;
/* prettier-ignore-end */
